import React from 'react'
import { CircleFlag } from "react-circle-flags";
import styles from "../styles/MenuLanguage.module.css"

interface FlagsProps {
    code:string,
    // changeLanguage:(code:string) => void
}

function Flags({ code }: FlagsProps) {
  return  (
    <CircleFlag
      countryCode={code}
      height="25"
      // onClick={() => changeLanguage(code)}
      className={styles.flags}
    />
  );
}

export default Flags