import { Card, Heading } from "@chakra-ui/react";
import React from "react";

type Props = {
  title?: string;
  description?: string;
  id?: number;
};

export default function PostCard({
  title = "",
  description = "",
  id = 1,
}: Props) {
  return (
    <Card.Root
      key={id}
      size="md"
      className="border-2 border-slate-600 rounded-lg p-2 hover:border-blue-500 hover:text-blue-700 hover:shadow-2xl transition-all  duration-300 hover:scale-[1.02]"
    >
      <Card.Header>
        <Heading size="md" className="font-bold">
          {id}. {title}
        </Heading>
      </Card.Header>
      <Card.Body color="fg.muted" className="hover:text-blue-700">
        {description}
      </Card.Body>
    </Card.Root>
  );
}
