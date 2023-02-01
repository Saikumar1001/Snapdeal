import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Fetch.module.scss'

const Top = () => {

    let [productsData, setProductsData] = useState("");
    const [cart, setCart] = useState([])

    const fetchData = async () => {
        try {

            const data = await axios.get("https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789962/React%20Class/P.%20Akhila/toprates_cwkeuy.json")
            console.log(data);
            setProductsData(data.data)
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        fetchData()
    }, [])
    console.log(productsData)

    const updateCart = (product, action) => {
        let price = 0;
        let tempCart = cart;
        if (product.sale_price) {
            price = product.sale_price
        }
        else {
            price = product.price
        }

        if (action === "add") {
            console.log(tempCart)
            if (tempCart.length === 0) {
                product.qty = 1;
                tempCart.push(product);
                tempCart.total = price;
                setCart(tempCart)
                console.log(tempCart)
            }
            else {
                const temp = tempCart.filter(e => e.id === product.id);
                let total = tempCart.total;
                if (temp.length) {
                    const newCart = tempCart.map(e => {
                        if (e.id === product.id) {
                            e.qty += 1;
                            total += price;
                        }
                        return e;
                    })
                    tempCart.total = total;
                    tempCart = newCart;
                    setCart(tempCart);
                }
                else {
                    tempCart.push({ ...product, quantity: 1 });
                    tempCart.total += price;
                    setCart(tempCart);
                }
            }
        }
        if (action === 'remove') {
            if (!tempCart.length) return;
            let temp = tempCart.filter(e => e.id == product.id);
            console.log(temp);
            if (!temp.length) return;
            let total = tempCart.total;
            if (temp[0].qty === 1) {
                temp = tempCart.filter(e => e.id !== product.id);
                total -= price;
                tempCart = {
                    items: temp,
                    total
                }
                setCart(tempCart);
                console.log(tempCart);
            }
            else {
                const newCart = tempCart.map(e => {
                    if (e.id === product.id) {
                        e.qty -= 1;
                        total -= price;
                    }
                    return e;
                })
                tempCart = newCart
                tempCart.total = total;
                setCart(tempCart);
            }
        }
    }



    return (
        <div>
            <div> <h1 className={styles.Top}>Top Picks</h1></div>


            <div style={{ display: "flex", gap: "4rem", justifyContent: "space-evenly" }}>


                {productsData && productsData.map(e => (
                    <div >
                        <img style={{ width: "250px", height: "250px" }} src={e.pictures[0].url} />
                        <h2 style={{ textAlign: "center" }}>{e.name}</h2>
                        <h2 style={{ textAlign: "center" }}>{e.price}-Rs</h2>
                        <h2 style={{ textAlign: "center" }}>{e.reviews}-Review</h2>
                        <button onClick={() => updateCart(e, "add")} className={styles.btn}>+</button>
                        <button onClick={() => updateCart(e, "remove")} className={styles.btn}>-</button>
                    </div>


                ))}
            </div>
        </div>
    )




}



export default Top