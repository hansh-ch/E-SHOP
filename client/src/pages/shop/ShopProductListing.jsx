import { useEffect, useState } from "react";
import ProductFilterTab from "./ProductFIlterTab";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpDownIcon } from "lucide-react";
import { getAllProductAPI } from "@/services/productAPIServices";
import ShopProductItem from "./ShopProductItem";
import { useSearchParams } from "react-router-dom";

const getItemsFromLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem("filters"));
  return data;
};

export default function ShopProductListing() {
  const [allProducts, setAllProducts] = useState([]);
  const [sort, setSort] = useState("");
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [allFilters, setAllFilters] = useState(getItemsFromLocalStorage);
  const [searchParams, setSearchParams] = useSearchParams();
  //==>  FETCHING ALL PRODUCTS FROM API

  const fetchProducts = async () => {
    const res = await getAllProductAPI();

    if (res.status === "success") {
      setAllProducts(res?.data);
    }
  };
  useEffect(function () {
    fetchProducts();
  }, []);

  useEffect(
    function () {
      if (categories.length > 0 || brands.length > 0) {
        localStorage.setItem("filters", JSON.stringify({ categories, brands }));
      }
    },
    [categories, brands]
  );
  function handleSort(val) {
    // console.log(val);
    setSort(val);
  }
  function handleFilter(getFilterKeyword, getCurrentValue) {
    if (getFilterKeyword === "category") {
      if (!categories.includes(getCurrentValue)) {
        setCategories(() => [...categories, getCurrentValue]);
      } else {
        if (categories.includes(getCurrentValue)) {
          const filArr = categories.filter((item) => item != getCurrentValue);
          setCategories(filArr);
          searchParams.set(getFilterKeyword, getCurrentValue);
        }
      }
    } else if (getFilterKeyword === "brands") {
      if (!brands.includes(getCurrentValue)) {
        setBrands(() => [...brands, getCurrentValue]);
      } else {
        if (brands.includes(getCurrentValue)) {
          const filArr = brands.filter((item) => item != getCurrentValue);
          setBrands(() => filArr);
        }
      }
    }
  }

  // console.log(categories, brands);
  // console.log(searchParams);
  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 p-4 md:p-6 ">
      <div className="hidden md:block min-h-screen">
        <ProductFilterTab handleFilter={handleFilter} filters={allFilters} />
      </div>
      <div className="bg-background w-full rounded-sm shadow-sm">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="font-extrabold">All Products</h2>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">
              {allProducts?.length} products
            </span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-4"
              >
                <ArrowUpDownIcon />
                {sort ? sort : "Sort by"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="" align="end">
              <DropdownMenuRadioGroup value={sort} onValueChange={handleSort}>
                <DropdownMenuRadioItem value="name(A-Z)">
                  <p className="text-base ">Name (A-Z)</p>
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="name(Z-A)">
                  <p className="text-base ">Name (Z-A)</p>
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="price(low-high)">
                  <p className="text-base ">Price (low-high)</p>
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="price(high-low)">
                  <p className="text-base ">Price (high-low)</p>
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {allProducts?.map((item) => (
              <li key={item._id}>
                <ShopProductItem product={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
