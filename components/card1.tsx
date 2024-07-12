import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Card1Type = {
  className?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propMargin?: CSSProperties["margin"];
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propRight?: CSSProperties["right"];
  propBottom?: CSSProperties["bottom"];
  propLeft?: CSSProperties["left"];
  propFlex?: CSSProperties["flex"];
};

const Card1: NextPage<Card1Type> = ({
  className = "",
  propAlignSelf,
  propHeight,
  propWidth,
  propMargin,
  propPosition,
  propTop,
  propRight,
  propBottom,
  propLeft,
  propFlex,
}) => {
  const cardStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      height: propHeight,
      width: propWidth,
      margin: propMargin,
      position: propPosition,
      top: propTop,
      right: propRight,
      bottom: propBottom,
      left: propLeft,
      flex: propFlex,
    };
  }, [
    propAlignSelf,
    propHeight,
    propWidth,
    propMargin,
    propPosition,
    propTop,
    propRight,
    propBottom,
    propLeft,
    propFlex,
  ]);

  return (
    <div
      className={`self-stretch h-[1275px] rounded-lg bg-background-colorbgcontainer box-border overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-full text-left text-sm text-ant-colortext font-desktop-lg border-[1px] border-solid border-border-colorborder ${className}`}
      style={cardStyle}
    >
      <div className="w-[436px] hidden flex-row items-center justify-start py-space-padding-paddingxs px-space-padding-paddingsm box-border gap-[8px] max-w-full">
        <div className="h-[22px] w-[338px] relative leading-[22px] hidden max-w-full">
          Card title
        </div>
        <div className="h-size-sizexl rounded-borderradius-borderradius hidden flex-row items-center justify-center py-0 px-space-padding-padding box-border text-primary-colorprimary">
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
      <div className="w-[436px] box-border hidden flex-col items-start justify-center p-3 gap-[16px] max-w-full border-t-[1px] border-solid border-border-colorsplit">
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
  );
};

export default Card1;
