"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClarityScript() {
  useEffect(() => {
    Clarity.init("wthj8c4zuf");
  }, []);

  return null;
}
