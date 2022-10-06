import EditSection from "./EditSection";

import Submit from "./Submit";
import PopUpDataProcessor from "./PopUpDataProcessor";
import avatar from "../../img/github-avatar.png";

function NewIssueWrapper() {
  return (
    <section className="flex flex-col med:relative med:m-[0_auto] med:w-[95%] med:flex-row med:justify-center">
      <img
        src={avatar}
        alt=""
        className="mt-[36px] hidden med:mr-[19px] med:block med:h-[40px] med:w-[40px] med:rounded-full"
      ></img>
      <EditSection />
      <PopUpDataProcessor />
      <Submit />
    </section>
  );
}

export default NewIssueWrapper;