import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  className?: string;
  indicator?: string;
  activeIndicator?: string;
  inactiveIndicator?: string;
  nhngAImCheckInTiCnTh?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propBottom?: CSSProperties["bottom"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  indicator,
  activeIndicator,
  inactiveIndicator,
  nhngAImCheckInTiCnTh,
  propTop,
  propBottom,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  return (
    <div
      className={`w-[348px] !m-[0] absolute top-[32px] right-[25px] rounded-3xs overflow-hidden flex flex-row items-start justify-start max-w-full z-[1] text-left text-base text-background-colorbgcontainer font-desktop-lg ${className}`}
      style={frameDivStyle}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-border-colorborder" />
      <div className="flex-1 flex flex-col items-start justify-start max-w-full z-[1]">
        <div className="self-stretch h-[348px] flex flex-row flex-wrap items-start justify-start relative">
          <img
            className="h-[174px] w-[174px] absolute !m-[0] top-[0px] left-[0px] object-cover"
            loading="lazy"
            alt=""
            src={indicator}
          />
          <img
            className="h-[174px] w-[174px] absolute !m-[0] top-[0px] left-[174px] object-cover"
            loading="lazy"
            alt=""
            src={activeIndicator}
          />
          <img
            className="h-[174px] w-[348px] absolute !m-[0] top-[174px] left-[0px] object-cover"
            loading="lazy"
            alt=""
            src={inactiveIndicator}
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-[139px] px-[9px] pb-[11px] relative whitespace-nowrap z-[1] mt-[-174px]">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#000)]" />
          <div className="relative leading-[24px] z-[1]">
            {nhngAImCheckInTiCnTh}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
