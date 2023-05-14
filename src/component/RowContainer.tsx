import React from "react";
import ColumnFiled from "./ColumnFiled";
const RowContainer = ({
  onClickHandler,
  firstBg = "#6a6364",
  secondBg = "#6a6364",
  thirdBg = "#6a6364",
  forthBg = "#ff9f09",
  firstText = "AC",
  secondText = "+/-",
  thirdText = "%",
  forthText = "÷",
  clearResult,
}: any) => {
  return (
    <tr>
      <ColumnFiled
        onClickHandler={firstText === "AC" ? clearResult : onClickHandler}
        bg={firstBg}
        text={firstText}
      />
      <ColumnFiled
        onClickHandler={onClickHandler}
        bg={secondBg}
        text={secondText}
      />
      <ColumnFiled
        onClickHandler={onClickHandler}
        bg={thirdBg}
        text={thirdText}
      />
      <ColumnFiled
        onClickHandler={onClickHandler}
        bg={forthBg}
        text={forthText}
      />
    </tr>
  );
};

export default RowContainer;
