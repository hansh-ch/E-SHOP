import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { deleteProductAPI } from "@/services/productAPIServices";
import AdminEditProduct from "@/pages/admin/AdminEditProduct";

export default function AdminProductItem({
  product,
  onDelete,
  setIsModalOpen,
  setEditId,
  setEditProductDetails,
}) {
  const [isEditOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { _id, title, brand, description, price, inStock, imageUrl } = product;

  function handleEdit(id) {
    setIsModalOpen(true);
    setEditId(id);
    setEditProductDetails(product);
  }

  return (
    <>
      <div className="w-[250px] p-2 border">
        <div className="p-3 border-green-400 border-2 mb-4">
          <img src={imageUrl} alt="image" />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <p className="text-2xl">{title}</p>
          <p className="text-xl">{brand}</p>
          <div className="flex gap-4 items-center">
            <p>
              Price: <strong>{price}</strong>
            </p>
            <p>Stock :{inStock}</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Button onClick={() => handleEdit(_id)}>Edit</Button>
          <Button onClick={() => onDelete(_id)}>Delete</Button>
        </div>
      </div>
    </>
  );
}
