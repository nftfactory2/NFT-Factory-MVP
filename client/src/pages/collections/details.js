import React from "react";
import Header from "../Header";
import styles from "@/styles/Home.module.css";
import Footer from "../Footer";
import { useRouter } from "next/router";

function Details() {
  const Router = useRouter();

  const Mint = () => {
    Router.push("/collections/mint");
  };

  return (
    <div className={styles.details}>
      {/* Navbar */}
      <Header />

      {/* body */}
      <div className={styles.about}>
        <div className={styles.about_top}>
          <div className={styles.image_div}>
            <img
              src="/images/NFT4.svg"
              alt=""
              style={{ width: "568px", height: "400px" }}
            />
            <p>
              FANRT Fac NFTS <img src="/images/badge-check.svg" alt="" />
            </p>
          </div>
          <div className={styles.nft_details}>
            <h4>About Collection</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium est quia illo nisi, cumque laborum vero quae maxime
              ratione nulla veniam, perferendis recusandae. Temporibus, minus
              sunt nobis asperiores qui iure.
            </p>
            <ul>
              <li>Benefit of Feature</li>
              <li>Benefit of Feature</li>
              <li>Benefit of Feature</li>
            </ul>
          </div>
        </div>
        <div className={styles.about_bottom}>
          <p>Product/Package type</p>
          <span className={styles.line}></span>
          <div>
            <p>
              Unique Owners
              <span>120 Owners</span>
            </p>
            <p>
              Mint price <span>0.05 eth</span>
            </p>
            <button className={styles.home_btn} onClick={Mint}>
              Mint
            </button>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Details;
