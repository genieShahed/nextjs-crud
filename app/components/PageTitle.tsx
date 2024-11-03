import React from "react";

type Props = {
  title?: string;
};

export default function PageTitle({ title }: Props) {
  return <div className="font-bold text-3xl my-2 text-slate-600">{title}</div>;
}
