import React, { useEffect, useState } from 'react'
import ChefBlock from './ChefBlock';
import axios from 'axios';

export default function Chefs() {

    const [chef, setChef] = useState([]);

    useEffect(() => {
        axios.get("http://localhost/reactjs/dingo/backend/chefs/getchefs.php")
            .then((res) => setChef(res.data))
    }, [])

    return (
        <>
            {/*::chefs_part start::*/}
            <section className="chefs_part blog_item_section section_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="section_tittle">
                                <p>Team Member</p>
                                <h2>Our Experience Chefs</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {chef.map((d, i) => {
                            return (
                                <ChefBlock d={d} key={i} />
                            )
                        })}
                    </div>
                </div>
            </section>
            {/*::chefs_part end::*/}
        </>
    )
}
