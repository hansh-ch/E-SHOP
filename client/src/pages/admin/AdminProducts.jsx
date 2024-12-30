import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";
import axios from "axios";
import { ADMIN_IMAGE_UPLOAD } from "@/utils/linkConstants";

export default function AdminProducts() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(1);
  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useState("");

  function handleAddProduct() {
    console.log("Product added");
  }
  async function handleImageUpload(e) {
    e.preventDefault();
    if (!file?.length) {
      return toast.error("Please select an image");
    }
    const formdata = new FormData();
    formdata.append("image", file[0]);
    // console.log(file[0]);

    const { data } = await axios.post(ADMIN_IMAGE_UPLOAD, formdata);
    console.log(data);
    if (data.status === "fail") {
      toast.error("Image upload failed");
    }
    console.log(data.data.url);
  }

  return (
    <section className="flex flex-col mx-auto">
      <div className="mb-5 flex justify-end w-full">
        <Button onClick={() => setIsOpen((p) => !p)}>
          {isOpen ? "Close" : "Add new Product"}
        </Button>
      </div>

      {isOpen && (
        <div className="grid gap-4 md:grid-cols-2 mx-auto">
          <ul className="list-none flex flex-col gap-y-4 bg-purple-200 p-4">
            <li className="flex flex-col space-y-3">
              <Label htmlFor="title">Product Title</Label>
              <Input
                type="text"
                id="title"
                placeholder="e.g., Earbuds"
                required
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li className="flex flex-col space-y-3">
              <Label htmlFor="description">Description</Label>
              <Textarea
                type="text"
                id="description"
                placeholder="e.g., A noise cancellation earbuds with sweat protection "
                required
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li className="flex flex-col space-y-3">
              <Label htmlFor="category">Category</Label>
              <Input
                type="text"
                id="category"
                placeholder="e.g., Electronics"
                required
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li className="flex flex-col space-y-3">
              <Label htmlFor="brand">Brand</Label>
              <Input
                type="text"
                id="brand"
                placeholder="e.g., Sony"
                required
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li className="flex flex-col space-y-3">
              <Label htmlFor="price">Price</Label>
              <Input
                type="number"
                id="price"
                placeholder="e.g., 0"
                required
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li className="flex flex-col space-y-3">
              <Label htmlFor="stock">Stock</Label>
              <Input
                type="number"
                id="stock"
                placeholder="e.g.,10"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </li>
          </ul>

          <div>
            <form onSubmit={handleImageUpload}>
              <Label htmlFor="image">Upload Image</Label>
              <div className="mt-3 flex">
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={(e) => setFile(e.target.files)}
                />
                <Button type="submit">Upload</Button>
              </div>
            </form>

            <div className="mt-4 md:mt-6">
              <Button className="w-full" onClick={handleAddProduct}>
                Add Product
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
