import type { NextPage } from "next";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start min-h-[88px] max-w-full text-left text-sm text-ant-colortext font-desktop-lg ${className}`}
    >
      <div className="self-stretch rounded-borderradius-borderradius1 bg-background-colorbgcontainer box-border overflow-hidden flex flex-row items-start justify-start pt-0 px-0 pb-2 max-w-full border-[1px] border-solid border-border-colorsplit">
        <div className="w-[436px] hidden flex-row items-center justify-start py-space-padding-paddingxs px-space-padding-paddingsm box-border gap-[8px] max-w-full mq450:flex-wrap">
          <div className="h-[22px] flex-1 relative leading-[22px] inline-block min-w-[220px] max-w-full">
            Card title
          </div>
          <div className="h-size-sizexl1 rounded-borderradius-borderradius1 flex flex-row items-center justify-center py-0 px-space-padding-padding1 box-border text-primary-colorprimary">
            <div className="self-stretch flex flex-row items-center justify-center gap-[8px]">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/icon-arrowleft.svg"
              />
              <div className="relative leading-[22px]">More</div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/icon-arrowright2.svg"
              />
            </div>
          </div>
        </div>
        <div className="h-[78px] w-[436px] box-border flex flex-col items-start justify-center p-3 gap-[16px] shrink-0 max-w-[129%] border-t-[1px] border-solid border-border-colorsplit">
          <div className="self-stretch overflow-x-auto hidden flex-row items-start justify-start gap-[32px] border-b-[1px] border-solid border-ant-colorsplit">
            <div className="h-[46px] box-border flex flex-row items-center justify-center py-space-padding-paddingsm1 px-0 text-primary-colorprimary border-b-[2px] border-solid border-primary-colorprimary">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/icon--androidoutlined.svg"
              />
              <div className="self-stretch relative leading-[22px]">
                Tab title
              </div>
            </div>
            <div className="h-[46px] flex flex-row items-center justify-center py-space-padding-paddingsm1 px-0 box-border">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/icon--androidoutlined.svg"
              />
              <div className="self-stretch relative leading-[22px]">
                Tab title
              </div>
            </div>
            <div className="h-[46px] flex flex-row items-center justify-center py-space-padding-paddingsm1 px-0 box-border">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/icon--androidoutlined.svg"
              />
              <div className="self-stretch relative leading-[22px]">
                Tab title
              </div>
            </div>
            <div className="h-[46px] hidden flex-row items-center justify-center py-space-padding-paddingsm1 px-0 box-border">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/icon--androidoutlined.svg"
              />
              <div className="self-stretch relative leading-[22px]">
                Tab title
              </div>
            </div>
            <div className="h-[46px] hidden flex-row items-center justify-center py-space-padding-paddingsm1 px-0 box-border">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/icon--androidoutlined.svg"
              />
              <div className="self-stretch relative leading-[22px]">
                Tab title
              </div>
            </div>
            <div className="h-[46px] hidden flex-row items-center justify-center py-3 px-0 box-border gap-[12px]">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/icon--androidoutlined.svg"
              />
              <div className="self-stretch relative leading-[22px] whitespace-nowrap">
                Tab title
              </div>
            </div>
            <div className="h-[46px] hidden flex-row items-center justify-center py-3 px-0 box-border gap-[12px]">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/icon--androidoutlined.svg"
              />
              <div className="self-stretch relative leading-[22px] whitespace-nowrap">
                Tab title
              </div>
            </div>
            <div className="h-[46px] hidden flex-row items-center justify-center py-3 px-0 box-border gap-[12px]">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/icon--androidoutlined.svg"
              />
              <div className="self-stretch relative leading-[22px] whitespace-nowrap">
                Tab title
              </div>
            </div>
            <div className="h-[46px] hidden flex-row items-center justify-center py-3 px-0 box-border gap-[12px]">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/icon--androidoutlined.svg"
              />
              <div className="self-stretch relative leading-[22px] whitespace-nowrap">
                Tab title
              </div>
            </div>
          </div>
          <div className="self-stretch hidden flex-col items-start justify-start text-center text-primary-colorprimary">
            <div className="self-stretch rounded-sm bg-primary-colorprimarybg flex flex-row items-center justify-center py-3.5 px-4 whitespace-nowrap border-[1px] border-dashed border-primary-colorprimaryborder">
              <div className="relative leading-[22px]">Slot component</div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[15px] pl-[17px] mt-[-76px] text-black">
        <div className="flex-1 relative leading-[22px] z-[1]">
          <a
            className="text-[inherit]"
            href={`https://www.facebook.com/CICT.CTU?__cft__[0]=AZWBhhDqCGNF91hFLhubxh4uJU2_iRWRgk40eD5QjEPtxqEHrNb0e0qVQLa0mnVwjTSocKw48REjkOhcuAQOav0BN-F3_Jh468p8IXNOYcHMthN-pytGZdezK43yJ-Qgk65YR89r6EzW7n2nCxDLImSAAGxX64GeqnPEGeYEcv6_eNR8qHRqb5uZmycBkK9byw4&__tn__=-]K-R`}
            target="_blank"
          >
            <span>
              <span className="[text-decoration:underline]">
                Trường Công nghệ Thông tin và Truyền thông - Đại học Cần Thơ
              </span>
            </span>
          </a>
          <span>{` tuyển sinh đại học Chính quy năm 2024 ..... `}</span>
          <span className="text-royalblue">{`>>> Xem thêm`}</span>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
