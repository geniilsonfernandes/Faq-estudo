import React from "react";
import Container from "../layout/index";
import styles from "./styles.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.s__address}>
        <div className={styles.author}>
          Design/Front End by Gee -
          <a href="https://github.com/geniilsonfernandes"> Github</a> |
          desenvolvido com ReactJs
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
