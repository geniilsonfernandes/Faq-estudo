import React, { useState } from "react";
import Container from "../../components/layout";
import FaqAccordion from "../../components/FaqAccordion";
import FaqMenu from "../../components/FaqMenu";
import styles from "./styles.module.css";

const Faq = () => {
  return (
    <Container wrapper="main">
      <h1 className={styles.title}>Frequently Asked Questions</h1>
      <FaqMenu />
      <FaqAccordion />
    </Container>
  );
};

export default Faq;
