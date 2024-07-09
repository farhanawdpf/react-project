import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Items from './Items';

export default function Exclusive() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get("http://localhost/reactjs/dingo/backend/getItems.php")
            .then((res) => setItems(res.data))
    }, [])
    return (
        <>
            <section className="exclusive_item_part blog_item_section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="section_tittle">
                                <p>Popular Dishes</p>
                                <h2>Our Exclusive Items</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {items.map((d, i) => {
                            return (
                                <Items d={d} key={i}/>
                            )
                        })}

                    </div>
                </div>
            </section>
        </>
    )
}
