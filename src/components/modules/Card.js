import { Progress, TagCourse } from "components/ui";
import React from "react";

const Card = ({ module }) => {
  return (
    <div className="bg-grey-light flex-col flex justify-between relative w-72 h-56 mr-6 px-8 py-6 rounded-3xl font-raleway">
      <div>
        <div className="flex">
          <TagCourse
            type={module._exercices.length === 0 ? "error" : "primary"}
            title={`${module._exercices.length} cours`}
          />
        </div>
        <div className="text-xl ml-1 mt-5">{module.title}</div>
      </div>

      <Progress total={module._exercices.length} current={0} />
    </div>
  );
};

export default Card;
