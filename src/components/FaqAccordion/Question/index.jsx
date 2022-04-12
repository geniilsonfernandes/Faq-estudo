import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
const Question = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [wrapperHeight, setWrapperHeight] = useState(0);
  const [wrapperClosed, setWrapperClosed] = useState(0);
  const title = useRef(null);
  const answer = useRef(null);

  // 48 pading
  useEffect(() => {
    const titleHeight = title.current.clientHeight;
    setWrapperClosed(titleHeight + 48);
  }, []);
  
  useEffect(() => {
    const answerHeight = answer.current.clientHeight;
    const titleHeight = title.current.clientHeight;
    setWrapperHeight(answerHeight + titleHeight + 48);
  }, [showAnswer]);

  return (
    <div
      className={styles.wrapper}
      onClick={() => setShowAnswer((c) => !c)}
      style={{ maxHeight: `${showAnswer ? wrapperHeight : wrapperClosed}px` }}
      data-wrapper-show={showAnswer}
    >
      <h2 className={styles.question__title} ref={title}>
        How long is this site live?
      </h2>
      <p data-answer-show={showAnswer} ref={answer}>
        You can pay with a credit car or via net banking (if you are in Poland).
        We will renew your subscription automatically at the end of every
      </p>
    </div>
  );
};

export default Question;
