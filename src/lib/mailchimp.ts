// Cliente mínimo de Mailchimp para suscribir emails a una audiencia.
// Devuelve { ok: true } en éxito, o { ok: false, error, code } en fallo
// (incluyendo el caso "ya suscrito" con code 409).

type SubscribeResult =
  | { ok: true }
  | { ok: false; error: string; code: number };

export async function subscribeToList(
  email: string,
  listId: string
): Promise<SubscribeResult> {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  if (!apiKey) {
    return {
      ok: false,
      error: "Servicio no configurado. Inténtalo más tarde.",
      code: 500,
    };
  }

  // El datacenter va al final de la API key, separado por guion (ej. ...-us1)
  const dc = apiKey.split("-").pop();
  if (!dc) {
    return {
      ok: false,
      error: "Servicio mal configurado. Inténtalo más tarde.",
      code: 500,
    };
  }

  const url = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`;
  const auth = Buffer.from(`anystring:${apiKey}`).toString("base64");

  let res: Response;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({ email_address: email, status: "subscribed" }),
    });
  } catch {
    return {
      ok: false,
      error: "No se pudo conectar con el servicio de suscripción.",
      code: 502,
    };
  }

  if (res.ok) return { ok: true };

  const data = (await res.json().catch(() => null)) as
    | { title?: string; detail?: string }
    | null;

  if (data?.title === "Member Exists") {
    return {
      ok: false,
      error: "Este email ya está suscrito.",
      code: 409,
    };
  }

  if (data?.title === "Invalid Resource") {
    return {
      ok: false,
      error: "El email no es válido.",
      code: 400,
    };
  }

  return {
    ok: false,
    error: "No se pudo completar la suscripción. Inténtalo más tarde.",
    code: 500,
  };
}
