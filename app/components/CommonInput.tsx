import { Input } from "@chakra-ui/react";
import React from "react";

type Props = {
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CommonInput({
  value = "",
  placeholder = "",
  onChange = () => {},
}: Props) {
  return (
    <>
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border-2 border-slate-600 rounded-lg p-2 focus-visible:outline-none focus-visible:border-blue-500 text-slate-600 focus-visible:text-blue-500"
      />
    </>
  );
}
