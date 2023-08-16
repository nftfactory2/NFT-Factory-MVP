import React from "react";
import styles from "@/styles/Home.module.css";

function Footer() {
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.left_footer}>
          <img src="/images/Vector.svg" alt="" />
          <h2>NFT FACTORY</h2>
        </div>
        <div className={styles.right_footer}>
          <h4>Socials</h4>
          <div className={styles.social}>
            <p>
              <img src="/images/discord.png" alt="" />
              Discord
            </p>
            <p>
              <img src="/images/opensea.svg" alt="" />
              Open Sea
            </p>
            <p>
              <img src="/images/twitter.svg" alt="" />
              Twitter
            </p>
          </div>
          <span>nftfactory@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
