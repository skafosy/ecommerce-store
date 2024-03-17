import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Know from "@/components/know";
import '@/CSS/Product-card.css';


export const revalidate = 0 ;

const HomePage = async() =>{
    const products = await getProducts({ isFeatured: true});
    const products_1 = await getProducts({categoryId: '87ac6f7e-b808-4f86-9967-49fc6d0bdb3b' });
    const products_2 = await getProducts({ });
    const products_3 = await getProducts({ });
    
    const billboard = await getBillboard("0841738d-3c17-499c-8451-0a8ab04ae5c0");
    
    console.log(products_1);
    return (
        <Container>    
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
                <div className="product-bg flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Flash Sale" items={products}/>
                </div>
            </div>            
            <div className="space-y-10 pb-10">
                <div className="product-bg1 flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="สินค้าแนะนำ" items={products_1}/>
                </div>
            </div>   
            <div className="space-y-10 pb-10">
                <div className=" flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 h-621 w-621">
                <Know title="เกร็ดความรู้"/>
                </div>
            </div>
            <div className="space-y-10 pb-10">
                <div className="product-bg flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="อุปกรณ์เสริม" items={products_2}/>
                </div>
            </div> 
            <div className="space-y-10 pb-10">
                <div className="product-bg flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="หมดเป๋าแนะนำ" items={products_3}/>
                </div>
            </div>
        </Container>
    );
}

export default HomePage;