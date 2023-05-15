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
      <div className="cursor-pointer	font-sans text-center	leading-9	m-1 box-border	relative	rounded		">
        <div>{text}</div>
      </div>
    </td>
  );
};

export default ColumnFiled;
