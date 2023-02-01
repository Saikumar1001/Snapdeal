import React from 'react'
import styles from "../styles/Footer.module.scss"
function Footer() {
    return (
        <div>
            <div className={styles.Footer}>
                <div className={styles.FooterCon}>
                    <img className={styles.img} src='https://tse3.mm.bing.net/th?id=OIP.eUwCcSPYhu82T5P-j6R4kwHaE4&pid=Api&P=0'></img>
                    <h1 className={styles.shop}>100% SECURE PAYMENTS</h1>
                    <p className={styles.para}>Moving your card details to a much more secured place
                    </p>
                </div>
                <div className={styles.FooterCon}>
                    <img className={styles.img} src="https://tse1.mm.bing.net/th?id=OIP.ShLWO3Z2x-bSPRKCRQD70AHaDt&pid=Api&P=0"></img>
                    <h1 className={styles.shop}>TRUSTPAY</h1>
                    <p className={styles.para}>100% Payment Protection. Easy Return Popcy</p>
                </div>
                <div className={styles.FooterCon}>
                    <img className={styles.img} src="https://tse1.mm.bing.net/th?id=OIP.OgO9mZbY-qI4ANtc4aI7cgHaCp&pid=Api&P=0"></img>
                    <h1 className={styles.shop}>HELPCENTER</h1>
                    <p className={styles.para}>Got a question? Look no further. Browse our FAQs or submit your query here.
                    </p>
                </div>
                <div className={styles.FooterCon}>
                    <img className={styles.img} src="https://tse3.mm.bing.net/th?id=OIP.mDerPxv0IIlvPCMnbUZ-kAHaDA&pid=Api&P=0"></img>
                    <h1 className={styles.shop}>SHOP ON THE GO</h1>
                    <p className={styles.para}>Download the app and get exciting app only offers at your fingertips
                    </p>
                </div>
            </div>
            <div className={styles.FooterCon2}>
                <ul>
                    <h1>POLICY INFO</h1>
                    <p>
                        Privacy Policy
                    </p>
                    <p>Terms of Sale</p>
                    <p>Terms of Use</p>
                    <p>Report Abuse & Takedown Popcy</p>
                    <p>FAQ</p>
                </ul>
                <ul>
                    <h1>COMPANY</h1>
                    <p>Impact@Snapdeal</p>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>Sitemap</p>
                    <p>Contact Us</p>
                </ul>
                <ul>
                    <h1>SNAPDEAL BUSINESS</h1>
                    <p>
                        Shopping App
                    </p>
                    <p>Sell on Snapdeal</p>
                    <p>Media Enquiries</p>

                </ul>
                <ul>
                    <h1>POPULAR LINKS</h1>
                    <p>lehenga</p>
                    <p>Clothing</p>
                    <p>Sarees</p>
                    <p>Winter Wear</p>

                </ul>
                <ul>
                    <h1>SUBSCRIBE</h1>
                    <p>Register now to get updates on promotions andcoupons. Or Download App</p>
                </ul>
            </div>

        </div>
    )
}

export default Footer