import { Billboard as BillboardType } from "@/type";

interface BillboardProps{
    data: BillboardType
    className?: string;
};

const Billboard: React.FC<BillboardProps> = ({
    data,
    className,
}) => {
    return (
        <div >
            <div className="rounded-xl relative aspect-square md:aspect-[3/1] overflow-hidden bg-cover "
            style={{backgroundImage: `url(${data?.imageUrl})`}}>
                <div className="h-full w-full flex-col justify-center item-center text-center gap-y-8">
                    <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                        {/* {data.label} */}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Billboard;