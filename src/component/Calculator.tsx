import React, { useEffect } from "react";
import RowContainer from "./RowContainer";
import TwocolumnContainer from "./TwocolumnContainer";
import TopResultContainer from "./TopResultContainer";
const Calculator = ({
  title = "Calculator",
  UpdateCurrentKey,
  clearResult,
  HandleSubmit,
  currentKey,
  result,
  setResult,
}: any) => {
  useEffect(() => {
    if (currentKey.curr !== "") {
      setResult((pre: any) => {
        return pre + currentKey.curr;
      });
    }
  }, [currentKey, setResult]);
  return (
    <div className="max-w-xs">
      <h4 className="font-semibold my-2 text-xl text-black">{title}</h4>
      <TopResultContainer text={result} />
      <div
        style={{
          backgroundColor: "#585152",
        }}
        className="relative"
      >
        <div className="relative table w-full">
          <div>
            <table className="border-separate w-full	table-fixed border-spacing-px		">
              <tbody>
                <RowContainer
                  onClickHandler={UpdateCurrentKey}
                  clearResult={clearResult}
                  firstBg="#6a6364"
                  secondBg="#6a6364"
                  thirdBg="#6a6364"
                  forthBg="#ff9f09"
                  firstText="AC"
                  secondText="+/-"
                  thirdText="%"
                  forthText="÷"
                />
                <RowContainer
                  onClickHandler={UpdateCurrentKey}
                  firstBg="#847d7e"
                  secondBg="#847d7e"
                  thirdBg="#847d7e"
                  forthBg="#ff9f09"
                  firstText="7"
                  secondText="8"
                  thirdText="9"
                  forthText="x"
                />
                <RowContainer
                  onClickHandler={UpdateCurrentKey}
                  firstBg="#847d7e"
                  secondBg="#847d7e"
                  thirdBg="#847d7e"
                  forthBg="#ff9f09"
                  firstText="4"
                  secondText="5"
                  thirdText="6"
                  forthText="-"
                />
                <RowContainer
                  onClickHandler={UpdateCurrentKey}
                  firstBg="#847d7e"
                  secondBg="#847d7e"
                  thirdBg="#847d7e"
                  forthBg="#ff9f09"
                  firstText="1"
                  secondText="2"
                  thirdText="3"
                  forthText="+"
                />
                <TwocolumnContainer
                  onClickHandler={UpdateCurrentKey}
                  onSubmitHandler={HandleSubmit}
                  firstBg="#847d7e"
                  secondBg="#847d7e"
                  thirdBg="#ff9f09"
                  firstText="0"
                  secondText="."
                  thirdText="="
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
