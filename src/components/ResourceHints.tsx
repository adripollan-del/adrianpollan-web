"use client";
import ReactDOM from "react-dom";

export default function ResourceHints() {
  ReactDOM.preconnect("https://fonts.googleapis.com");
  ReactDOM.preconnect("https://fonts.gstatic.com", { crossOrigin: "anonymous" });
  ReactDOM.preconnect("https://www.googletagmanager.com");
  ReactDOM.prefetchDNS("https://images.unsplash.com");
  return null;
}
