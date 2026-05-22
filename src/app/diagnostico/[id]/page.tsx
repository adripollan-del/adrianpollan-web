"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/gtag";

export default function DiagnosticoReportPage() {
  useEffect(() => {
    trackEvent("diagnostico_completado", {
      event_category: "conversion",
      event_label: "Informe final diagnóstico",
    });
  }, []);

  return null;
}
