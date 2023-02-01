import React, { useState, useEffect } from "react";
import axios from "axios";

function Fetch1() {
    let [data, setdata] = useState("");

    const Fetchdata = async () => {
        try {
            const data = await axios.get("https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789718/React%20Class/A.%20Jagadeesh/featured_tv0bcq.json")
            console.log(data)
            setdata(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        Fetchdata()
    }, [])


    return (
        <div >
        <h1 style={{ textAlign: "center", width: "100%" }}>More Products</h1>

        <div style={{ display: "grid", gap: "3rem", gridTemplateColumns: "auto auto auto auto" }}>
            {data && data.map(e => (
                <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <img style={{ width: "250px", height: "250px" }} src={e.pictures[2].url}></img>
                    <h2 >{e.name}</h2>
                    <h2>{e.price}-Rs</h2>
                    <h2>{e.reviews}-Review</h2>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Fetch1