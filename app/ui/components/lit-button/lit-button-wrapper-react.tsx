/// <reference lib="dom" />
"use client";

import React from "react";
import { createComponent, type EventName } from "@lit/react";
import LitButtonWc from "pedals-gears-wc/button";

const LitButton = createComponent({
  tagName: "lit-button",
  react: React,
  elementClass: LitButtonWc,
  events: {
    "onClick": "click" as EventName<Event>,
  },
});

export default LitButton;
