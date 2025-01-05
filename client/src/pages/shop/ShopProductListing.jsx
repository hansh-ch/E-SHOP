import React, { useEffect, useState } from "react";
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

export default function ShopProductListing() {
  const [allProducts, setAllProducts] = useState();

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 p-4 md:p-6">
      <div className="hidden md:block">
        <ProductFilterTab />
      </div>
      <div className="bg-background w-full rounded-sm shadow-sm">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="font-extrabold">All Products</h2>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">10 products</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-4"
              >
                <ArrowUpDownIcon />
                Sort by
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="" align="end">
              <DropdownMenuRadioGroup>
                <DropdownMenuRadioItem>
                  <p className="text-base ">Name (A-Z)</p>
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem>
                  <p className="text-base ">Name (Z-A)</p>
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem>
                  <p className="text-base ">Price (low-high)</p>
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem>
                  <p className="text-base ">Price (high-low)</p>
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              {/* <DropdownMenuItem>
                <p className="text-base ">Name (A-Z)</p>
              </DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
