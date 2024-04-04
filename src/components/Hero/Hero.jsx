import React from 'react'
import styles from './Hero.module.css'
import { FaGitlab } from "react-icons/fa";
import { SiWikidotjs } from "react-icons/si";
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
        <div className={styles.container}>
            <div className={styles.hero_con}>
                <div className={styles.hero_info}>
                    <p className={styles.text_1}>
                        <span style = {{ marginRight: '10px' }}>Hi, </span>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                `We're TRD.`,
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                `-> Training Research & Development`,
                                1000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </p>
                    <h3 className={styles.text_2}>T = Training</h3>
                    <h3 className={styles.text_3}>R = Research</h3>
                    <h3 className={styles.text_4}>D = Development</h3>
                    <p className={styles.text_5}>
                        จัดอบรม/สัมมนา ด้านเทคโนโลยีและนวัตกรรม
                    </p>
                    <p className={styles.text_6}>
                        มุ่งมั่นสร้าง Knowledge ที่เอื้อต่อการเรียนรู้ การวิจัย และ การพัฒนา <br />
                        ผ่านการจัดฝึกอบรม และ การจัดกิจกรรมต่างๆ
                    </p>
                    <ul className={styles.hero_social}>
                        <li><a href="https://trd-dtc.one/"><SiWikidotjs /></a></li>
                        <li><a href="https://gitlab.trd-dtc.one/"><FaGitlab /> </a></li>
                    </ul>
                </div>

                <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                    <div className={styles.hero_img}></div> 
                </Tilt>
            </div>
        </div>   
    </div>
  )
}

export default Hero
