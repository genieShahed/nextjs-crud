"use client";

import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import { Input } from "@chakra-ui/react";
import CommonInput from "../components/CommonInput";
import CommonButton from "../components/CommonButton";

type Props = {
  label?: string;
};

type formData = {
  title?: string;
  description?: string;
};

export default function CreatePage({}: Props) {
  const [formData, setFormData] = useState<formData>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form data:::", formData);
  };

  return (
    <div>
      <PageTitle title="Create Page" />

      <form
        onSubmit={handleSubmit}
        className="space-y-3 max-w-[450px] mx-auto mt-5"
      >
        <CommonInput
          placeholder="Title"
          value={formData?.title}
          onChange={(e) =>
            setFormData({ ...formData, title: e?.target?.value })
          }
        />
        <CommonInput
          placeholder="Description"
          value={formData?.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e?.target?.value })
          }
        />

        <CommonButton label="Submit" type="submit" />
      </form>
    </div>
  );
}
