import React, { useEffect, useState } from "react";
import Container from "../../components/layout";
import FaqAccordion from "./FaqAccordion";
import FaqMenu from "./FaqMenu";
import styles from "./styles.module.css";

import data from "./data.json";

const Faq = () => {
  const [idGroupActive, setIdGroupActive] = useState(0);
  const [GroupActive, setGroupActive] = useState([]);
  function ActiveIdGroupIs(id) {
    setIdGroupActive(id);
  }

  useEffect(() => {
    setGroupActive(data[idGroupActive].quenstios);
  }, [idGroupActive]);

  return (
    <Container wrapper="main">
      <div className={styles.s__faq}>
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        <FaqMenu
          data={data}
          ActiveIdGroupIs={ActiveIdGroupIs}
          idActive={idGroupActive}
        />
        <FaqAccordion data={GroupActive} />
      </div>
    </Container>
  );
};

export default Faq;
