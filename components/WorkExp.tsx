import React from "react";
import WorkExpCard from "./WorkExpCard";

type Props = {};

const WorkExp = (props: Props) => {
  return (
    <section>
      <div>
        <div></div>
        <div>
          <WorkExpCard />
          <WorkExpCard />
          <WorkExpCard />
          <WorkExpCard />
        </div>
      </div>
    </section>
  );
};

export default WorkExp;
