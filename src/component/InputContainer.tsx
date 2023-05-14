import React from "react";
const InputContainer = ({
  title = "Calculation Name",
  btnName = "Save",
  inputType = "text",
  placeholder = "Enter name Here",
  onSubmit,
  inputVal,
  setinputVal,
}: any) => {
  return (
    <>
      <h4 className="font-semibold my-2 text-xl">{title}</h4>
      <div className="flex justify-between gap-4 w-60">
        <input
          type={inputType}
          name="name"
          value={inputVal}
          onChange={(e) => setinputVal(e.target.value)}
          className="py-2 pl-3 block bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1"
          placeholder={placeholder}
        />
        <button
          onClick={() => onSubmit()}
          className="rounded px-6 bg-blue-500 text-white font-semibold"
        >
          {btnName}
        </button>
      </div>
    </>
  );
};

export default InputContainer;
