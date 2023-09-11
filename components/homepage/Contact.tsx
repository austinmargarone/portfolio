import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="flex">
      {/* Mobile */}
      <div className="contact relative mx-auto flex h-[19.4375rem] w-[21.5625rem] md:hidden">
        <div>
          <div className=" absolute bottom-[.74rem] left-[20%]">
            <Image src="/Ellipse.svg" width={200} height={200} alt="Ellipse" />
          </div>
          <div className="absolute left-[25%] h-[22.67375rem] w-[10.53019rem]">
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
          <div className="absolute left-[70%] top-[50%] h-[9.625rem] w-[10.53019rem]">
            <Image
              src="/Rectangle2.svg"
              width={166}
              height={154}
              alt="Ellipse"
            />
          </div>
          <div className="absolute bottom-[9%] left-[70%] -z-10 h-[8.5rem] w-[9.0625rem]">
            <Image
              src="/Rectangle1.svg"
              width={145}
              height={136}
              alt="Ellipse"
            />
          </div>
        </div>
        <div className="absolute">
          <h4 className="contacttext mx-[1rem] mb-[1rem] mt-[4.87rem]">
            Have a project in mind that requires technical expertise?
          </h4>
          <button className="contactbtn mx-auto">
            <p className="contactbtntext">Get in Touch with Me</p>
            <Image src="/Arrow2.svg" width={14} height={0} alt="Ellipse" />
          </button>
        </div>
      </div>
      {/* Desktop */}
      <div className="mx-auto hidden md:block">
        <div className="contact relative flex h-[20.625rem] w-[79.375rem] shrink-0">
          <div>
            <div className="absolute h-[22.67375rem] w-[10.53019rem] shrink-0 opacity-[.01rem]">
              <Image
                src="/Ellipse2.svg"
                width={168}
                height={362}
                alt="Ellipse"
              />
            </div>
            <div className="absolute left-[42.81rem] top-[10.14rem] shrink-0 opacity-[.01rem]">
              <Image
                src="/Ellipse4.svg"
                width={212}
                height={114}
                alt="Ellipse"
              />
            </div>
            <div className="absolute left-[56.12rem] top-[.1rem] shrink-0 opacity-[.02rem]">
              <Image
                src="/Ellipse4.svg"
                width={180}
                height={97}
                alt="Ellipse"
              />
            </div>
            <div className="absolute left-[56.08rem] top-[6.15rem] h-[] shrink-0 opacity-[.01rem]">
              <Image
                src="/Rectangle5.svg"
                width={181}
                height={181}
                alt="Rectangle"
              />
            </div>
            <div className="absolute bottom-[0rem] left-[56.08rem] h-[] shrink-0 opacity-[.07rem]">
              <Image
                src="/Rectangle4.svg"
                width={181}
                height={181}
                alt="Rectangle"
              />
            </div>
            <div className="absolute right-[0rem] top-[-1.45rem] h-[] shrink-0 opacity-[.02rem]">
              <Image
                src="/Rectangle6.svg"
                width={191}
                height={205}
                alt="Rectangle"
              />
            </div>
            <div className="absolute right-[0rem] top-[-1.45rem] h-[] shrink-0 opacity-[.02rem]">
              <Image
                src="/Rectangle7.svg"
                width={191}
                height={205}
                alt="Rectangle"
              />
            </div>
            <div className="absolute bottom-[-1.45rem] right-[0rem] h-[] shrink-0 opacity-[.07rem]">
              <Image
                src="/Ellipse3.svg"
                width={198}
                height={285}
                alt="Rectangle"
              />
            </div>
          </div>
          <div className="absolute flex">
            <h2 className="ml-[4.66rem] mt-[5.19rem] w-[32.5rem] text-left">
              Have a project in mind that requires technical expertise?
            </h2>
            <div className="ml-[17.62rem] mt-[10.69rem] flex">
              <button className="contactbtnlg flex">
                <p className="boldbody text-white">Get in Touch with Me</p>
                <Image src="/Arrow2.svg" width={16} height={0} alt="Ellipse" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
