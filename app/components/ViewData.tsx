"use client";

import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Modal,
  ModalDialog,
  Snackbar,
} from "@mui/joy";
import { useEffect, useState } from "react";
import { IoWarningOutline } from "react-icons/io5";
import { deleteData, fetchData } from "./ApiCalls";
import PageTitle from "./PageTitle";
import PostCard from "./PostCard";

type Props = {
  pageTitle?: string;
};

export default function ViewData({}: Props) {
  type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

  // Then use this type in your useState hook
  const [allPostData, setAllPostData] = useState<Post[] | null>(null);
  const [showToaster, setShowToaster] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<number>(-1);

  const fetchAllPosts = async () => {
    const data = await fetchData();
    console.log({ data });
    setAllPostData(data);
  };

  const handleDelete = async () => {
    const deleteRes = await deleteData(deleteId);
    console.log({ deleteRes });
    if (!!deleteRes) {
      setShowToaster(true);
      fetchAllPosts();
      setOpen(false);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);
  console.log(allPostData);

  return (
    <div className="w-full">
      <PageTitle title="View Data" />

      <div className="mt-5 grid grid-cols-3 gap-5 max-h-[calc(100vh-240px)] overflow-y-auto bg-slate-200 p-5 rounded-lg">
        {allPostData?.map((post) => (
          <PostCard
            key={post?.id}
            title={post?.title}
            description={post?.body}
            id={post?.id}
            onDeleteBtnClick={() => {
              setDeleteId(post?.id);
              setOpen(true);
            }}
            onEditSuccess={() => {
              fetchAllPosts();
              setShowToaster(true);
            }}
          />
        ))}
        <Snackbar
          autoHideDuration={4000}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={showToaster}
          variant={"outlined"}
          color={"success"}
          onClose={(event, reason) => {
            if (reason === "clickaway") {
              return;
            }
            setShowToaster(false);
          }}
        >
          SUCCESS !!!
        </Snackbar>

        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog
            // size="lg"
            variant="outlined"
            role="alertdialog"
          >
            <DialogTitle>
              <div className="text-2xl font-bold text-orange-500">
                <IoWarningOutline />
              </div>
              Confirmation
            </DialogTitle>
            <Divider />
            <DialogContent>
              Are you sure you want to delete this data?
            </DialogContent>
            <DialogActions>
              <Button
                variant="solid"
                color="danger"
                onClick={() => handleDelete()}
              >
                Delete
              </Button>
              <Button
                variant="plain"
                color="neutral"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </DialogActions>
          </ModalDialog>
        </Modal>
      </div>
    </div>
  );
}
