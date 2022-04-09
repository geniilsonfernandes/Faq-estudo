import React from "react";
import styles from "./styles.module.css";

export const FaqMenu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__items}>
        <li className={styles.menu__item} data-focus="true">
          General
        </li>
        <li className={styles.menu__item}>Trust and safety</li>
        <li className={styles.menu__item}>Services</li>
        <li className={styles.menu__item}>Billing</li>
        <li className={styles.menu__item}>Office and Cleaning</li>
      </ul>
    </nav>
  );
};
