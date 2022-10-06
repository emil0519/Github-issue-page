import { useState } from "react";

// type arrayProps = { array: (string | number | JSX.Element)[][] };
type arrayProps = { array: any };

function InputOptions({ array }: arrayProps) {
  const [mouseOver, setMouseOver] = useState("");
  return (
    <div className={`ml-[13px] flex cursor-pointer`}>
      {array.map((item: any) => (
        <div
          onMouseOver={() => setMouseOver(item[2])}
          onMouseOut={() => setMouseOver("")}
          className={`${item[3] === "med" ? "hidden" : "block"} ${
            item[3] === "med" ? "med:block" : "block"
          } relative h-[32px] w-[28px]`}
        >
          {item[0]}
          {/* 暫時沒有想到更好的辦法處理link在手機版不會顯示pop-up message 但過了738px後會 */}
          {item[3] === "pop-des" ? (
            <div
              className={`
            ${
              mouseOver === item[2] ? "med:block" : "hidden"
            }  absolute top-[147%] hidden w-[max-content] cursor-text items-center justify-center rounded-md bg-black p-[5px_9px] `}
            >
              <span className="upward-triangle absolute top-[-31%] left-[3px] h-[9px] w-[9px] bg-black"></span>
              <span className="text-xs text-[white]"> {item[1]}</span>
            </div>
          ) : (
            <div
              className={`
            ${mouseOver === item[2] ? "block" : "hidden"}  
            absolute top-[147%] flex w-[max-content] cursor-text items-center justify-center rounded-md bg-black p-[5px_9px]`}
            >
              <span className="upward-triangle absolute top-[-31%] left-[3px] h-[9px] w-[9px] bg-black"></span>
              <span className="text-xs text-[white]"> {item[1]}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default InputOptions;