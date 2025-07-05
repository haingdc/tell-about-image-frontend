/// <reference lib="dom" />
"use client";

import { useState } from "react";
import { createComponent, type EventName } from "@lit/react";
import React from "react";
import CountDownGangWc from "pedals-gears-wc/count-down-gang";

const CountDownGangWrapper = createComponent({
  tagName: "count-down-gang",
  react: React,
  elementClass: CountDownGangWc,
  events: {
    "onDecrement": "Decrease" as EventName<CustomEvent>,
  },
});

export default function CountDownGang() {
  const [count, setCount] = useState(7);

  return (
    <CountDownGangWrapper
      name="Charlie Brown"
      count={count}
      onDecrement={(e: CustomEvent) => {
        console.log("inspect.onDecrement", e.detail);
        setCount((count) => count - 1);
      }}
    />
  );
}
