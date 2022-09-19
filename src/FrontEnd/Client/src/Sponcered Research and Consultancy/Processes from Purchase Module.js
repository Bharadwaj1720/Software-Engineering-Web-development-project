import React from "react";
import '../Home.css';
import Layout from "../Layout";
export default function Processes_Purchase() {
    return (
        <div>
            <Layout message="Processes from Purchase Module" />
            <div className="Book_Search">
                <input class="search_book" type="textbox" placeholder="Search" />
                <button class="search_button_book">
                    <img class="search_icon_book" src="https://th.bing.com/th/id/OIP.NPPzQguxZVlOvXqD3HaZBQHaHc?pid=ImgDet&rs=1" />
                </button>
            </div>
        </div>
    )
}