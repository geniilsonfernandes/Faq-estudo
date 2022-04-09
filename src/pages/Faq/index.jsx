import React from "react";
import { Container } from "../../components/Container";
import { FaqMenu } from "./FaqMenu";
import styles from "./styles.module.css";

const Faq = () => {
  return (
    <Container wrapper="main">
      <h1 className={styles.title}> Frequently Asked Questions </h1>
      <FaqMenu />
    </Container>
  );
};

export default Faq;
