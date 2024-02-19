import { ArrowsIn } from "phosphor-react";
import React from "react";

const personalInfo = [
  { label: "Birthday", value: "20 February 2000" },
  { label: "Age", value: "23 ans" },
  { label: "City", value: "Leuville sur Orge" },
  { label: "Degree", value: "Professional Licence (Bac +3)" },
  { label: "Email", value: "arnaud.cologan@gmail.com" },
];

const AboutMe = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref} className="mx-10 my-10">
      <div className="text-2xl underline decoration-sky-500 2xl:text-5xl font-bold">
        About
      </div>
      <p className="my-10">
        Determined and dynamic, with the ability to work in a team and good
        experience in the field of maintenance and repairs, I would like to
        apply for the position of field service technician. My training and
        professional background will allow me to fulfill my missions efficiently
        and inventively.
      </p>
      <div className="my-10 text-xl text-gray-800 font-bold">
        Technicien Service center / repairs and maintenance
      </div>
      <div className="grid grid-cols-1 gap-3  sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 2xl:gap-2 text-sm 2xl:text-lg">
        {personalInfo.map(({ label, value }, index) => (
          <div key={index} className="flex items-center space-x-3">
            <ArrowsIn size={32} />
            <b>{label}</b> : {value}
          </div>
        ))}
      </div>
    </div>
  );
});

export default AboutMe;
