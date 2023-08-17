import React from "react";
import styles from "@/styles/Home.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <p className={styles.the_one}>
        <img src="/images/icon.svg" alt="" />
        Profile
      </p>
      <p>
        <img src="/images/collection.svg" alt="" />
        My Collections
      </p>
      <p>
        <img src="/images/bell.svg" alt="" />
        Notifications
      </p>
      <p>
        <img src="/images/bell.svg" alt="" />
        Settings
      </p>
      <p>
        <img src="/images/question_mark.svg" alt="" />
        Help Center
      </p>
      <p>
        <img src="/images/world.svg" alt="" />
        Language
      </p>
    </div>
  );
}

export default Sidebar;
