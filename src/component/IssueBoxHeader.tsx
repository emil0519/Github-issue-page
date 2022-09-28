import { useState } from "react";
import down from "../img/triangle-down.svg";
import OpenClosedInHeader from "./OpenClosedInHeader";
import x from "../img/x.svg";
import check from "../img/check.svg";

function IssueBoxHeader() {
  const [labelListOpen, setLabelListOpen] = useState(false);
  const [sortListOpen, setSortListOpen] = useState(false);

  const titleName = [
    { name: "Author" },
    { name: "Label" },
    { name: "Project" },
    { name: "MileStone" },
    { name: "Assignee" },
    { name: "Sort" },
  ];
  const labelName = [
    {
      name: "Hello world",
      description: "This is a description",
      color: "navy",
    },
    { name: "Your issues", color: "#f7c9bf" },
    { name: "PR", color: "#1c1c1c", description: "I do have a description" },
    { name: "Everything assigned to you", color: "#ac6a4c" },
    { name: "Everything mentioning you", color: "#e86e64" },
    { name: "Everything mentioning you", color: "#e86e64" },
    { name: "Everything mentioning you", color: "#e86e64" },
    { name: "Everything mentioning you", color: "#e86e64" },
    { name: "Everything mentioning you", color: "#e86e64" },
    { name: "Everything mentioning you", color: "#e86e64" },
    { name: "Everything mentioning you", color: "#e86e64" },
    { name: "Everything mentioning you", color: "#e86e64" },
  ];

  const mapper = [1, 2, 3, 4, 5, 6];

  return (
    <section className="flex w-[100%]">
      <div className="fixed top-0 left-0 bg-black"></div>
      <section className="flex h-[55px] w-[100%] items-center justify-evenly rounded-md border-t-[0.5px] border-b-[0.5px] border-solid border-[#cad1d9] bg-[#f5f7f9] pl-[16px] pr-[16px] small:justify-start small:border-[0.5px] big:justify-between big:justify-between">
        <section className="flex">
          <OpenClosedInHeader />
        </section>
        <section className="relative flex w-[100%] justify-evenly small:justify-start big:w-[auto]">
          {titleName.map((item) => {
            if (item.name === "Project" || item.name === "MileStone") {
              return (
                <span className="ml-[16px] mr-[16px] hidden cursor-pointer text-xs text-[#212529] hover:text-[black] small:items-center med:flex">
                  {item.name}
                  <img
                    src={down}
                    alt=""
                    className="ml-[2px] hidden h-[4px] small:block small:w-[8px]"
                  ></img>
                </span>
              );
            } else if (item.name === "Label") {
              return (
                <>
                  {/* label按鈕及彈出選單 */}
                  <span
                    onClick={() => setLabelListOpen(true)}
                    className="ml-[16px] mr-[16px] flex cursor-pointer text-xs text-[#212529] hover:text-[black] small:relative small:items-center"
                  >
                    {item.name}
                    <img
                      src={down}
                      alt=""
                      className="ml-[2px] hidden h-[4px] small:block small:w-[8px]"
                    ></img>
                  </span>
                  <div
                    // 透明外面，點擊會關掉彈窗
                    onClick={() => setLabelListOpen(false)}
                    className={`${
                      labelListOpen ? "fixed" : "hidden"
                    } top-0 right-0 bottom-0 left-0 z-[99] flex bg-[black] p-[16px] opacity-25 small:opacity-0`}
                  ></div>
                  <div
                    //彈出的清單
                    className={`${
                      labelListOpen ? "fixed" : "hidden"
                    }  top-[1.5%] right-[9px] z-[99] flex h-[max-content] w-[95vw] flex-col rounded-lg border-[0.5px] border-solid border-[#cad1d9] bg-[white] small:absolute  small:top-[18px] small:left-[84px] small:h-[max-content] small:w-[298px] med:top-[20px] big:top-[18px] big:left-[77px] `}
                  >
                    <div className="right-[5vw] flex h-[54px] w-[100%] items-center justify-between small:h-[33px]">
                      <span className="ml-[16px] text-xs font-semibold small:p-0 ">
                        Filter by Label
                      </span>
                      <img
                        src={x}
                        onClick={() => setLabelListOpen(false)}
                        className="mr-[16px] h-[16px] w-[16px] cursor-pointer"
                        alt=""
                      ></img>
                    </div>
                    <div className="flex h-[65px] w-[100%] items-center justify-center border-t-[0.5px] border-b-[0.5px] border-solid border-[#d3d9e0] bg-[white] small:h-[49px] ">
                      <input
                        placeholder="Filter labels"
                        className="h-[32px] w-[85%] rounded-md border-[1px] border-solid border-[#d3d9e0] p-[5px_12px] small:w-[95%] small:text-xs"
                      ></input>
                    </div>
                    <div className="h-[416px] overflow-y-auto overflow-x-hidden">
                      <div className="flex h-[54px] w-[100%] cursor-pointer items-center justify-between border-t-[0.5px] border-b-[0.5px] border-solid border-[#d3d9e0] bg-[white] hover:bg-[#f3f5f7] small:h-[33px] small:w-[298px]">
                        <span className=" m-[16px] ml-[52px] text-xs font-semibold">
                          Unlabeled
                        </span>
                      </div>

                      {labelName.map((item) => {
                        if (item.hasOwnProperty("description")) {
                          return (
                            //unlabeled 下面的每行，判斷是否有description，樣式會不一樣
                            <div className="flex h-[54px] w-[100%] cursor-pointer items-center justify-start border-t-[0.5px] border-b-[0.5px] border-solid border-[#d3d9e0] bg-[white] hover:bg-[#f3f5f7] small:h-[49px]">
                              <div
                                //label preview
                                className={`mb-16px mr-[6px] ml-[32px] h-[14px] w-[14px] rounded-full bg-[navy] small:mb-[18px] small:mr-[8px]`}
                              ></div>
                              <div className="flex flex-col">
                                <span className=" text-xs font-semibold ">
                                  {item.name}
                                </span>
                                <span className=" mt-[3px] w-[max-content] text-xs text-[#57606a] ">
                                  {item.description}
                                </span>
                              </div>
                            </div>
                          );
                        } else {
                          return (
                            <div className="flex h-[54px] w-[100%] cursor-pointer items-center justify-start border-t-[0.5px] border-b-[0.5px] border-solid border-[#d3d9e0] bg-[white] hover:bg-[#f3f5f7] small:h-[33px]">
                              <div
                                className={`mr-[6px] ml-[32px] h-[14px] w-[14px] rounded-full bg-[${item.color}]`}
                              ></div>
                              <div className="flex flex-col">
                                <span className=" text-xs font-semibold">
                                  {item.name}
                                </span>
                              </div>
                            </div>
                          );
                        }
                      })}
                    </div>
                    {/* 最後一行的資訊列 */}
                    <div className="flex h-[59.91px] w-[100%] items-center  justify-start border-t-[0.5px] border-b-[0.5px] border-solid border-[#d3d9e0] bg-[white] pl-[5px] ">
                      <span className="small:mt[16px] text-xs text-[#57606a] small:h-[33px]">
                        Use{" "}
                        <span className="h-[fit-content] w-[fit-content] rounded-lg border-[1px] border-solid border-[#e8ebef] bg-[#f6f8fa] p-[3px_5px] text-[#24292f]">
                          ⌥
                        </span>{" "}
                        +
                        <span className="h-[fit-content] w-[fit-content] rounded-lg border-[1px] border-solid border-[#e8ebef] bg-[#f6f8fa] p-[3px_5px] text-[#24292f]">
                          click/return
                        </span>
                        to exclude labels or
                        <span className="h-[fit-content] w-[fit-content] rounded-lg border-[1px] border-solid border-[#e8ebef] bg-[#f6f8fa] p-[3px_5px] text-[#24292f]">
                          ⇧
                        </span>
                        +{" "}
                        <span className="h-[fit-content] w-[fit-content] rounded-lg border-[1px] border-solid border-[#e8ebef] bg-[#f6f8fa] p-[3px_5px] text-[#24292f]">
                          click/return
                        </span>{" "}
                        for logical OR
                      </span>
                    </div>
                  </div>
                </>
              );
            } else if (item.name === "Sort") {
              // Sort按鈕下的彈出選單
              return (
                <>
                  <span
                    onClick={() => setSortListOpen(true)}
                    className="ml-[16px] mr-[16px] flex cursor-pointer text-xs text-[#212529] hover:text-[black] small:relative small:items-center"
                  >
                    {item.name}
                    <img
                      src={down}
                      alt=""
                      className="ml-[2px] hidden h-[4px] small:block small:w-[8px]"
                    ></img>
                  </span>
                  <div
                    // 透明外面，點擊會關掉彈窗
                    onClick={() => setSortListOpen(false)}
                    className={`${sortListOpen ? "fixed" : "hidden"} 
                   top-0 right-0 bottom-0 left-0 z-[99]  flex bg-[black] p-[16px] opacity-25 small:opacity-0`}
                  ></div>
                  <div
                    //彈出的清單
                    className={`${
                      sortListOpen ? "fixed" : "hidden"
                    } top-[1.5%] right-[9px] z-[99] flex h-[646px] w-[95vw] flex-col rounded-lg border-[0.5px] border-solid border-[#cad1d9] bg-[white] small:absolute  small:top-[18px] small:left-[260px] small:h-[max-content] small:w-[298px] med:top-[20px] med:left-[440px] big:top-[20px] big:left-[210px] `}
                  >
                    <div className="right-[5vw] flex  h-[54px] w-[100%] items-center justify-between small:h-[33px]">
                      <span className="ml-[16px] text-xs font-semibold small:p-0 ">
                        Sort by
                      </span>
                      <img
                        src={x}
                        onClick={() => setSortListOpen(false)}
                        className="mr-[16px] h-[16px] w-[16px] cursor-pointer"
                        alt=""
                      ></img>
                    </div>
                    <div className="h-[324px]">
                      {mapper.map(() => {
                        return (
                          <div className="flex h-[54px] w-[100%] cursor-pointer items-center justify-start border-t-[0.5px] border-b-[0.5px] border-solid border-[#d3d9e0] bg-[white] hover:bg-[#f3f5f7] small:h-[33px]">
                            <img
                              src={check}
                              alt=""
                              className="ml-[16px] mr-[8px] h-[16px] w-[16px]"
                            ></img>
                            <div className="flex flex-col">
                              <span className=" text-xs font-semibold">
                                Newest
                              </span>
                            </div>
                          </div>
                        );
                      })}
                      <div className="flex h-[27px] w-[100%] items-center justify-start bg-[#f5f7f9]">
                        <span className="ml-[16px] text-xs ">
                          Most reactions
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              );
            } else {
              return (
                // 其他沒有彈出選單的按鈕
                <span className="ml-[16px] mr-[16px] flex cursor-pointer text-xs text-[#212529] hover:text-[black] small:items-center">
                  {item.name}
                  <img
                    src={down}
                    alt=""
                    className="ml-[2px] hidden h-[4px] small:block small:w-[8px]"
                  ></img>
                </span>
              );
            }
          })}
        </section>
      </section>
    </section>
  );
}
export default IssueBoxHeader;