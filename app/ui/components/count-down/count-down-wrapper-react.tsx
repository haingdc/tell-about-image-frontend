/// <reference lib="dom" />
"use client";

import { useState } from "react";
import { createComponent, type EventName } from "@lit/react";
import React from "react";
import { CountDown as CountDownWc } from "pedals-gears-wc";

const CountDownWrapper = createComponent({
  tagName: "count-down",
  react: React,
  elementClass: CountDownWc,
  events: {
    "onDecrement": "Decrease" as EventName<CustomEvent>,
  },
});

export default function CountDown() {
  const [count, setCount] = useState(7);

  return (
    <CountDownWrapper
      name="Brown"
      count={count}
      onDecrement={(e: CustomEvent) => {
        console.log("inspect.onDecrement", e.detail);
        setCount((count) => count - 1);
      }}
    />
  );
}
