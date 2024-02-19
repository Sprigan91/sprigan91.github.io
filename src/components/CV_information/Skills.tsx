import React from "react";

const skillData = [
  { label: "Maintenance and repair", percentage: 100 },
  { label: "Physical measurement", percentage: 90 },
  { label: "Handling of laser optical equipment", percentage: 75 },
  { label: "CAO (Altium, 3D experience, SolidWorks)", percentage: 85 },
  { label: "Logiciel: Matlab, LabView, CES Edupack", percentage: 60 },
  { label: "English communication", percentage: 75 },
  { label: "Code (Python, C++, C, React)", percentage: 85 },
];

const Skills = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref}>
      <div className="text-2xl underline decoration-sky-500 lg:text-5xl font-bold">
        Skills
      </div>
      <div className="my-10 space-y-10 text-sm 2xl:text-lg">
        {skillData.map(({ label, percentage }, index) => (
          <div key={index} className="w-full rounded-full h-2.5">
            <div className="font-bold">{label}</div>
            <div
              className="bg-blue-800 h-2.5 rounded-full"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Skills;
