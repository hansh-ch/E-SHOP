import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { deleteProductAPI } from "@/services/productAPIServices";

export default function AdminProductItem({ product }) {
  const { _id, title, brand, price, imageUrl } = product;

  async function handleDelete(id) {
    const data = await deleteProductAPI(id);
    if (data.status === "fail") {
      return toast.error("Delete failed");
    }
    toast.success("Product delete successfully");
  }
  return (
    <div className="flex flex-col flex-wrap md:flex md:flex-row gap-3 items-center justify-between">
      <div className="p-3 border-purple-400 border-4">
        <img src={imageUrl} alt="product image" width={100} height={100} />
      </div>

      <p className="font-semibold md:text-xl ">{title}</p>
      <p className="font-semibold md:text-xl ">{brand}</p>
      <p className="font-semibold md:text-xl ">{price}</p>

      <div className="flex items-center gap-4">
        <Button className="uppercase">edit</Button>
        <Button className="uppercase" onClick={() => handleDelete(_id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}
