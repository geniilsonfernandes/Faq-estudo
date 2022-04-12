import React from "react";
import Question from "./Question";
import styles from "./styles.module.css";

const questions = [1, 2, 3, 4, 5];

const FaqAccordion = () => {
  return (
    <div className={styles.wrapper}>
      {questions.map((i) => (
        <Question key={i} />
      ))}
    </div>
  );
};

export default FaqAccordion;
