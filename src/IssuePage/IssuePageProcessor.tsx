import { time } from "console";
import { useEffect, useState } from "react";
import AssigneeLabelTimeline from "./AssigneeLabelTimeline";
import InitialContent from "./InitialContent";

export type DataCommentProps = {
  data: any;
  timeline?: any;
};

function IssuePageProcessor({ data, timeline }: DataCommentProps) {
  const [avatarData, setAvatarData] = useState();
  useEffect(() => {
    if (timeline.data !== undefined) {
      const dataForAvatar = timeline.data.map((item: any) => item.actor);
      console.log(dataForAvatar);
      setAvatarData(dataForAvatar);
    }
  }, [timeline]);

  const optionData = [];

  if (
    data === undefined ||
    timeline.data === undefined ||
    timeline.data[0].actor === undefined
  ) {
    return <></>;
  } else if (timeline.data !== undefined && timeline.data.length === 0) {
    return <InitialContent data={data} timeline={timeline} />;
  } else {
    return (
      <>
        <InitialContent data={data} />
        {timeline.data.map((item: any) => {
          if (item.event === "commented") {
            return (
              <>
                <InitialContent data={item} />
              </>
            );
          } else {
            const dataForTimeline = [
              {
                actor: item.actor,
                action: item.event,
                date: item.created_at,
                content:
                  item.assignee === undefined ? item.label : item.assignee,
                stateReason: item.event === "closed" ? item.state_reason : null,
              },
            ];
            // const dataForAvatar = item.avatar.map((item: any) => item);
            console.log(typeof item.actor);
            return (
              <>
                <AssigneeLabelTimeline
                  data={dataForTimeline}
                  origin={data}
                  avatarData={[item.actor]}
                />
              </>
            );
          }
        })}
      </>
    );
  }
}

export default IssuePageProcessor;