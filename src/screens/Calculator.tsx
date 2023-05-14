/* eslint no-eval: 0 */
import React, { useState } from "react";
import InputContainer from "../component/InputContainer";
import HistoryCalculations from "../component/HistoryCalculations";
import CalculatorComp from "../component/Calculator";

const Calculator = () => {
  const [currentKey, setCurrentKey] = useState({ curr: "" });
  const [result, setResult] = useState("");
  const [Preresult, setPreresult] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [Rerender, setRerender] = useState(false);
  const [inputVal, setinputVal] = useState("");
  const [EditId, setEditId] = useState("");
  const [contentMissing, setContentMissing] = useState(false);
  function UpdateCurrentKey(key: any) {
    setCurrentKey({ curr: key });
  }
  function clearResult(key: any) {
    setResult("");
  }
  function HandleSubmit(key: any) {
    try {
      setPreresult(result);
      let updated = result
        ?.split("")
        ?.map((x) => {
          return x === "÷" ? "/" : x === "x" ? "*" : x;
        })
        ?.join("");
      let isNan = eval(updated);
      isNaN(isNan) ? new Error("err") : setResult(isNan);
    } catch (err) {
      setResult("Error");
      setPreresult("");
      setTimeout(() => {
        setResult("");
      }, 1000);
    }
  }
  function HandleSave(key: any) {
    if (Preresult !== "" && inputVal !== "" && result !== "") {
      let obj: any = {
        calculation: Preresult,
        name: inputVal,
        result: result,
      };
      if (EditId !== "") {
        obj["_id"] = EditId;
      }
      console.log("obj", obj);
      fetch(`https://calculationhistory2.onrender.com/calculation`, {
        method: EditId !== "" ? "PUT" : "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      })
        .then((x) => {
          return x.text();
        })
        .then((x) => {
          setRerender((pre) => !pre);
          setinputVal("");
          setResult("");
          setPreresult("");
          setContentMissing(false);
          setEditId("")
        })
        .catch((er) => {
          console.warn("er", er);
        });
    } else {
      setContentMissing(true);
    }
  }
  function EditResult(cal: any, name: any, id: any) {
    setResult(cal);
    setinputVal(name);
    setEditId(id);
  }
  function DeleteData(id: any) {
    fetch(`https://calculationhistory2.onrender.com/calculation`, {
      method: "DELETE",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _id: id,
      }),
    })
      .then((x) => {
        return x.text();
      })
      .then((x) => {
        setRerender((pre) => !pre);
      })
      .catch((er) => {
        console.warn("er", er);
      });
    // setTimeout(())
  }
  return (
    <div className="w-full flex flex-col lg:flex-row h-screen pt-4 pl-4 lg:pl-0">
      <div className=" lg:w-2/4 text-white  flex lg:justify-center lg:items-start">
        <div className="flex flex-col justify-center items-start">
          <CalculatorComp
            title="Calculator"
            HandleSubmit={HandleSubmit}
            clearResult={clearResult}
            UpdateCurrentKey={UpdateCurrentKey}
            currentKey={currentKey}
            result={result}
            setResult={setResult}
          />
          <InputContainer
            title="Calculation Name"
            btnName="Save"
            inputType="text"
            placeholder="Enter name here.."
            onSubmit={HandleSave}
            inputVal={inputVal}
            setinputVal={setinputVal}
          />
          {contentMissing && (
            <div
              className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 inline w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div>
                <span className="font-medium">Alert! </span>
                Fill all details or press "=" 
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="lg:w-2/4">
        <HistoryCalculations
          isLoading={isLoading}
          setLoading={setLoading}
          data={data}
          setData={setData}
          EditResult={EditResult}
          DeleteData={DeleteData}
          Rerender={Rerender}
        />
      </div>
    </div>
  );
};

export default Calculator;
