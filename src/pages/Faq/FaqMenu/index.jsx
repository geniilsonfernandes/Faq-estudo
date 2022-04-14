import React from "react";
import styles from "./styles.module.css";
const FaqMenu = ({ data, active = 0, ActiveIdGroupIs }) => {
  function handleClick(id) {
    ActiveIdGroupIs(id);
  }
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__items}>
        {data.map(({ subject, id }) => (
          <li
            className={styles.menu__item}
            data-focus={id === active}
            key={id}
            onClick={() => handleClick(id)}
          >
            {subject}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FaqMenu;
