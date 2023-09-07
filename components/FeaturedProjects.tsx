import React from "react";
import FeatProjectsCard from "./FeatProjectsCard";

type Props = {};

const FeaturedProjects = (props: Props) => {
  return (
    <section>
      <div>
        <div>
          <h2>Featured Projects</h2>
          <div>
            <FeatProjectsCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
