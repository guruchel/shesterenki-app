import React from "react";
import styles from "./header.module.css";

const CloseIcon = ({ handleContact }) => {
  console.log(handleContact);
  return (
    <div className={styles.closeIcon} onClick={handleContact}>
      <svg
        height="25px"
        version="1.1"
        viewBox="0 0 512 512"
        width="25px"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg">
        <g className="st2" id="cross">
          <g className="st0">
            <line className="st1" x1="112.5" x2="401" y1="112.5" y2="401" />
            <line className="st1" x1="401" x2="112.5" y1="112.5" y2="401" />
          </g>
        </g>
        <g id="cross_copy">
          <path d="M268.064,256.75l138.593-138.593c3.124-3.124,3.124-8.189,0-11.313c-3.125-3.124-8.189-3.124-11.314,0L256.75,245.436   L118.157,106.843c-3.124-3.124-8.189-3.124-11.313,0c-3.125,3.124-3.125,8.189,0,11.313L245.436,256.75L106.843,395.343   c-3.125,3.125-3.125,8.189,0,11.314c1.562,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343L256.75,268.064l138.593,138.593   c1.563,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343c3.124-3.125,3.124-8.189,0-11.314L268.064,256.75z" />
        </g>
      </svg>
    </div>
  );
};

export default React.memo(CloseIcon);
