import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { FaBars } from "react-icons/fa6";

function Navbar() {
    const [isToggled, setToggle] = useState(false)

    function handleToggle(){
        setToggle(!isToggled)
    }

  return (
    <nav>
        <div className={styles.container}>
            <div className={styles.nav_con}>
                <div className={styles.logo}>
                    <a href="#">TRD</a>
                </div>
            
                <ul>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Members</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <div className={styles.button}>
                    <a href="#">Call me</a>
                </div>
            </div>

            {/*  Mobile view */}
            <FaBars className={styles.bars} onClick={handleToggle} />
            {isToggled ? (
                <>
                    <ul className={styles.mobile_menu}>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Members</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div className={styles.mobile_button}>
                        <a href="#">Call me</a>
                    </div>
                </>
            ) : null}
        </div>
    </nav>
  )
}

export default Navbar