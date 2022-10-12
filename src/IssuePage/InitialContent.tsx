import { useEffect, useState } from "react";
import EditSection from "../component/NewIssue/EditSection";
import DropDownMenu from "../component/Reusable/DropDownMenu";
import PopUpSection from "../component/Reusable/PopUpSection";
import Reaction from "../component/Reusable/Reaction";
import smile from "../img/smile.svg";

function InitialContent() {
  const [hoverOnDots, setHoverOnDots] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [clickOnDots, setClickOnDots] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  useEffect(() => console.log(clickOnDots), [clickOnDots]);
  const emoji = [
    { emoji: "👍", name: "laugh", user: "emil0519", count: 1 },
    { emoji: "🚀", name: "rocket", user: "emil0519", count: 2 },
  ];
  const controller = [
    { content: "Copy link", hoverColor: "red" },
    { content: "Quote reply" },
    { content: "|" },
    { content: "Edit" },
    { content: "|" },
    { content: "Report content" },
  ];
  const [postData, setPostData] = useState<any>();

  return (
    <section className="mt-[20px] mr-auto ml-auto flex h-[max-content] w-[95%] flex-col rounded-md border-[1px] border-solid border-[#d4d6d9]">
      <div className="flex h-[37px] w-[100%] items-center justify-between bg-[#d9f2fe]">
        <div className="ml-[16px] flex">
          <span className="mr-[3px] cursor-pointer text-[14px] font-semibold text-[#495258] hover:text-[#407fd9] hover:underline">
            emil0519
          </span>
          <span className="mr-[3px] text-[14px] text-[#4d555e]">commented</span>
          <span className="mr-[3px] cursor-pointer text-[14px] text-[#4d555e] hover:text-[#407fd9] hover:underline">
            3 hours ago
          </span>
        </div>
        <div
          //給emoji的透明外層
          className={`${
            open ? "fixed" : "hidden"
          } top-0 right-0 bottom-0 left-0 flex bg-[black] p-[16px] opacity-[0.25] small:opacity-0`}
        ></div>
        <div
          onClick={() => setClickOnDots(true)}
          onMouseEnter={() => setHoverOnDots(true)}
          onMouseOut={() => setHoverOnDots(false)}
          className="relative mr-[16px] flex w-[25px] cursor-pointer items-center"
        >
          <span
            className={`${
              hoverOnDots ? "bg-[#407fd9]" : "bg-[#4d555e]"
            } cursor pointer  mr-[3px] h-[3px] w-[3px] rounded-full `}
          ></span>
          <span
            className={`${
              hoverOnDots ? "bg-[#407fd9]" : "bg-[#4d555e]"
            } cursor pointer  mr-[3px] h-[3px] w-[3px] rounded-full `}
          ></span>
          <span
            className={`${
              hoverOnDots ? "bg-[#407fd9]" : "bg-[#4d555e]"
            } cursor pointer  mr-[3px] h-[3px] w-[3px] rounded-full `}
          ></span>

          <section
            className={`${
              clickOnDots ? "flex" : "hidden"
            } absolute top-[16px] right-[0] z-[3] h-[max-content] w-[183px] flex-col rounded-md border-[0.5px] border-solid border-[#d5dbe1] bg-white pt-[8px] pb-[8px]`}
          >
            <DropDownMenu
              controller={controller}
              setEditOpen={setEditOpen}
              setClickOnDots={setClickOnDots}
            />
            <span className="upward-triangle absolute top-[-11px] left-[158px] h-[9px] w-[9px] bg-white"></span>
            <span className="upward-triangle absolute top-[7px] left-[3px] hidden h-[9px] w-[9px] bg-white"></span>
          </section>
        </div>
        <div
          onClick={() => {
            console.log("false");
            setClickOnDots(false);
          }}
          //給dropdown menu的透明外層
          className={`${
            clickOnDots ? "fixed" : "hidden"
          } top-0 left-0 z-[2] flex h-[100vh] w-[100vw] bg-black p-[16px] small:opacity-0`}
        ></div>
      </div>
      <div className="ml-[16px] mt-[16px]">Description here</div>
      <div className="flex items-center">
        <div
          onClick={() => setOpen(true)}
          className={`relative m-[16px_0_16px_16px] flex h-[26px] w-[26px] cursor-pointer items-center justify-center rounded-full border-[0.5px] border-solid border-[#d3d9e0] bg-[#f5f7f9] hover:bg-[#f1f2f4]`}
        >
          <img src={smile} alt="" className="h-[16px] w-[16px]"></img>
        </div>
        <PopUpSection open={open} setOpen={setOpen} />
        <Reaction emoji={emoji} />
      </div>
      <section className={`${editOpen ? "block" : "hidden"}`}>
        <EditSection
          postData={postData}
          setPostData={setPostData}
          page={"issue"}
        />
        <div className="flex h-[49px] items-center justify-end">
          <div
            onClick={() => setEditOpen(false)}
            className="h-[32px] w-[79px] cursor-pointer rounded-md border-[0.5px] border-solid border-[#e2e5ea] bg-[#f5f7f9] p-[5px_16px] text-[#991026] hover:bg-[#991026] hover:text-white"
          >
            Cancel
          </div>
          <div className="mr-[12px] ml-[12px] flex h-[32px] w-[148px] cursor-pointer items-center justify-center rounded-md border-[0.5px] border-solid border-[#278644] bg-[#29994a]  hover:bg-[#288c46]">
            <span className="text-white">Update comment</span>
          </div>
        </div>
      </section>
    </section>
  );
}

export default InitialContent;
