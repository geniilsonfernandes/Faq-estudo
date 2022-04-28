import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { ArrowIcon } from "../../../icons/Icon";
import useMedia from "../../../hooks/useMedia";

const FaqMenu = ({ data, idActive = 0, ActiveIdGroupIs }) => {
  const{ match} = useMedia("(max-width: 768px)");
  const [groupNameActive, setGroupNameActive] = useState(
    data[idActive].subject || ""
  );
  const [showModal, setShowModal] = useState(false);

  function handleClick(id) {
    ActiveIdGroupIs(id);
    setGroupNameActive(data[id].subject);
  }

  useEffect(() => {
    setShowModal(false);
  }, [groupNameActive]);

  return (
    <nav className={styles.menu}>
      {match ? (
        <div className={styles.drop__menu} data-testid="mobile">
          <span
            className={styles.menu__active}
            onClick={() => setShowModal((c) => !c)}
          >
            {groupNameActive}
            <span className={styles.drop__icon} data-modal-active={showModal}>
              <ArrowIcon />
            </span>
          </span>
          {showModal && (
            <ul className={styles.drop__modal}>
              {data.map(({ subject, id }) => (
                <li
                  className={styles.modal__item}
                  data-focus={id === idActive}
                  key={id}
                  onClick={() => handleClick(id)}
                >
                  {subject}
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <ul className={styles.menu__items} data-testid="desktop">
          {data.map(({ subject, id }) => (
            <li
              className={styles.menu__item}
              data-focus={id === idActive}
              key={id}
              onClick={() => handleClick(id)}
            >
              {subject}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default FaqMenu;
