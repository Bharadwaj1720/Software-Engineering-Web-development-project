import React from "react"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Home.css';
export default function Home() {
    return (
        <div className="body_Home">
            <div className="header_Home">
                <div className="left_sec_Home">
                    <img className="hamburger_Home" src="https://cdn3.iconfinder.com/data/icons/mobile-friendly-ui/100/menu-512.png" />
                    <img className="IIT_logo_Home" src="https://www.thehindubusinessline.com/news/education/rey8hd/article29086147.ece/ALTERNATES/LANDSCAPE_615/iit-tirupatiJPG" />
                </div>
                <div className="middle_sec_Home">
                    <marquee width="100%" direction="right" height="100px">
                        Welcome to IIT Tirupati ERP Portal
                    </marquee>
                </div>
                <div className="right_sec_Home">
                    <img className="myc_icon_Home" src="https://th.bing.com/th/id/R.c3631c652abe1185b1874da24af0b7c7?rik=XBP%2fc%2fsPy7r3HQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-circled-user-icon-2240.png&ehk=z4ciEVsNoCZtWiFvQQ0k4C3KTQ6wt%2biSysxPKZHGrCc%3d&risl=&pid=ImgRaw&r=0" />
                    <div style={{ marginLeft: 3 }}>Guest Account</div>
                </div>
            </div>
            <div className="sidebar_Home">
                <div className="sidebar_link_Home">
                    <img className="side_icon_Home" src="https://static.vecteezy.com/system/resources/previews/000/627/632/original/vector-home-icon-symbol-sign.jpg" />
                    <div>Home</div>
                </div>
                <div className="sidebar_link_Home">
                    <img className="side_icon_Home" src="https://th.bing.com/th/id/R.c3631c652abe1185b1874da24af0b7c7?rik=XBP%2fc%2fsPy7r3HQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-circled-user-icon-2240.png&ehk=z4ciEVsNoCZtWiFvQQ0k4C3KTQ6wt%2biSysxPKZHGrCc%3d&risl=&pid=ImgRaw&r=0" />
                    <div>Profile</div>
                </div>
                <div className="sidebar_link_Home">
                    <img className="side_icon_Home" src="https://th.bing.com/th/id/OIP.FhZwWr_ieJbTAXspxoMXaQHaHa?pid=ImgDet&rs=1" />
                    <div>Contact</div>
                </div>
                <div className="sidebar_link_Home">
                    <img className="side_icon_Home" src="https://cdn3.iconfinder.com/data/icons/communication/512/FAQs-512.png" />
                    <div>Faqs</div>
                </div>
                <div className="sidebar_link_Home">
                    <img className="side_icon_Home" src="https://static.vecteezy.com/system/resources/previews/000/440/213/original/question-mark-vector-icon.jpg" />
                    <div>help</div>
                </div>

            </div>

            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div className="image_Home">
                            <button className="Lib_button_Home"><img className="thumbnail_Home" src="https://th.bing.com/th/id/R.9608f874f77635a465c059e1963dc6f6?rik=MB1qUntGrit69w&riu=http%3a%2f%2fstatic.guim.co.uk%2fsys-images%2fGuardian%2fPix%2fpictures%2f2014%2f8%2f19%2f1408432390748%2f4557b0ab-d47d-4434-91c9-6b44b9d17c26-2060x1236.jpeg&ehk=nsS30PWl6y%2b6Mb9Dv3mzbs%2bkOHDmYXRvxyiSeki1VE0%3d&risl=&pid=ImgRaw&r=0" /></button>
                        </div>
                        <div className="Title_Home">
                            Health Center
                        </div>
                    </div>


                    <div className="col">
                        <div className="image_Home">
                            <button className="Heal_button_Home"><img className="thumbnail_Home" src="https://th.bing.com/th/id/OIP.M_06W5rM5ouDrERuPSf7GgHaFj?pid=ImgDet&rs=1" /></button>
                        </div>
                        <div className="Title_Home">
                            Library
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="image_Home">
                            <button className="GA_button_Home"><img className="thumbnail_Home" src="https://th.bing.com/th/id/OIP.retpVnECgqcYGWG3U5yu4gAAAA?pid=ImgDet&rs=1" /></button>
                        </div>
                        <div className="Title_Home">
                            General Administration
                        </div>
                    </div>


                    <div className="col">
                        <div className="image_Home">
                            <button className="Reas_button_Home"><img className="thumbnail_Home" src="https://fthmb.tqn.com/6VwLjysKzyDgsVIeEE1l9v6meHw=/5120x3492/filters:fill(auto,1)/scientist-looking-through-microscope-487041749-58d5504a5f9b584683dc6de6.jpg" /></button>
                        </div>
                        <div className="Title_Home">
                            Sponcered Reasearch and Consultancy
                        </div>
                    </div>
                </div>

            </div>


        </div>



    )

}