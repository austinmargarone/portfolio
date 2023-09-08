import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="ml-[55rem] flex">
      <div className="contact relative h-[19.4375rem] w-[21.5625rem]">
        <div>
          <div className="absolute bottom-[.74rem] left-[20%] h-[22.67375rem] w-[10.53019rem]">
            <Image src="/Ellipse.svg" width={200} height={200} alt="Ellipse" />
          </div>
          <div className="absolute left-[25%] z-10 h-[22.67375rem] w-[10.53019rem]">
            <Image src="/Ellipse1.svg" width={168} height={362} alt="Ellipse" />
          </div>
          <div className="absolute left-[25%] top-[25%] h-[9.1875rem] w-[9.8125rem]">
            <Image
              src="/Rectangle3.svg"
              width={157}
              height={147}
              alt="Ellipse"
            />
          </div>
          <div className="absolute right-[1rem] top-[50%] h-[9.625rem] w-[10.53019rem]">
            <Image
              src="/Rectangle2.svg"
              width={166}
              height={154}
              alt="Ellipse"
            />
          </div>
          <div className="absolute  h-[8.5rem] w-[9.0625rem]">
            <Image
              src="/Rectangle1.svg"
              width={145}
              height={136}
              alt="Ellipse"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
