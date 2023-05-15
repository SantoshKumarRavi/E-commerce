import React from "react";
import DeleteSvg from "../assests/svg/DeleteSvg";
import CycleSvg from "../assests/svg/CycleSvg";
const HistoryInputContainer = ({
  firstColumn = "Name",
  secondColumn = "Calculations",
  thirdColumn = "Result",
  fourthColumn = false,
  bottomBorder = false,
  isHeading = false,
  EditResult,
  DeleteData,
  id,
}: any) => {
  return (
    <div
      style={{
        direction: "ltr",
      }}
      className={`border-t-2 ${bottomBorder && "border-b-2"} relative`}
    >
      <div
        className="w-full relative table mt-2	" //
        style={{
          zIndex: 2,
        }}
      >
        <div>
          <table className="float-left border-collapse	table-fixed">
            <tbody>
              <tr className="flex">
                <td className="w-12 flex items-center">
                  <div className="flex cursor-pointer	font-sans text-center	leading-9	m-1 box-border	relative	rounded	text-xs">
                    <input type="checkbox" className="w-5 h-5" />
                  </div>
                </td>
                <td
                  className={`w-32  text-sm ${isHeading && "font-bold"} ${
                    isHeading && "text-base"
                  }`}
                >
                  <div className="cursor-pointer	font-sans text-center	leading-9	m-1 box-border	relative	rounded">
                    <div className="text-left">{firstColumn}</div>
                  </div>
                </td>
                <td
                  className={`w-32  text-sm ${isHeading && "font-bold"} ${
                    isHeading && "text-base"
                  }`}
                >
                  <div className="cursor-pointer	font-sans text-center	leading-9	m-1 box-border	relative	rounded">
                    <div className="text-left">{secondColumn}</div>
                  </div>
                </td>
                <td
                  className={`w-32  text-sm ${isHeading && "font-bold"} ${
                    isHeading && "text-base"
                  }`}
                >
                  <div className="cursor-pointer	font-sans text-center	leading-9	m-1 box-border	relative	rounded">
                    <div className="text-left">{thirdColumn}</div>
                  </div>
                </td>
                <td className="w-32 ">
                  <div className="cursor-pointer	font-sans text-center	leading-9	m-1 box-border	relative	rounded">
                    {fourthColumn && (
                      <div className="flex w-full justify-around items-center">
                        <div
                          onClick={() =>
                            EditResult(secondColumn, firstColumn, id)
                          }
                        >
                          <CycleSvg />
                        </div>
                        <div onClick={() => DeleteData(id)}>
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
