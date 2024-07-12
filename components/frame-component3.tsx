import type { NextPage } from "next";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-background-colorbgcontainer overflow-hidden flex flex-row items-end justify-center py-[27px] px-5 box-border gap-[343.7px] top-[0] z-[99] sticky max-w-full text-left text-base text-text-colortextplaceholder font-desktop-lg lg:gap-[172px] mq750:gap-[86px] mq450:gap-[43px] ${className}`}
    >
      <img
        className="h-[53px] w-[184.3px] relative"
        loading="lazy"
        alt=""
        src="/layer-1.svg"
      />
      <div className="w-[752px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start gap-[14px] max-w-full">
          <div className="flex-1 rounded-md bg-background-colorbgcontainer box-border overflow-hidden flex flex-row items-start justify-start py-0 px-[7px] gap-[12px] max-w-full text-sm border-[1px] border-solid border-border-colorborder">
            <div className="flex-1 flex flex-row items-start justify-start py-[9px] pr-3 pl-0 gap-[8px]">
              <div className="flex-1 relative leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap">
                Tìm kiếm
              </div>
              <div className="hidden flex-row items-center justify-start py-0 px-1">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/closecircle.svg"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
              <img
                className="w-4 h-4 relative overflow-hidden shrink-0"
                alt=""
                src="/icon--searchoutlined.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-1 pl-0 text-ant-colortext">
            <div className="rounded-borderradius-borderradiuslg flex flex-row items-start justify-start py-0 px-space-padding-padding2">
              <div className="flex flex-row items-start justify-start py-2 px-0 gap-[8px]">
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon--searchoutlined1.svg"
                />
                <a className="[text-decoration:none] relative leading-[24px] text-[inherit] whitespace-nowrap mq1050:hidden">
                  Đăng ký thành viên
                </a>
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon-arrowright.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-3.5 pl-0 text-background-colorbgcontainer">
            <div className="rounded-borderradius-borderradiuslg bg-royalblue flex flex-row items-start justify-start py-0 px-space-padding-padding2">
              <div className="flex flex-row items-start justify-start py-2 px-0 gap-[8px]">
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon--searchoutlined2.svg"
                />
                <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[82px] whitespace-nowrap">
                  Đăng nhập
                </a>
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon-arrowright1.svg"
                />
              </div>
            </div>
          </div>
          <div className="h-10 w-10 shadow-[0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] rounded-borderradius-borderradius32 bg-background-colorbgcontainer flex flex-col items-center justify-center">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/sun.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent3;
