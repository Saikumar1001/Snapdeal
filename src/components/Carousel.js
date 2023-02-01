import React from 'react'
import styles from "../styles/Carousel.module.scss"


function Carousel() {
    let scrol = 0;
    let images = document.querySelectorAll(".img")
    const handlePrev = () => {
        
        if (scrol >= 0) {
            
            scrol = 100;
            images.forEach((e) => {
                console.log(1234);
                e.style.transform += `translateX(${ "-"+scrol + "%"})`;
            })
        }
    }
    const handleNext = () => {
        if (scrol >= 0) {
            scrol = 100;
            images.forEach((e) => {
                e.style.transform += `translateX(${scrol + "%"})`;
            })
        }
    }
    return (
        <div className={styles.con}>
            <button className={styles.left} id="left" onClick={handlePrev}>{"<"}</button>
            <div className={styles.con1}>
                <img className="img" src="https://tse4.mm.bing.net/th?id=OIP.kL49o27wmLoXxmSWZxPH7wHaEo&pid=Api&P=0"/>
                <img className="img" src="https://tse2.mm.bing.net/th?id=OIP.QDY3yc7HlIghNx2ZFSMk8gHaEK&pid=Api&P=0"/>
                <img className="img" src="https://tse4.mm.bing.net/th?id=OIP.U0SfqHcCr4A3TEW4cIDGOQHaEI&pid=Api&P=0"/>
                <img className="img" src="https://tse4.mm.bing.net/th?id=OIP.-ZMkOW2jeIAcvwoH6hrg5QHaEo&pid=Api&P=0"/>
                <img className="img" src="https://tse4.mm.bing.net/th?id=OIP.cKTq4enAGO_Wg_Omp0ysngHaEK&pid=Api&P=0"/>
            </div>
            <button className={styles.right} onClick={handleNext}>{">"}</button>
        </div>
    )
}

export default Carousel