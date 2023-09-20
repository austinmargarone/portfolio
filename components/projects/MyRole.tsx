import React from "react";

type Props = {};

const MyRole = (props: Props) => {
  return (
    <section className="p2 md:p2lg flex-col md:shrink-0 md:flex-row md:content-center md:justify-between">
      <div>
        <p className="md:boldbody smallbold mb-[.62rem]">My Role</p>
        <p className="md:boldbase boldp">Software Engineer</p>
      </div>
      <div>
        <p className="md:boldbody smallbold mb-[.62rem]">Start Date</p>
        <p className="md:boldbase boldp">02/03/2023</p>
      </div>
      <div>
        <p className="md:boldbody smallbold mb-[.62rem]">End Date</p>
        <p className="md:boldbase boldp">02/03/2023</p>
      </div>
    </section>
  );
};

export default MyRole;
