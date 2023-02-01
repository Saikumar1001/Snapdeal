import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";
import styles from "../styles/Fetch2.module.scss";

export default function Section() {


    const [productsData, setProductsData] = useState([]);
    const [cart, setCart] = useState([]);
    const fetchData = async () => {
        try {
            const data = await axios.get("https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=50&language=en&search=type.slug:clothing%3Bstatus:publish")
            // console.log(data);
            setProductsData(data.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    // console.log(productsData)


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
        <div className={styles.bestsellerContainer}>
            {productsData && productsData.map(e => (
                <div className={styles.bestseller}>
                    <img src={e.image.thumbnail} className={styles.bestsellerimg} />
                    <p>{e.name}</p>
                    <p>${e.min_price}</p>
                    <button onClick={() => updateCart(e, "add")} className={styles.btn}>+</button>
                    <button onClick={() => updateCart(e, "remove")} className={styles.btn}>-</button>
                </div>
            ))}
        </div>
    )
}