import React from "react";

type Props = { description: string };

const Description = (props: Props) => {
  return (
    <section className="p4 md:p4lg">
      <p className="projecttext md:regp dark:text-white1">
        {/* {props.description} */}
      </p>
    </section>
  );
};

export default Description;
