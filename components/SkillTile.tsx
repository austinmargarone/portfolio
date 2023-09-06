import React from "react";

type Props = {};

const SkillTile = (props: Props) => {
  return (
    // Change bg to fill when implemented
    <div className="h-[3.3rem] w-[3.3rem] shrink-0 rounded-full bg-white1 md:h-[6.25rem] md:w-[6.25rem]">
      <div className="h-[1.65rem] w-[1.65rem] shrink-0 md:h-[3.125rem] md:w-[3.125rem]"></div>
    </div>
  );
};

export default SkillTile;