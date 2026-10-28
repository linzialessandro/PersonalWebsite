import { timelineRole } from "../lib/cvDisplay";

const Timeline = ({ items }) => (
  <div className="timeline">
    {items.map((item) => (
      <article key={`${item.org}-${item.years}`} className="timeline-item">
        <p className="timeline-years">{item.years}</p>
        <div>
          <h3 className="timeline-org">{item.org}</h3>
          <p className="timeline-role">{timelineRole(item)}</p>
          {item.unit ? <p className="timeline-role">{item.unit}</p> : null}
        </div>
      </article>
    ))}
  </div>
);

export default Timeline;
