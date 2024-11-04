export const createData = async (data: {
  title?: string;
  description?: string;
}) => {
  let res = {};

  try {
    res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: data?.title,
        body: data?.description,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());

    console.log(res);
  } catch (error) {
    console.log(error);
  }
  return res;
};

export const fetchData = async () => {
  type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

  // Initialize res with an empty array or allow it to be undefined
  let res: Post[] = [];

  try {
    res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
      (response) => response.json()
    );
  } catch (error) {
    console.log(error);
  }

  return res; // Now res is guaranteed to have a value
};

export const updateData = async (data: {
  title?: string;
  description?: string;
  id?: number;
}) => {
  let res = {};

  try {
    res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${data?.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          title: data?.title,
          body: data?.description,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    ).then((response) => response.json());
  } catch (error) {
    console.log(error);
  }
  return res;
};

export const deleteData = async (id: number) => {
  let res = {};

  try {
    res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then((response) => response.json());
  } catch (error) {
    console.log(error);
  }
  return res;
};
