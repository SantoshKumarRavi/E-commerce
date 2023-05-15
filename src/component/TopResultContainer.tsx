import React from "react";

const TopResultContainer = ({ text = "" }) => {
  return (
    <div
      style={{
        backgroundColor: "#585152",
      }}
      className="w-full h-16 m-auto box-border block	"
    >
      <div
        className="table w-full text-3xl h-8 align-bottom	relative table-fixed" //          zIndex: 0,
      >
        <div className="table-row">
          <div className="table-cell overflow-hidden align-middle w-full whitespace-nowrap	">
            <span className="float-right font-sans">{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopResultContainer;
