import { Billboard as BillboardType } from "@/type";
import '@/CSS/know.css';

interface Billboardknow2Props{
    data: BillboardType
    className?: string;
};

const Billboardknow2: React.FC<Billboardknow2Props> = ({
    data,
    className,
}) => {
    return (
        <div >
            <div className="size-item2"
            style={{backgroundImage: `url(${data?.imageUrl})`}}>               
            </div>
        </div>
    );
}

export default Billboardknow2;