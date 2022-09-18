import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Nav from "./Nav";
import './Home.css';
import { Link } from "react-router-dom";
import Dropdown_button from "./Dropdown";

export default function Layout(props) {
    return (
        <div>
            <div className="header_Home">
                <div className="left_sec_Home">
                    <Nav />
                    <img className="IIT_logo_Home" src="https://www.thehindubusinessline.com/news/education/rey8hd/article29086147.ece/ALTERNATES/LANDSCAPE_615/iit-tirupatiJPG" />
                </div>
                <div className="middle_sec_Home">
                    <marquee width="100%" direction="right" height="100px">
                        {props.message}
                    </marquee>
                </div>
                <div className="right_sec_Home">

                    <div style={{ marginLeft: 3 }}><Dropdown_button /></div>
                </div>
            </div>
            <div className="sidebar_Home">
                <Link to="Home" style={{
                    textDecoration: 'none',
                    color: "black"
                }}>
                    <div className="sidebar_link_Home">
                        <img className="side_icon_Home" src="https://static.vecteezy.com/system/resources/previews/000/627/632/original/vector-home-icon-symbol-sign.jpg" />
                        <div>Home</div>
                    </div>
                </Link>
                <Link to="Profile" style={{
                    textDecoration: 'none',
                    color: "black"
                }}>
                    <div className="sidebar_link_Home">
                        <img className="side_icon_Home" src="https://th.bing.com/th/id/R.c3631c652abe1185b1874da24af0b7c7?rik=XBP%2fc%2fsPy7r3HQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-circled-user-icon-2240.png&ehk=z4ciEVsNoCZtWiFvQQ0k4C3KTQ6wt%2biSysxPKZHGrCc%3d&risl=&pid=ImgRaw&r=0" />
                        <div>Profile</div>
                    </div>
                </Link>
                <Link to="Contact" style={{
                    textDecoration: 'none',
                    color: "black"
                }}>
                    <div className="sidebar_link_Home">
                        <img className="side_icon_Home" src="https://th.bing.com/th/id/OIP.FhZwWr_ieJbTAXspxoMXaQHaHa?pid=ImgDet&rs=1" />
                        <div>Contact</div>
                    </div>
                </Link>
                <Link to="Faq" style={{
                    textDecoration: 'none',
                    color: "black"
                }}>
                    <div className="sidebar_link_Home">
                        <img className="side_icon_Home" src="https://cdn3.iconfinder.com/data/icons/communication/512/FAQs-512.png" />
                        <div>Faqs</div>
                    </div>
                </Link>
                <Link to="help" style={{
                    textDecoration: 'none',
                    color: "black"
                }}>
                    <div className="sidebar_link_Home">
                        <img className="side_icon_Home" src="https://static.vecteezy.com/system/resources/previews/000/440/213/original/question-mark-vector-icon.jpg" />
                        <div>help</div>
                    </div>
                </Link>

            </div >
        </div >
    )
}