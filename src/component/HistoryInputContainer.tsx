import React from "react";
import DeleteSvg from "../assests/svg/DeleteSvg";
import CycleSvg from "../assests/svg/CycleSvg";
const HistoryInputContainer = ({
  firstColumn = "Name",
  secondColumn = "Calculations",
  thirdColumn = "Result",
  fourthColumn = false,
  bottomBorder = false,
  isHeading=false,
  EditResult,
  DeleteData,
  id
}: any) => {
  return (
    <div
      style={{
        position: "relative",
        direction: "ltr",
        // borderTop:"1px solid #f4f4f4",
      }}
      className={`border-t-2 ${bottomBorder&&"border-b-2"}`}
    >
      <div
        style={{
          display: "table",
          marginTop: "8px",
          zIndex: 2,
          position: "relative",
          width: "100%",
        }}
      >
        <div>
          <table
            style={{
              float: "left",
              // width: "42.857142857142854%",
              borderCollapse: "collapse",
              tableLayout: "fixed",
            }}
          >
            <tbody>
              <tr className="flex">
                <td className="w-12 flex items-center" >
                  <div className="PaQdxb UpZIS flex" >
                    <input type="checkbox" className="w-5 h-5" />
                  </div>
                </td>
                <td className={`w-32  text-sm ${isHeading&&"font-bold"} ${isHeading&&"text-base"}`}>
                  <div className="PaQdxb ">
                    <div className="text-left">{firstColumn}</div>
                  </div>
                </td>
                <td className={`w-32  text-sm ${isHeading&&"font-bold"} ${isHeading&&"text-base"}`}>
                  <div className="PaQdxb">
                    <div className="text-left">{secondColumn}</div>
                  </div>
                </td>
                <td className={`w-32  text-sm ${isHeading&&"font-bold"} ${isHeading&&"text-base"}`}>
                  <div className="PaQdxb">
                    <div className="text-left">{thirdColumn}</div>
                  </div>
                </td>
                <td className="w-32 ">
                  <div className="PaQdxb UpZIS">
                    {fourthColumn && (
                      <div className="flex w-full justify-around items-center">
                        <div onClick={()=>EditResult(secondColumn,firstColumn,id)}>
                          <CycleSvg/>
                        </div>
                        <div onClick={()=>DeleteData(id)}>
                          <DeleteSvg />
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HistoryInputContainer;
