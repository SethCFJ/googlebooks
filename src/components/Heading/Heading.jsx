import React from "react";
import styles from "./Heading.module.scss";

import { useState } from "react";
const Heading = ({ text }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Google Books API</h1>
    </div>
  );
};

export default Heading;
