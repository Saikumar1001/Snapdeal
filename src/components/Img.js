import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Img() {
    let [Imgdata, setImgdata] = useState("")

    const FetchData = async () => {
        try {
            const data = await axios.get("https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668790039/React%20Class/Saikiran%20Naidu/electronicDeal_kexbzw.json")
            console.log(data)
            setImgdata(data.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        FetchData()
    }, [])
    return (
        <div >
            <h1 style={{ textAlign: "center", width: "100%" }}>Trending Products</h1>

            <div style={{ display: "flex" }}>
                {Imgdata && Imgdata.map(e => (
                    <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <img style={{ width: "250px", height: "250px" }} src={e.pictures[0].url}></img>
                        <h2 >{e.name}</h2>
                        <h2>{e.price}-Rs</h2>
                        <h2>{e.reviews}-Review</h2>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Img