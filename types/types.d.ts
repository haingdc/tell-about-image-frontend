import * as React from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "lit-button": {
        variant?: string;
        size?: string;
        disabled?: boolean;
        type?: "button" | "submit" | "reset" | "menu";
        icon?: string;
        children?: React.ReactNode;
        className?: string;
      };
      "lit-counter": {
        count: number;
        funcInReactComponent: () => void;
      };
    }
  }
}
