"use client";
import Image from "next/image";
import '@/CSS/Product-card.css';
import {Expand,ShoppingCart} from "lucide-react"
import { Product } from "@/type";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";

interface ProductCard{
    data:Product;
}

const ProductCard: React.FC<ProductCard> = ({
    data
}) => {
    const router = useRouter();

    const handleClick =() =>{
        router.push(`/product/${data?.id}`);
    }

    return (
        <div onClick={handleClick} className="product-crad group border  ">
           {/* Images and Action*/}
           <div className="img-product-card rounded-xl bg-gray-100 relative">
                <Image 
                    src={data?.images?.[0]?.url}
                    fill
                    alt="Image"
                    className="img-product-card-img "
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton 
                            onClick={() => {}}
                            icon={<Expand size={20} className="text-gray-600"/>}
                        />
                        <a href="https://shope.ee/30QROeq4QA" target="_blank">
                            <IconButton 
                                onClick={() => {}}
                                icon={<ShoppingCart size={20} className="text-gray-600"/>}
                            />
                        </a>
                    </div>
                </div>
           </div>
           {/* Images and Action*/}
           <div>
                <p className="font-semibold text-lg space-y-4">
                    {data.name}
                </p>
                <p className="text-sm text-gray-500 space-y-4">
                    {data.category?.name}
                </p>  
           </div>
           {/* Images and Action*/}
           <del className="price-dis1 flex item-center justify-center">
                <Currency value={data?.price}/>
           </del>
           <div className="price-dis2  flex item-center justify-center">
                <Currency value={data?.dis}/>
           </div>
        </div>
    );
}

export default ProductCard;
