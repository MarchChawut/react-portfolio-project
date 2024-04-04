import React from 'react'
import styles from './Contact.module.css'
import { FaMobileScreenButton, FaLine } from "react-icons/fa6";

function Contact() {
  return (
    <div className={styles.contact_wrapper}>
        <div className={styles.contact_con}>
            <div className={styles.contact_info}>
                <h3>Get in Touch</h3>
                <p className={styles.contact_desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, consequatur impedit deleniti qui excepturi enim.
                </p>
                <p className={styles.contact_address}>
                    123 Uthai road <br/>
                    Bangkok, Thailand
                </p>
                <p><FaMobileScreenButton />(+66) 98 765 4321</p>
                <p><FaLine />@payayamcode</p>
            </div>
            <div className={styles.contact_form}>
                <form action="">
                    <div className={styles.input_group}>
                        <div>
                            <label htmlFor="first name">First Name</label>
                            <input type="text" placeholder='eg. สุขใจ' />
                        </div>
                        <div>
                            <label htmlFor="last name">Last Name</label>
                            <input type="text" placeholder='eg. สุขใจ' />
                        </div>
                    </div>
                    <label htmlFor="email address">Email Address</label>
                    <input type="email" placeholder='eg. payayamcode.@gmail.com' />
                    <label htmlFor="message">Your Message</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Type Here'></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact