export const getUsers = async () => {
  const res = await fetch("http://localhost:3000/api/users");

  if (!res.ok) return;
  const data = await res.json();
  return data;
};
