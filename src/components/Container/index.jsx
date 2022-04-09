import React from "react";
import styles from "./styles.module.css";

export const Container = ({ wrapper, children }) => {
  const HtmlNode = wrapper || "div";
  return <HtmlNode className={styles.container}>{children}</HtmlNode>;
};
