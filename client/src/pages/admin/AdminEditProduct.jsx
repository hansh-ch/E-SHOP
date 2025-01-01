import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";

export default function AdminEditProduct({
  product,
  setIsModalOpen,
  onEditSubmit,
}) {
  const [title, setTitle] = useState(product?.title);
  const [description, setDescription] = useState(product?.description);
  const [brand, setBrand] = useState(product?.brand);
  const [category, setCategory] = useState(product?.category);
  const [price, setPrice] = useState(product?.price);
  const [stock, setStock] = useState(product?.inStock);

  function handleEditSubmit() {
    const formdata = {
      title,
      description,
      category,
      brand,
      price,
      inStock: stock,
    };
    onEditSubmit(formdata);
  }

  return (
    <div>
      <div className=" w-full min-h-screen absolute z-20 top-0.5">
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
              <div className="mt-4 md:mt-6">
                <Button className="w-full" onClick={handleEditSubmit}>
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
