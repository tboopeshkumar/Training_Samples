import React, { Fragment } from "react";
import FontAwesomeIcon from "./FontAwesomeIcon";
import { helpMsg } from "../constants/toasts";


const HelpMenu = ({ showToast }) => {
  return <div  onClick={showToast.bind(null, "success", helpMsg)}>
    <FontAwesomeIcon
      icon="bars"
      text="help123"      
    />
  </div>
};

export default HelpMenu;
