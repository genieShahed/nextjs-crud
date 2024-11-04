"use client";

import { Card, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { updateData } from "./ApiCalls";
import CommonButton from "./CommonButton";
import CommonInput from "./CommonInput";

type Props = {
  title?: string;
  description?: string;
  id?: number;
  onEditSuccess?: () => void;
  onDeleteBtnClick?: () => void;
};

export default function PostCard({
  title = "",
  description = "",
  id = 1,
  onEditSuccess = () => {},
  onDeleteBtnClick = () => {},
}: Props) {
  const [isEditingMode, setIsEditingMode] = useState<boolean>(false);

  const handleUpdate = async () => {
    // handleClick({ vertical: "top", horizontal: "center" });
    console.log("update called! form data:::", { title, description, id });
    const updateRes = await updateData({ title, description, id });

    console.log("updateRes:::", updateRes);
    if (!!updateRes) {
      onEditSuccess();
      setIsEditingMode(!isEditingMode);
    }
  };

  return (
    <Card.Root
      key={id}
      size="md"
      className={`relative border-2 ${
        isEditingMode ? "border-blue-600" : "border-slate-600"
      } rounded-lg p-2 hover:border-blue-500 hover:text-blue-700 hover:shadow-2xl transition-all  duration-300 hover:scale-[1.02]`}
    >
      {isEditingMode && (
        <div className="text-2xl font-bold hover:text-blue-600 text-blue-600">
          Edit Data
        </div>
      )}
      {!isEditingMode && (
        <div
          onClick={() => setIsEditingMode(!isEditingMode)}
          className="absolute right-2 cursor-pointer p-[2px] border-2 border-blue-500 text-blue-500 font-bold rounded-md hover:bg-blue-500 hover:text-white"
        >
          <FiEdit />
        </div>
      )}

      <div
        onClick={() => onDeleteBtnClick()}
        className="absolute right-10 cursor-pointer p-[2px] border-2 border-red-500 font-bold rounded-md hover:bg-red-500 hover:text-white text-red-500"
      >
        <RiDeleteBin6Line />
      </div>

      <Card.Header>
        {isEditingMode ? (
          <CommonInput value={title} placeholder="Title" />
        ) : (
          <Heading size="md" className="font-bold">
            {id}. {title}
          </Heading>
        )}
      </Card.Header>
      <Card.Body
        color="fg.muted"
        className={isEditingMode ? "" : "hover:text-blue-700"}
      >
        {isEditingMode ? (
          <>
            <CommonInput
              isTextArea
              value={description}
              placeholder="Description"
            />

            <div className="pt-2 flex items-center justify-end space-x-5">
              <CommonButton
                label="Cancel"
                onClick={() => setIsEditingMode(false)}
              />
              <CommonButton label="Save" onClick={handleUpdate} />
            </div>
          </>
        ) : (
          description
        )}
      </Card.Body>
    </Card.Root>
  );
}
