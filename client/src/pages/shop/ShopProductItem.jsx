import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

function ShopProductItem({ product }) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <div className="relative">
        <img
          src=""
          alt="product image"
          className="w-full h-[300px]  object-cover rounded-t-lg"
        />
      </div>
      <CardContent className="p-4 font-semibold mb-2">
        <h2>Title</h2>
        <div className="flex justify-between items-center mb-2">
          <span>category</span>
          <span>brand</span>
        </div>
        <h2>
          Price: <strong>$price</strong>
        </h2>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
export default ShopProductItem;
