import { Timeline } from "../components/Timeline";
import { education } from "../constants";

function Education() {
  const timelineItems = education.map((item) => ({
    title: item.date,
    content: (
      <div className=" border border-gray-800 rounded-3xl p-6 md:p-8 text-white shadow-lg">
        <h4 className="text-lg md:text-2xl font-bold mb-1">{item.title}</h4>
        <p className="text-blue-400 text-sm font-medium mb-3">{item.organization}</p>
        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
      </div>
    ),
  }));

  return (
    <section id="education" className=" min-h-screen scroll-mt-16">
      <Timeline
        data={timelineItems}
        title="My Education"
        subtitle="Here is a timeline structured specifically for a 3rd-year university student, highlighting your academic progression alongside your hands-on full-stack development journey"
      />
    </section>
  );
}

export default Education;
