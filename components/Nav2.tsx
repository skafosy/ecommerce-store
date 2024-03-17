// import Image from "next/image";
// import Brandner from "../public/Brandner.png"
// import React from 'react';
import Image from "next/image";
import '@/CSS/footer.css';
import '@/CSS/search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from "@/public/logo.png"
import User from "@/public/User.png"
import shoping from "@/public/shoping.png"

// import SearchButton from '@/components/search';


const Nav = () => {
    return (
        <footer className=" Blackground_red">
            <div className="logo_m">
                <Image className="logo"
                    src={logo}
                    alt="Description" 
                    layout="responsive"
                />
            </div>
            <form className="example" action="action_page.php">
                <input type="text" placeholder="Search.." name="search"/>
                <button type="submit"><FontAwesomeIcon className="icon_Search" icon={faSearch} /></button>
            </form>
            <div className="shop_login">
                {/* <div className="Shoping">
                    <Image className="shoping"
                            src={shoping}
                            alt="Description" 
                            layout="responsive"
                        />
                </div> */}
                <div className="User_m">
                    
                    <div className="login">
                        <Image className="User"
                            src={User}
                            alt="Description" 
                            layout="responsive"
                        />
                    </div>
                    <div className="Block_login">
                        <div className="cupong">รับคูปอง</div>
                        <div className="login_flex">
                            <button className="login_1">เข้าสู่ระบบ</button>
                            <div className="space">/</div>
                            <button className="register">สมัครสมาชิก</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Nav;
