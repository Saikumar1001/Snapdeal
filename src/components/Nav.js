import React from 'react';
import styles from "../styles/Nav.module.scss"
import { CopyOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className={styles.Nav}>
            <img className={styles.img1} src="https://download.logo.wine/logo/Snapdeal/Snapdeal-Logo.wine.png"></img>
            <Input.Group className={styles.inp} compact>
                <Input
                    style={{
                        width: 'calc(100% - 200px)',
                    }}
                    defaultValue="Search products & brands"
                />
                <Button type="primary">Submit</Button>
            </Input.Group>
            <p >
                <span className={styles.cart}>Cart</span>
                <ShoppingCartOutlined className={styles.shop} />
            </p>
            <p> <Link to="/register">Register</Link></p>
            <p> <Link to="/login">login</Link></p >
            <p></p>
            <p>
                <span className={styles.cart}>Sign-in</span>
                <UserOutlined className={styles.shop} />
            </p>
        </div>
    )
}

export default Nav