const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

// GET
export const getPosts = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};

// CREATE
export const createPost = async (data: { title: string; body: string }) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json();
};
//delete entry
export const deletePost = async (id: number) => {
  try {
    //remove entry
    await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
  } catch {}
};
//update entry
export const updatePost = async (id: number, updatedData: any) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData),
    });
    return await res.json();
  } catch {}
};
