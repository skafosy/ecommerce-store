import '@/CSS/footer.css';
import Image from "next/image";
import  logo  from '@/public/logo.png';

const Footer = () =>{
    return (
        <footer className="bg-white border-t">
            <div className="bg-custom2">
                <div className="box-text1">
                    <div className="box-text-box1">
                        <div className="img-size-logo">
                            <Image 
                            src={logo}
                            alt="Description" 
                            layout="responsive"
                            />
                        </div>
                        <p className="text-custom1">บริษัท เอสดี มาร์เก็ตติ้ง แอนด์ ดีเวลลอปเมนท์ จำกัด
                        201 ถนนเนินพยอม อำเภอเมือง จังหวัดระยอง ตำบลมาบตาพุด
                        ไปรษณีย์ 21150</p>
                    </div>
                    <div className="box-text-box2">
                        <p className="text-custom2">โปรโมชั่น</p>
                        <p className="text-custom-mini1">เกมส์ราคาพิเศษ</p>
                        <p className="text-custom-mini2">เกมคอนโซลลด 50%</p>
                        <p className="text-custom-mini3">ของแต่งจอย</p>
                        <p className="text-custom-mini4">อุปกรณ์ทำความสะอาดเกม</p>
                    </div>
                    <div className="box-text-box3">
                        <p className="text-custom3">ร่วมงานกับเรา</p>
                        <p className="text-custom-mini1">ตำแหน่งที่เปิดรับ</p>
                        <p className="text-custom-mini2">พาร์ทเนอร์</p>
                        <p className="text-custom-mini3">ขอทุนสนับสนุนนักแข่ง E-Sport</p>
                    </div>
                    <div className="box-text-box4">
                        <p className="text-custom3">เกี่ยวกับหมดเป๋า</p>
                        <p className="text-custom-mini1">ประวัติบริษัท</p>
                        <p className="text-custom-mini2">ติดต่อเรา</p>
                        <p className="text-custom-mini4">ศูนย์ช่วยเหลือ</p>
                    </div>
                    
                </div>
            </div>
            <div className="bg-custom relative mx-auto py-10 flex items-center gap-80 justify-center">
                <p className="text-center text-xs text-white">
                    &copy; Copyright 2023 หมดเป๋า.com. All Rights Reserved.
                </p>
                <p className="text-center text-xs text-white">Terms & Conditions | Privacy Policy</p>
            </div>
        </footer>
    );
}

export default Footer;