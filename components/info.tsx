import { Product } from "@/type";
import Currency from "@/components/ui/currency";
import  Button  from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
    data: Product;
}

const Info: React.FC<InfoProps> = ({
    data
}) =>{
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 ">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl text-gray-900">
                    <del >
                        <Currency value={data.price}/>
                    </del>
                    <div className="text-red-600 font-bold text-3xl">
                        <Currency value={data.dis}/>
                    </div>
                </p>
            </div>
            <hr className="my-4"/>
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Size:</h3>
                    <div>
                    {data?.size?.name}
                    </div>
                </div>
                
            </div>
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Color:</h3>
                    <div className="h-6 w-6 rounded-full border border-gray-600" style={{backgroundColor: data?.color?.value}}/>
                </div>
            </div>    
                <div className="mt-10 flex items-center gap-x-3">
                    <a href="https://shope.ee/30QROeq4QA" target="_blank">
                        <Button className="flex items-center gap-x-2">
                            Add To Cart
                            <ShoppingCart/>
                        </Button>
                    </a>  
                </div>
            

            
        </div>
    );
}

export default Info;