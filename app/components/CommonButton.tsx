"use client";

import React from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  label?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
};

export default function CommonButton({
  label = "",
  onClick = () => {},
  type = "button",
}: Props) {
  return (
    <Button
      type={type}
      onClick={onClick}
      variant={"outline"}
      className="border-2 border-slate-600 rounded-lg p-2 hover:bg-blue-500 hover:border-blue-500 hover:text-white font-bold"
    >
      {label}
    </Button>
  );
}
