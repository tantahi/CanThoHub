import type { NextPage } from "next";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[31px] box-border max-w-full text-left text-base text-background-colorbgcontainer font-desktop-lg ${className}`}
    >
      <div className="flex-1 bg-royalblue flex flex-row items-start justify-start py-0 px-56 box-border max-w-full mq750:pl-14 mq750:pr-14 mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1050:pl-28 mq1050:pr-28 mq1050:box-border">
        <div className="self-stretch w-[1728px] relative bg-royalblue hidden max-w-full" />
        <div className="flex flex-row items-start justify-start gap-[0.3px] max-w-full z-[1] mq750:flex-wrap">
          <div className="bg-midnightblue flex flex-row items-start justify-start pt-[13px] px-[37px] pb-3 whitespace-nowrap">
            <div className="h-11 w-[142px] relative bg-midnightblue hidden" />
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[67px] z-[1]">
              TIN TỨC
            </a>
          </div>
          <div className="bg-royalblue flex flex-row items-start justify-start pt-[13px] px-[35px] pb-3 whitespace-nowrap">
            <div className="h-11 w-[142px] relative bg-royalblue hidden" />
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[72px] z-[1]">
              NHÀ TRỌ
            </a>
          </div>
          <div className="bg-royalblue flex flex-row items-start justify-start pt-[13px] px-[33px] pb-3 whitespace-nowrap">
            <div className="h-11 w-[142px] relative bg-royalblue hidden" />
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[76px] z-[1]">
              VIỆC LÀM
            </a>
          </div>
          <div className="bg-royalblue flex flex-row items-start justify-start pt-[13px] px-[33px] pb-3 whitespace-nowrap">
            <div className="h-11 w-[142px] relative bg-royalblue hidden" />
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[76px] z-[1]">
              ĂN UỐNG
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
