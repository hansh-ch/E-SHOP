import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const filterOptions = {
  category: [
    { id: "men", label: "Men" },
    { id: "women", label: "Women" },
    { id: "kids", label: "Kids" },
    { id: "footwears", label: "Footwears" },
    { id: "accessories", label: "Accessories" },
  ],
  brands: [
    { id: "nike", label: "Nike" },
    { id: "puma", label: "Puma" },
    { id: "adidas", label: "Adidas" },
    { id: "levis", label: "Levis" },
    { id: "zara", label: "Zara" },
    { id: "h&m", label: "H&M" },
  ],
};

function ProductFilterTab({ handleFilter, filters }) {
  return (
    <div className="bg-background rounded-lg shadow-md">
      <div className="p-4 border-b-2">
        <h2 className="font-semibold">Filters</h2>
      </div>

      <div className="p-4 space-y-4">
        <p className="font-semibold">Category: </p>

        {filterOptions.category.map((item) => (
          <li key={item.id} className="list-none flex gap-4 items-center ">
            <Checkbox
              onCheckedChange={() => handleFilter("category", item.id)}
              checked={filters?.categories.includes(item.id)}
            />
            <p className="font-semibold text-sm md:text-base">{item.label}</p>
          </li>
        ))}
      </div>
      <div className="w-[80%] mx-auto">
        <Separator />
      </div>
      <div className="p-4 space-y-4">
        <p className="font-semibold">Brands: </p>
        {filterOptions.brands.map((item) => (
          <li key={item.id} className="list-none flex gap-4 items-center ">
            <Checkbox
              onCheckedChange={() => handleFilter("brands", item.id)}
              checked={filters?.brands.includes(item.id)}
            />
            <p className="font-semibold">{item.label}</p>
          </li>
        ))}
      </div>
    </div>
  );
}
export default ProductFilterTab;
