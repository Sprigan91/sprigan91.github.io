import React from "react";

const educationData = [
  {
    title: "Professional license mechatronics and robotics",
    subtitle: "Intelligent mechatronic systems for industry and space",
    date: "September 2020 to September 2021",
    location: "IUT Paris Saclay in Mantes la Jolie",
  },
  {
    title: "BTS digital system option electronics and communication",
    date: "September 2018 to July 2020",
    location: "High School Modeste Leroy, Evreux",
  },
  {
    title: "BAC Science and Technology of Industry and Sustainable Development",
    date: "September 2016 to July 2018",
    location: "High School Les Fontenelles, Louviers",
  },
];

const Education = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref}>
      <div className="text-2xl underline decoration-sky-500 lg:text-5xl font-bold">
        Student
      </div>
      <ul className="list-disc mx-10 my-10 text-lg space-y-7">
        {educationData.map(({ title, subtitle, date, location }, index) => (
          <li key={index} className="space-y-3">
            <div className="font-bold">{title}</div>
            {subtitle && <div>{subtitle}</div>}
            <div>{date}</div>
            <div className="font-light">{location}</div>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Education;
