import React from "react";
import '../Home.css';
import Layout from "../Layout";
import test from "../Backend/Test";
export default function Book_Acquisition() {
    return (
        <div>
            <Layout message="Book Acquisition Module" />
            <div className="Book_Search">
                <input class="search_book" type="textbox" placeholder="Search for a book" />
                <button class="search_button_book">
                    <img class="search_icon_book" src="https://th.bing.com/th/id/OIP.NPPzQguxZVlOvXqD3HaZBQHaHc?pid=ImgDet&rs=1" />
                </button>
            </div>
        </div>
    )
}