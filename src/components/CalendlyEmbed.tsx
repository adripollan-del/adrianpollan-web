"use client";

import { useEffect } from "react";

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full rounded-sm overflow-hidden border border-navy/10"
      // TODO: replace with your Calendly URL
      data-url="https://calendly.com/adrianpollan/sesion-gratuita?hide_gdpr_banner=1&background_color=f5f0e8&text_color=1a1a18&primary_color=BA7517"
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
