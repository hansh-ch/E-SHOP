import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";
import axios from "axios";
import { ADMIN_IMAGE_UPLOAD } from "@/utils/linkConstants";
import {
  createProductAPI,
  deleteProductAPI,
  editProductAPI,
  getAllProductAPI,
} from "@/services/productAPIServices";
import AdminProductItem from "@/UI/AdminProductItem";
import AdminEditProduct from "./AdminEditProduct";

export default function AdminProducts() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editProductDetails, setEditProductDetails] = useState(null);

  useEffect(function () {
    (async () => {
      const data = await getAllProductAPI();
      if (data.status === "fail") {
        return;
      }
      setAllProducts(data?.data);
    })();
  }, []);
  console.log(allProducts);

  //==> EVENT-> CREATING PRODUCT <==//
  async function handleAddProduct() {
    if (!title || !description || !category || !brand || !price || !stock) {
      return toast.error("Fields cannot be empty");
    }
    const formdata = {
      title,
      description,
      category,
      brand,
      price,
      inStock: stock,
      imageUrl: imgUrl,
    };
    const response = await createProductAPI(formdata);
    if (response.status === "fail") return toast.error("Failed");
    if (response.status === "success") {
      toast.success("Product created successfully");
      setAllProducts([...allProducts, response?.data]);
      setTitle("");
      setDescription("");
      setBrand("");
      setCategory("");
      setPrice(0);
      setStock(0);
      setImgUrl("");
      setFile(null);
      setIsOpen(false);
    }
  }
  //==> EVENT-> IMAGE UPLOAD <==//
  async function handleImageUpload(e) {
    e.preventDefault();
    if (!file?.length) {
      return toast.error("Please select an image");
    }
    const formdata = new FormData();
    formdata.append("image", file[0]);
    // console.log(file[0]);

    const { data } = await axios
      .post(ADMIN_IMAGE_UPLOAD, formdata)
      .catch((err) => toast.error("Failed image upload"));
    console.log(data);
    if (data.status === "fail") {
      toast.error("Image upload failed");
    }
    console.log(data.data.url);
    setImgUrl(data?.data.url);
    toast.success("Image uploaded succesfully");
  }

  //==> EVENT-> DELETE PRODUCT <==//
  async function handleDelete(id) {
    const response = await deleteProductAPI(id);
    if (response.status === "fail") {
      return toast.error("Delete failed");
    }
    toast.success("Product delete successfully");
    const data = await getAllProductAPI(); //refetching data after deletion
    if (data.status === "fail") {
      return;
    }
    setAllProducts(data?.data);
  }

  async function handleEditSubmit(formdata) {
    const response = await editProductAPI(editId, formdata);
    if (response.status === "success") {
      setIsModalOpen(false);
      const data = await getAllProductAPI();
      if (data.status === "fail") {
        return;
      }
      setAllProducts(data?.data);
    }
  }
  return (
    <section className="flex flex-col mx-auto w-full  overflow-x-scroll relative ">
      <div className="mb-5 flex justify-end w-full">
        <Button onClick={() => setIsOpen((p) => !p)}>
          {isOpen ? "Close" : "Add new Product"}
        </Button>
      </div>

      {/* CREATE PRODUCT */}
      {isOpen && (
        <div className="grid gap-4 md:grid-cols-2 mx-auto">
          <ul className="list-none flex flex-col gap-y-4 bg-purple-200 p-4">
            <li className="flex flex-col space-y-3">
              <Label htmlFor="title">Product Title</Label>
              <Input
                type="text"
                id="title"
                placeholder="e.g.,Earbuds"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </li>
            <li className="flex flex-col space-y-3">
              <Label htmlFor="description">Description</Label>
              <Textarea
                type="text"
                id="description"
                placeholder="e.g., A noise cancellation earbuds with sweat protection "
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </li>
            <li className="flex flex-col space-y-3">
              <Label htmlFor="category">Category</Label>
              <Input
                type="text"
                id="category"
                placeholder="e.g., Electronics"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </li>
            <li className="flex flex-col space-y-3">
              <Label htmlFor="brand">Brand</Label>
              <Input
                type="text"
                id="brand"
                placeholder="e.g., Sony"
                required
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </li>
            <li className="flex flex-col space-y-3">
              <Label htmlFor="price">Price</Label>
              <Input
                type="number"
                id="price"
                placeholder="e.g., 0"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </li>
            <li className="flex flex-col space-y-3">
              <Label htmlFor="stock">Stock</Label>
              <Input
                type="number"
                id="stock"
                placeholder="e.g.,10"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
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
      <ul
        className={
          isModalOpen ? "flex gap-5 flex-wrap blur-md" : "flex gap-5 flex-wrap"
        }
      >
        {allProducts?.map((item) => (
          <li key={item?._id} className="mx-auto">
            <AdminProductItem
              product={item}
              onDelete={handleDelete}
              setIsModalOpen={setIsModalOpen}
              setEditId={setEditId}
              setEditProductDetails={setEditProductDetails}
            />
          </li>
        ))}
      </ul>
      {/* Modal */}
      {/* {isModalOpen && (
        <div className=" w-full min-h-screen absolute z-20">
          <div className="flex justify-center items-center">
            <div className="w-[500px] ">
              <ul className="list-none flex flex-col gap-y-4 bg-purple-200 p-4">
                <li className="flex flex-col space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl text-center">Editing Product</h2>
                    <button onClick={() => setIsModalOpen(false)}>
                      <X />
                    </button>
                  </div>
                  <Label htmlFor="title">Product Title</Label>
                  <Input
                    type="text"
                    id="title"
                    placeholder="e.g.,Earbuds"
                    required
                    value={title || editDetails?.title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </li>
                <li className="flex flex-col space-y-3">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    type="text"
                    id="description"
                    placeholder="e.g., A noise cancellation earbuds with sweat protection "
                    required
                    value={description || editDetails.description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </li>
                <li className="flex flex-col space-y-3">
                  <Label htmlFor="category">Category</Label>
                  <Input
                    type="text"
                    id="category"
                    placeholder="e.g., Electronics"
                    required
                    value={category || editDetails.category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </li>
                <li className="flex flex-col space-y-3">
                  <Label htmlFor="brand">Brand</Label>
                  <Input
                    type="text"
                    id="brand"
                    placeholder="e.g., Sony"
                    required
                    value={brand || editDetails?.brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </li>
                <li className="flex flex-col space-y-3">
                  <Label htmlFor="price">Price</Label>
                  <Input
                    type="number"
                    id="price"
                    placeholder="e.g., 0"
                    required
                    value={price || editDetails?.price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </li>
                <li className="flex flex-col space-y-3">
                  <Label htmlFor="stock">Stock</Label>
                  <Input
                    type="number"
                    id="stock"
                    placeholder="e.g.,10"
                    value={stock || editDetails?.inStock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </li>
              </ul>

              <div>
                <div className="mt-4 md:mt-6">
                  <Button className="w-full" onClick={handleSaveEditProduct}>
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
      {isModalOpen && (
        <AdminEditProduct
          setIsModalOpen={setIsModalOpen}
          product={editProductDetails}
          onEditSubmit={handleEditSubmit}
        />
      )}
    </section>
  );
}
