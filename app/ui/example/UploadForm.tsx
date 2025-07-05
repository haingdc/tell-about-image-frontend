"use client";

import CountDown from "@/app/ui/components/count-down/count-down-wrapper-react.tsx";
import DialogMaster from "@/app/ui/components/dialog-master/dialog-master-wrapper-react.tsx";
import CountDownGang from "@/app/ui/components/count-down-gang/count-down-gang-wrapper-react.tsx";
import LitButton from "@/app/ui/components/lit-button/lit-button-wrapper-react.tsx";

export default function Example() {
  const handleClick = () => {
    alert("click");
  };
  return (
    <div>
      <CountDown />
      <CountDownGang />
      <DialogMaster />
      <LitButton onClick={handleClick}>Hi Lit Button is here</LitButton>
    </div>
  );
}
