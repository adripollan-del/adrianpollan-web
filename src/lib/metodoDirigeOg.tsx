/**
 * Imagen de Open Graph compartida por las landings de Método Dirige
 * (/metodo-dirige y /metodo-dirige-plazas-cubiertas). Mismo lenguaje visual
 * que la página (navy #152238 / coral #E8623D), pero sin precio ni datos
 * del programa: solo marca y promesa, para no filtrar nada antes de la
 * llamada cuando se comparte el link.
 */
export function metodoDirigeOgImage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#152238",
        position: "relative",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -80,
          left: 60,
          width: 420,
          height: 420,
          borderRadius: 9999,
          backgroundColor: "rgba(232,98,61,0.18)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -110,
          right: 20,
          width: 380,
          height: 380,
          borderRadius: 9999,
          backgroundColor: "rgba(232,98,61,0.14)",
          display: "flex",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 108,
          height: 108,
          borderRadius: 9999,
          backgroundColor: "#E8623D",
          marginBottom: 36,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 62,
            height: 62,
            borderRadius: 9999,
            border: "5px solid #F5F3F0",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 16,
              height: 16,
              borderRadius: 9999,
              backgroundColor: "#F5F3F0",
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 62,
          fontWeight: 700,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: "#F5F3F0",
        }}
      >
        Método Dirige
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 28,
          fontWeight: 600,
          letterSpacing: 1,
          color: "#E8623D",
          marginTop: 20,
        }}
      >
        El programa de 90 días
      </div>
    </div>
  );
}
