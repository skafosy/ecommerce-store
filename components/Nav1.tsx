import Image from "next/image";
import Brandner from "@/public/Brandner.png"


const Nav1 = () =>{
    return (
        <footer className="bg-white border-t">
            <Image 
                src={Brandner}
                alt="Description" 
                width={900} // ปรับค่าตามที่คุณต้องการ
                height={300} // ปรับค่าตามที่คุณต้องการ
                layout="responsive"
            />
        </footer>
    );
}

export default Nav1;