import React from "react";
import styles from "@/styles/Home.module.css";

function Header() {
  return (
    <div>
      <div className={styles.d_nav}>
        <div className={styles.d_navbar}>
          <div className={styles.d_nav_left}>
            <img src="/images/Vector.svg" alt="" />
            <p style={{ width: "130px" }}>Market Place</p>
            <p>Launchpad</p>
            <p>Collections</p>
          </div>
          <div className={styles.d_nav_right}>
            <button
              className={styles.home_btn}
              style={{ height: "40px", width: "160px" }}
            >
              Connect Wallet
            </button>
            <img src="/images/icon.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
