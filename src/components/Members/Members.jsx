import React from 'react'
import styles from './Members.module.css'

function Members() {
  return (
    <div className={styles.members_con}>
        <h3 className={styles.members_title}>Members</h3>
        <div className={styles.members_list}>
            <div className={styles.members_items}>
                <img src="../../../public/man.jpg" alt="" />
                <p className={styles.members_bio}>
                    Director
                </p>
            </div>
            <div className={styles.members_items}>
                <img src="../../../public/man.jpg" alt="" />
                <p className={styles.members_bio}>
                    Department manager
                </p>
            </div>
            <div className={styles.members_items}>
                <img src="../../../public/man.jpg" alt="" />
                <p className={styles.members_bio}>
                    Officer-1
                </p>
            </div>
            <div className={styles.members_items}>
                <img src="../../../public/man.jpg" alt="" />
                <p className={styles.members_bio}>
                    Officer-2
                </p>
            </div>
            <div className={styles.members_items}>
                <img src="../../../public/man.jpg" alt="" />
                <p className={styles.members_bio}>
                    Officer-3
                </p>
            </div>
            <div className={styles.members_items}>
                <img src="../../../public/man.jpg" alt="" />
                <p className={styles.members_bio}>
                    Officer-4
                </p>
            </div>
            <div className={styles.members_items}>
                <img src="../../../public/man.jpg" alt="" />
                <p className={styles.members_bio}>
                    Officer-5
                </p>
            </div>
            <div className={styles.members_items}>
                <img src="../../../public/man.jpg" alt="" />
                <p className={styles.members_bio}>
                    Officer-6
                </p>
            </div>
        </div>
    </div>
  )
}

export default Members