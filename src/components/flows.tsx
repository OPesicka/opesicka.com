"use client";

import { useEffect } from "react";

import { init } from "@flows/js";

export const Flows = () => {
  useEffect(() => {
    void init({
      customApiUrl: "https://api.stage.flows-cloud.com",
      projectId: "0dc4b250-9a79-4a64-a50e-9fb90082e00d",
    });
  }, []);

  return null;
};
