import TimelineItem from "components/TimelineItem";
import TimelineJson from "json/timeline"


function Timeline() {

  const timelineArray = Object.keys(TimelineJson).map(key => TimelineJson[key]);

  return (
    <>
      <div className="container text-center">
        <div className="position-absolute mt-5 top-0 bottom-0 start-50 translate-middle-x border-start border-5" style={{height: "165vh"}}></div>
        {timelineArray.map((point, index) => (
          <TimelineItem item={point} key={index} side={index % 2 === 0 ? "start" : "end"} />
        ))}
      </div>
    </>
  );
}

export default Timeline;