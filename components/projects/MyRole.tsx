import React from "react";

type Props = {};

const MyRole = (props: Props) => {
  return (
    <section className="p2 md:p2lg flex-col">
      <div>
        <p className="smallbold mb-[.62rem]">My Role</p>
        <p className="boldp">Software Engineer</p>
      </div>
      <div>
        <p className="smallbold mb-[.62rem]">Start Date</p>
        <p className="boldp">02/03/2023</p>
      </div>
      <div>
        <p className="smallbold mb-[.62rem]">End Date</p>
        <p className="boldp">02/03/2023</p>
      </div>
    </section>
  );
};

export default MyRole;
