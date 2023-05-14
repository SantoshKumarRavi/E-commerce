import React from "react";
import ColumnFiled from "./ColumnFiled";
const TwocolumnContainer = ({
  firstBg = "#847d7e",
  secondBg = "#847d7e",
  thirdBg = "#ff9f09",
  firstText = "0",
  secondText = ".",
  thirdText = "=",
  onClickHandler,
  onSubmitHandler
}: any) => {
  return (
    <tr>
      <ColumnFiled
        onClickHandler={onClickHandler}
        bg={firstBg}
        text={firstText}
        colSpan={2}
      />
      <ColumnFiled
        onClickHandler={onClickHandler}
        bg={secondBg}
        text={secondText}
      />
      <ColumnFiled
        onClickHandler={onSubmitHandler}
        bg={thirdBg}
        text={thirdText}
      />
    </tr>
  );
};

export default TwocolumnContainer;
