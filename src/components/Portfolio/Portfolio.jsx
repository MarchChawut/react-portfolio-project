import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';

function Portfolio() {
  return (
    <div className={styles.port_con}>
        <h3 className={styles.port_title}>Portfolio</h3>
        <div className={styles.port_list}>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="../../../public/port_img.jpg" alt="awareness" />
                </Tilt>
                <p>Project Title</p>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="../../../public/port_img.jpg" alt="awareness" />
                </Tilt>
                <p>Project Title</p>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="../../../public/port_img.jpg" alt="awareness" />
                </Tilt>
                <p>Project Title</p>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="../../../public/port_img.jpg" alt="awareness" />
                </Tilt>
                <p>Project Title</p>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="../../../public/port_img.jpg" alt="awareness" />
                </Tilt>
                <p>Project Title</p>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="../../../public/port_img.jpg" alt="awareness" />
                </Tilt>
                <p>Project Title</p>
            </div>
        </div>
    </div>
  )
}

export default Portfolio