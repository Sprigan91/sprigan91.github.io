import React from "react";

const experienceData = [
  {
    title: "After Sales Service",
    company: "VAISALA SAS Saclay",
    date: "September 2020 to present",
    responsibilities: [
      "Repair and maintain Lidar systems",
      "Train customers and distributors",
      "Contribute to product and process improvement",
    ],
  },
  {
    title: "Internship as a mechatronic technician at latmos",
    company: "Latmos Montigny-le-Bretonneux",
    date: "January 2020 to June 2020",
    responsibilities: [
      "Study of a satellite and its sensors",
      "Initiation to Python, mathlab, web",
      "Development of the end of year project (Mini Mars Rover)",
    ],
  },
  {
    title: "After-sales service technician apprenticeship at Vaisala",
    company: "VAISALA SAS Saclay",
    date: "January 2020 to June 2020",
    responsibilities: [
      "Acquisition of knowledge about LIDAR and its applications",
      "Repair and maintain Lidar systems",
      "Windcube V2.0 process update",
    ],
  },
];

const Experience = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref} className="w-full">
      <div className="text-2xl underline decoration-sky-500 lg:text-5xl font-bold">
        Professional Experience
      </div>
      <div className="my-10 2xl:ml-10 space-y-14 2xl:w-full xl:w-10/12 lg:w-11/12 sm:w-12/12">
        {experienceData.map((experience, index) => (
          <div key={index} className="my-5 shadow-md">
            <div className="ml-3 space-y-5">
              <div className="flex font-bold 2xl:text-xl">
                {experience.title}
                <div className="ml-auto mr-2 font-medium">{experience.company}</div>
              </div>
              <div className="font-light">{experience.date}</div>
              <ul className="space-y-2">
                {experience.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Experience;
