import React from "react";

type Props = { my_role: string; start_date: string; end_date: string };

const MyRole = (props: Props) => {
  return (
    <section className="p2 md:p2lg flex-col md:shrink-0 md:flex-row md:content-center md:justify-between">
      <div>
        <p className="md:boldbody smallbold mb-[.62rem] dark:text-slate">
          My Role
        </p>
        <p className="md:boldbase boldp dark:text-white">{props.my_role}</p>
      </div>
      <div>
        <p className="md:boldbody smallbold mb-[.62rem] dark:text-slate">
          Start Date
        </p>
        <p className="md:boldbase boldp dark:text-white">{props.start_date}</p>
      </div>
      <div>
        <p className="md:boldbody smallbold mb-[.62rem] dark:text-slate">
          End Date
        </p>
        <p className="md:boldbase boldp dark:text-white">{props.end_date}</p>
      </div>
    </section>
  );
};

export default MyRole;
