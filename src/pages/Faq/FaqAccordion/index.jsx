import React from "react";
import Question from "./Question";
import styles from "./styles.module.css";

const FaqAccordion = ({ data }) => {
  
  return (
    <div className={styles.wrapper}>
      {data.map(({ ask, answer, id }) => (
        <Question key={id} answer={answer} ask={ask} />
      ))}
    </div>
  );
};

export default FaqAccordion;
