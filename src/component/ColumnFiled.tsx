import React, { useEffect, useState } from "react";

const ColumnFiled = ({ onClickHandler, bg, text, colSpan = 0 }: any) => {
  const [isMouseEnter, setMouseEnter] = useState(false);
  const [currOpacity, setCurrOpacity] = useState("90");
  function UpdateOpacity() {
    setCurrOpacity("80");
  }
  function RemoveOpacity() {
    setCurrOpacity("");
  }
  useEffect(() => {
    if (isMouseEnter) {
      UpdateOpacity();
    } else {
      RemoveOpacity();
    }
  }, [isMouseEnter]);
  return (
    <td
      style={{
        backgroundColor: bg + currOpacity,
      }}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      onClick={(): any => {
        onClickHandler(text);
      }}
      colSpan={colSpan}
    >
      <div className="PaQdxb A2W7l">
        <div
          data-jsname="j93WEe"
          className="XRsWPe MEdqYd"
          data-jsaction="A2jXUd"
          role="button"
          data-tabindex="0"
          aria-label="left parenthesis"
          data-ved="2ahUKEwi6h-e8vfL-AhVRSGwGHZklBXIQz6kIegQICRAe"
        >
          {text}
        </div>
      </div>
    </td>
  );
};

export default ColumnFiled;
