import { Billboard as BillboardType } from "@/type";
import '@/CSS/know.css';

interface BillboardknowProps{
    data: BillboardType
    className?: string;
};

const Billboardknow: React.FC<BillboardknowProps> = ({
    data,
    className,
}) => {
    return (
        <div >
            <div className="size-item"
            style={{backgroundImage: `url(${data?.imageUrl})`}}>               
            </div>
        </div>
    );
}

export default Billboardknow;