import React from "react";

const TopResultContainer = ({ text = "" }) => {  
  return (
    <div
      className="BRpYC"
      style={{
        width: "100%",
        height: "72px",
        border: "1px solid #3c4043",
        margin: "auto",
        boxSizing: "border-box",
        display:"block",
        backgroundColor: "#585152",

}}
    >
      <div
        data-jsname="a1lrmb"
        style={{
          display: "table",
          fontSize:"30px",
          height: "32px",
          verticalAlign: "bottom",
          position: "relative",
          tableLayout:"fixed",
          width: "100%",
          zIndex: 0,
        }}
      >
        <div
        role="presentation"
          data-jsname="VSgwn"
          className="xwgN1d XSNERd"
          style={{
            display: "table-row",

          }}
        >
          <div
            data-jsname="VkJw6"
            className="XH1CIc"
            style={{
              overflow: "hidden",
              verticalAlign: "middle",
              width: "100%",
              display: "table-cell",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                fontFamily: "arial,sans-serif",
                float: "right",
              }}
            >
              {text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopResultContainer;
