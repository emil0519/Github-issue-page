import { useEffect, useState } from "react";
import EditSection from "../component/NewIssue/EditSection";
import EditNote from "../component/Reusable/EditNote";
import AssigneeLabel from "./AssigneeLabel";
import IssuePageProcessor from "./IssuePageProcessor";
import Title from "./Title";
import { useGetAllIssuesQuery, useUpdateMutation } from "../state/issueRTK";
import { useSearchParams } from "react-router-dom";
import PopUpDataProcessor from "../component/NewIssue/PopUpDataProcessor";
import IssueSpecialPart from "./IssueSpecialPart";
import BigAvatar from "../component/Reusable/BigAvatar";

function IssuePageWrap() {
  const [postData, setPostData] = useState<any>();
  const [searchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState<string>("");
  const [controller, setController] = useState<any>();
  const [showDropDown, setShowDropDown] = useState("");
  const [update] = useUpdateMutation();
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [defaultAssigneesData, setDefaultAssigneesData] = useState<any>();
  const [defaultLabelData, setDefaultLabelData] = useState<any>();
  const [assigneesData, setAssigneesData] = useState<any>();
  const [labelData, setLabelData] = useState<any>();

  useEffect(() => {
    const updateSideBar = async () => {
      let body: any;
      switch (showDropDown) {
        case "Assignee post": {
          console.log(controller, "in assignee");
          let selected = controller.filter(
            (item: any) => item.title === "Assignee"
          );
          console.log(selected);

          let newSelected = selected[0].selected;
          body = { assignees: newSelected };
          // 改進: what is the best practice to avoid declaring new variable?
          break;
        }
        case "Labels post": {
          let selected = controller.filter(
            (item: any) => item.title === "Labels"
          );
          let newSelected = selected[0].selected;
          body = { labels: newSelected };
          break;
        }
        default:
          return;
      }
      console.log(body);

      await update({
        baseType: "repos",
        type: "/issues",
        name: "/emil0519",
        repo: "/testing-issues",
        query: `/${query}`,
        content: JSON.stringify(body),
      });
    };
    updateSideBar();
  }, [showDropDown]);

  const query = searchParams.get("query");
  const { data, isError, isSuccess, isLoading } = useGetAllIssuesQuery({
    baseType: "repos",
    type: "/issues",
    name: "/emil0519",
    repo: "/testing-issues",
    query: `/${query}`,
  });

  const comments = useGetAllIssuesQuery({
    baseType: "repos",
    type: "/issues",
    name: "/emil0519",
    repo: "/testing-issues",
    query: `/${query}/comments`,
  });

  const timeline = useGetAllIssuesQuery({
    baseType: "repos",
    type: "/issues",
    name: "/emil0519",
    repo: "/testing-issues",
    query: `/${query}/timeline`,
  });

  useEffect(() => {
    //Options for reusable component
    setController([
      {
        title: "Assignee",
        default: {
          descriptionWithoutLink: "No one- ",
          descriptionWithLink: "assign yourself",
          desLink: "https://github.com/emil0519?tab=repositories",
          isLinkDecoration: false,
          inputPlaceholder: "Type or choose a user",
          mainHeader: "Assign up to 10 people to this issue",
          subHeader: "Suggestion",
          clearText: "clear assignee",
          isOpen: true,
          isGear: true, //can be cancel by"x" button or not
        },
        data: assigneesData,
        defaultData: defaultAssigneesData,
        selected: [] as string[],
        showSelectedData: [],
      },
      {
        title: "Labels",
        default: {
          descriptionWithoutLink: "None yet",
          inputPlaceholder: "Filter labels",
          mainHeader: "Apply labels to this issue",
          isOpen: true,
          isGear: true,
        },
        data: labelData,
        defaultData: defaultLabelData,
        selected: [] as string[],
        showSelectedData: [],
      },
      {
        title: "Projects",
        default: {
          descriptionWithoutLink: "None yet",
          inputPlaceholder: "",
          mainHeader: "",
          isOpen: false,
          isGear: true,
          selected: [] as string[],
        },
      },
      {
        title: "Milestone",
        default: {
          descriptionWithoutLink: "No milestone",
          inputPlaceholder: "",
          mainHeader: "",
          isOpen: false,
          isGear: true,
          selected: [] as string[],
        },
      },
      {
        title: "Development",
        default: {
          descriptionWithoutLink:
            "Shows branches and pull requests linked to this issue.",
          inputPlaceholder: "",
          mainHeader: "",
          isOpen: false,
          isGear: false,
          selected: [] as string[],
        },
      },
    ]);
  }, [assigneesData, labelData]);

  const fetchedLabelData = useGetAllIssuesQuery({
    baseType: "repos",
    type: "/labels",
    name: "/emil0519",
    repo: "/testing-issues",
    query: "",
  });

  useEffect(() => {
    //處理fetch回來的label data
    if (fetchedLabelData.data !== undefined) {
      const processedLabelData = fetchedLabelData.data.map((item: any) => ({
        icon: item.color,
        title: item.name,
        description: item.description,
      }));
      setLabelData(processedLabelData);
      setDefaultLabelData(processedLabelData);
    }
  }, [fetchedLabelData]);

  const fetchedAssigneeData = useGetAllIssuesQuery({
    baseType: "repos",
    type: "/assignees",
    name: "/emil0519",
    repo: "/testing-issues",
    query: "",
  });
  useEffect(() => {
    //處理fetch回來的assignee data
    if (fetchedAssigneeData.data !== undefined) {
      const processedAssigneeData = fetchedAssigneeData.data.map(
        (item: any) => ({
          icon: item.avatar_url,
          title: item.login,
        })
      );
      setAssigneesData(processedAssigneeData);
      setDefaultAssigneesData(processedAssigneeData);
    }
  }, [fetchedAssigneeData]);

  return (
    <section className="flex w-[100%] flex-col med:flex-wrap">
      <section className="flex w-[100%] flex-col items-center justify-center">
        <Title data={data} comments={comments} />
        <AssigneeLabel data={data} />
      </section>
      <section className="flex flex-col med:flex-row med:justify-center">
        <section className="flex w-[100%] flex-col med:mt-[24px] med:w-[82%] med:max-w-[909px]">
          <IssuePageProcessor data={data} timeline={timeline} />
          <section className="m-0 flex med:mr-[60px] med:w-[100%] med:max-w-[878px]">
            <BigAvatar />
            <div className="w-[100%]">
              <EditSection
                inputValue={inputValue}
                setInputValue={setInputValue}
                postData={postData}
                setPostData={setPostData}
                page={"issue"}
              />
              <EditNote setInputValue={setInputValue} postData={postData} />
            </div>
          </section>
        </section>
        <section className="flex w-[100%] flex-col med:order-1 med:mt-[24px] med:w-[24%]">
          <PopUpDataProcessor
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            showDropDown={showDropDown}
            setShowDropDown={setShowDropDown}
            controller={controller}
            setController={setController}
            type={"issue"}
          />
          <IssueSpecialPart />
        </section>
      </section>
    </section>
  );
}

export default IssuePageWrap;
