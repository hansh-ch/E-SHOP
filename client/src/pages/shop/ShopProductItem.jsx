import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

function ShopProductItem({ product }) {
  const {
    _id,
    title,
    brand,
    category,
    description,
    price,
    inStock,
    imageUrl,
    categoryFor,
  } = product;

  return (
    <Card className="w-full max-w-[350px] md:max-w-sm mx-auto">
      <div className="relative">
        <img
          src={imageUrl}
          alt="product image"
          className="w-full h-[300px]  object-cover rounded-t-lg"
        />
      </div>
      <CardContent className="p-4 font-semibold mb-2">
        <h2 className="text-xl font-bold mb-2 truncate ...">{title}</h2>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400">{category}</span>
          <span className="text-gray-600">{brand.toUpperCase()}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-gray-800">{categoryFor?.toUpperCase()}</h2>
        </div>
        <div className="flex justify-between items-center">
          <h2>
            Price: <strong>$ {price}</strong>
          </h2>
          {inStock > 0 && <span>In-Stock</span>}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
export default ShopProductItem;
