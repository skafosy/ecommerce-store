import '@/CSS/know.css';
import Billboardknow from "@/components/billboard_know";
import Billboardknow2 from "@/components/billboard_know_2";

import getBillboard from "@/actions/get-billboard";


interface KnowProps{
    title: string;
    
};
const billboard1 = await getBillboard("caf037e8-71b0-40cf-9e7d-a8f3afa7040d");
const billboard2 = await getBillboard("fc6c910d-ca22-431c-8eeb-44edbd105564");
const billboard3 = await getBillboard("46cd7ee8-7a4b-40f0-99d5-de5e7e618398");
const Know: React.FC<KnowProps> = ({
    title,

    
})=>{
    return (
        <div className="container_know">
            <h3 className="font-bold text-3xl">{title}</h3>
            <div className="BL">
                <div className="img1">
                    <Billboardknow data={billboard1} className="custom-billboard"/>
                </div>
                <div className="img2-3">
                    <Billboardknow2 data={billboard2} />
                    
                    <Billboardknow2 data={billboard3}/>
                </div>
                
                
            </div>
        </div>

    );
}

export default Know;