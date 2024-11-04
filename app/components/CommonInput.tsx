import { Input, Textarea } from "@chakra-ui/react";
import React from "react";

type Props = {
  value?: string;
  placeholder?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isTextArea?: boolean;
};

export default function CommonInput({
  value = "",
  placeholder = "",
  onChange = () => {},
  isTextArea = false,
}: Props) {
  return (
    <>
      {isTextArea ? (
        <Textarea
          rows={4}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="border-2 border-slate-600 rounded-lg p-2 focus-visible:outline-none focus-visible:border-blue-500 text-slate-600 focus-visible:text-blue-500"
        />
      ) : (
        <Input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="border-2 border-slate-600 rounded-lg p-2 focus-visible:outline-none focus-visible:border-blue-500 text-slate-600 focus-visible:text-blue-500"
        />
      )}
    </>
  );
}
