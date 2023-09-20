import React from "react";

type Props = {};

const Description = (props: Props) => {
  return (
    <section className="p4 md:p4lg">
      <p className="projecttext">
        Morent, a cutting-edge car rental application that was developed using
        the MERN stack. The app boasts a dynamic homepage that showcases
        featured vehicles, along with convenient pickup & drop-off location
        options & a comprehensive list of available cars.
        <br />
        <br />
        My team and I also developed the car listing page which offers a search
        bar and various filtering options for users to find the perfect vehicle.
        Additionally, it has a car details page which provides users with
        detailed information along with suggestions for other recommended
        vehicles.
        <br />
        <br />
        Car owners are also able to list their cars for rent through our Add Car
        page, while users can easily track their rented and rented-out cars
        through their profile page. Overall, we have created an intuitive and
        user-friendly MVP version of the platform that will make renting a car a
        breeze.
      </p>
    </section>
  );
};

export default Description;
