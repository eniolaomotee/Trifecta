import React, { useEffect } from "react";

import styles from "./TableFooter.module.css";

const TableFooter = ({ range, setPage, page, slice }) => {
  let current_page = 1;
  // let flipPage = (e) =>{
  //   current_page += e;
    // if(current_page > range.length){
    //   console.log(`xxxxmainer${current_page}`)
    // // setPage(range[0])
    // }
    // else{
      // setPage(range[current_page]);
      // console.log('elsa');
    // }
  //   console.log(`current-page ${current_page}`)
    
  // }
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <div className={styles.tableFooter}>
      {range.map((el, index) => (
        <button
          key={index}
          className={`${styles.button} ${
            page === el ? styles.activeButton : styles.inactiveButton
          }`}
          onClick={() => setPage(el)}
        >
          {el}
        </button>
      ))}
      {/* <button className={styles.button} onClick={() => flipPage(1)}>Previous</button>
      <button className={styles.button} onClick={() => flipPage(-1)}>Next</button>
      <button onClick={() => setPage(1)}>reset</button> */}
    </div>
  );
};

export default TableFooter;
