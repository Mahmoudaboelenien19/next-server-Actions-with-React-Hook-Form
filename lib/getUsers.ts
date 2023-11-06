export const getUsers = async () => {
  const res = await fetch("http://localhost:3001/api/users", {
    next: { tags: ["users"] },
  });

  if (!res.ok) return;
  const data = await res.json();
  return data;
};
