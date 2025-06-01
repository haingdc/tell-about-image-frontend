/// <reference lib="dom" />
"use client";

import React from "react";
import { createComponent, type EventName } from "@lit/react";
import { LitButton as LitButtonWc } from "pedals-gears-wc";

const LitButton = createComponent({
  tagName: "lit-button",
  react: React,
  elementClass: LitButtonWc,
  events: {
    "onClick": "click" as EventName<Event>,
  },
});

export default LitButton;
