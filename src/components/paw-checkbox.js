import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  turnPawPrintingOn,
  turnPawPrintingOff,
} from "../reducers/pawPrintReducer";

export default function () {
  const dispatcher = useDispatch();
  const isPrintingOn = useSelector((state) => {
    return state.isPrintingOn;
  });

  return (
    <div className="paw-checkbox-container">
      <input
        onChange={(e) => {
          if (isPrintingOn) dispatcher(turnPawPrintingOff);
          else dispatcher(turnPawPrintingOn);
          console.log(
            document.querySelector(
              "body #root .main-page .paw-checkbox-container .paw-checkbox::after"
            )
          );
        }}
        className="paw-checkbox"
        type="checkbox"
        checked={isPrintingOn}
        checked-text="Move your mouse to see some magic"
        unchecked-text="Turn on to enable magic"
      />
    </div>
  );
}
