import React from "react";
import styles from "@/styles/Home.module.css";
import Header from "../Header";
import Footer from "../Footer";

function Mint() {
  return (
    <div className={styles.mint}>
      {/* Navbar */}
      <Header />

      {/* body */}
      <div className={styles.mint_details}>
        <div className={styles.left}>
          <img
            src="/images/NFT4.svg"
            alt=""
            style={{ width: "568px", height: "400px" }}
          />
          <div>
            <p>
              FANRT Fac NFTS <img src="/images/badge-check.svg" alt="" />
            </p>
            <span>0.05 eth</span>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.package}>
            <h5>Burger Fac NFTs</h5>
            <p>Package ###</p>
          </div>
          <div className={styles.price}>
            <div>
              <span>Price(1)</span>
              <p>0.05 eth</p>
            </div>
            <div>
              <span>You Pay</span>
              <p>0.05 eth</p>
            </div>
          </div>
          <div className={styles.mint_btn}>
            <button className={styles.home_btn}>Mint</button>
            <p>
              By clicking “Mint” you agree to the Nft Factory. Terms of Service.
              Each transaction will incur non-refundable gas fees.
            </p>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Mint;
