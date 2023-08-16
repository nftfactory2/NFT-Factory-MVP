import React from "react";
import styles from "@/styles/Home.module.css";
import Sidebar from "../sidebar";
import Header from "../dashboard_header";

function Profile() {
  return (
    <div className={styles.dashboard}>
      {/* navbar */}
      <Header />
      {/* Sidebar */}
      <Sidebar />
      {/* body*/}
      <div className={styles.dark_rec}></div>
      <p className={styles.user_pic_cont}>
        <img src="/images/joker.svg" alt="" className={styles.user_pic} />
      </p>
      <div className={styles.username}>
        <div>
          <span>Username</span>
          <p>
            <img src="/images/discord.png" alt="" />
            <img src="/images/twitter.svg" alt="" />
          </p>
        </div>
        <h6>
          <img src="/images/edit.svg" alt="" />
          Edit Profile
        </h6>
      </div>
      <div className={styles.collections}>
        <h4>My Collections</h4>
        <div className={styles.row}>
          <div className={styles.card}>
            <img
              src="/images/Rectangle1.svg"
              alt=""
              className={styles.card_cont}
            />
            <h6>
              Cake Shop NFTs <img src="/images/badge-check.svg" alt="" />
            </h6>
            <span>Floor</span>
            <p>0.05 Eth</p>
          </div>
          <div className={styles.card}>
            <img
              src="/images/Rectangle2.svg"
              alt=""
              className={styles.card_cont}
            />
            <h6>
              Pie NFTs <img src="/images/badge-check.svg" alt="" />
            </h6>
            <span>Floor</span>
            <p>0.05 Eth</p>
          </div>
          <div className={styles.card}>
            <img
              src="/images/Rectangle3.svg"
              alt=""
              className={styles.card_cont}
            />
            <h6>
              Sweet Slice NFTs <img src="/images/badge-check.svg" alt="" />
            </h6>
            <span>Floor</span>
            <p>0.05 Eth</p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.card}>
            <img
              src="/images/Rectangle4.svg"
              alt=""
              className={styles.card_cont}
            />
            <h6>
              Burger Fac NFTs <img src="/images/badge-check.svg" alt="" />
            </h6>
            <span>Floor</span>
            <p>0.05 Eth</p>
          </div>
          <div className={styles.card}>
            <img
              src="/images/Rectangle5.svg"
              alt=""
              className={styles.card_cont}
            />
            <h6>
              Pasteries NFTs <img src="/images/badge-check.svg" alt="" />
            </h6>
            <span>Floor</span>
            <p>0.05 Eth</p>
          </div>
          <div className={styles.card}>
            <img
              src="/images/Rectangle6.svg"
              alt=""
              className={styles.card_cont}
            />
            <h6>
              Cake Fac NFTs <img src="/images/badge-check.svg" alt="" />
            </h6>
            <span>Floor</span>
            <p>0.05 Eth</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
