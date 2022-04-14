import React, { useState } from "react";
import styles from "./styles.module.css";
const Question = ({ answer, ask }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  function handleClick(e) {
    setShowAnswer((c) => !c);
  }
  return (
    <div
      className={styles.wrapper}
      onClick={(e) => handleClick(e)}
      data-wrapper-show={showAnswer}
    >
      <h2 className={styles.question__title}>{ask}</h2>
      {showAnswer && <p>{answer}</p>}
    </div>
  );
};

export default Question;
