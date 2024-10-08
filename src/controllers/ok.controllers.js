import path from "path";

export const json = async (req, res) => {
  const user = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
  };

  return res.json(user); // Trả về JSON mẫu cho user
};

export const anh = async (req, res) => {
  const imgPath = path.resolve("public/anh.png");
  console.log(imgPath);
  return res.sendFile(imgPath); // Trả về file ảnh
};
