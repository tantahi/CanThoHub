import type { NextPage } from "next";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import Card1 from "../components/card1";
import Card from "../components/card";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";

const MacBookPro16: NextPage = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start gap-[1px] leading-[normal] tracking-[normal]">
      <FrameComponent3 />
      <FrameComponent2 />
      <main className="self-stretch flex flex-row items-start justify-center pt-0 pb-[83px] pr-[21px] pl-5 box-border max-w-full lg:pb-[35px] lg:box-border mq750:pb-[23px] mq750:box-border">
        <section className="w-[1283px] flex flex-col items-start justify-start gap-[32px] max-w-full text-left text-sm text-royalblue font-desktop-lg mq750:gap-[16px]">
          <div className="flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
            <div className="relative">
              <span>
                <span className="text-gray-200">{`Trang chủ / `}</span>
                <span>
                  Tin tức / Vũ Ngọc Ánh - Tuyển dụng NodeJS/ReactJS VietNam
                </span>
              </span>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[28px] max-w-full text-black mq1050:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[37px] min-w-[556px] max-w-full mq750:min-w-full mq450:gap-[18px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start min-h-[1275px] max-w-full">
                  <Card1 />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-7 box-border max-w-full mt-[-1246px]">
                    <div className="flex-1 flex flex-col items-start justify-start relative max-w-full">
                      <Card />
                      <img
                        className="w-[52px] h-[52px] absolute !m-[0] top-[26px] left-[25px] rounded-[50%] object-contain z-[2]"
                        loading="lazy"
                        alt=""
                        src="/ellipse-1@2x.png"
                      />
                      <div className="absolute !m-[0] top-[29px] left-[86px] leading-[22px] font-semibold inline-block min-w-[89px] z-[2]">
                        Vũ Ngọc Ánh
                      </div>
                      <div className="w-px h-[29px] absolute !m-[0] top-[26px] left-[184px] box-border z-[2] border-r-[1px] border-solid border-gray-100" />
                      <div className="absolute !m-[0] top-[29px] left-[193px] leading-[22px] font-semibold z-[2]">
                        Tuyển dụng NodeJS/ReactJS VietNam
                      </div>
                      <i className="absolute !m-[0] top-[54px] left-[86px] text-xs leading-[22px] inline-block text-gray-300 min-w-[45px] z-[2]">
                        48 phút
                      </i>
                      <div className="w-[744px] absolute !m-[0] top-[109px] left-[26px] leading-[22px] inline-block max-h-[462px] [word-break:break-word] z-[2]">
                        <p className="m-0">
                          Sẽ là thật tuyệt nếu rơi vào một chiều mưa, em ôm anh
                          thật chặt và hỏi em tìm được việc chưa 
                        </p>
                        <p className="m-0">
                          Nếu chưa thì về team Avada Group nha, chúng mình đang
                          tìm kiếm đồng đội Full Stack Nodejs + Reactjs
                        </p>
                        <p className="m-0"> Thu nhập: 12 - 25 triệu</p>
                        <p className="m-0"> Yêu cầu:</p>
                        <p className="m-0">
                          - Trên 1-2 năm kinh nghiệm làm việc với NodeJS và
                          ReactJS
                        </p>
                        <p className="m-0">
                          - Có kinh nghiệm làm việc với mô hình Agile; làm việc
                          với Database NoSQL: MongoDB hoặc Firestore
                        </p>
                        <p className="m-0">
                          - Có kinh nghiệm với điện toán đám mây, một trong:
                          Google Cloud, Firebase, AWS, kiến trúc hệ thống
                          microservice
                        </p>
                        <p className="m-0">
                          - Khả năng đọc hiểu Tiếng Anh tốt, độ tuổi từ 23 - 30.
                        </p>
                        <p className="m-0"> Quyền lợi:</p>
                        <p className="m-0">
                          - Được làm việc với những công nghệ hot nhất
                        </p>
                        <p className="m-0">- Tham gia xây dựng hệ thống lớn</p>
                        <p className="m-0">
                          - Được cung cấp thiết bị làm việc đầy đủ, hiện đại
                        </p>
                        <p className="m-0">
                          - Được hưởng đầy đủ chế độ phúc lợi như BHXH, thưởng
                          lễ Tết, lương tháng 13, du lịch hàng năm...
                        </p>
                        <p className="m-0">
                          - Phụ cấp gửi xe, phụ cấp đi lại,..
                        </p>
                        <p className="m-0">
                          - Văn phòng làm việc tiện nghi; cung cấp trà, cafe và
                          có tủ đồ ăn uống, bánh kẹo hàng ngày
                        </p>
                        <p className="m-0">
                          - Tham gia các CLB chạy, đá bóng, boardgame, văn nghệ
                          ...
                        </p>
                        <p className="m-0">
                          - Nghỉ T7, CN và nhiều chế độ cực hấp dẫn.
                        </p>
                        <p className="m-0">
                           Địa chỉ làm việc: Trần Phú, Hà Đông, Hà Nội
                        </p>
                        <p className="m-0">{` Ứng tuyển ngay: Gửi CV vào mail anhvn@avadagroup.com (Tiêu đề ghi rõ NodeJS & ReactJS Developer - Họ và tên)`}</p>
                      </div>
                      <img
                        className="w-[541px] h-[454px] absolute !m-[0] bottom-[155px] left-[25px] object-cover z-[2]"
                        loading="lazy"
                        alt=""
                        src="/428709089-6901405359968974-6975471247803418513-n-1@2x.png"
                      />
                      <div className="!m-[0] absolute bottom-[84px] left-[25px] rounded-borderradius-borderradiuslg bg-background-colorbgcontainer flex flex-row items-start justify-start py-0 px-[15px] z-[2] text-base text-royalblue border-[1px] border-solid border-border-colorborder">
                        <div className="flex flex-row items-start justify-start py-2 px-0 gap-[8px]">
                          <img
                            className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                            alt=""
                            src="/icon--searchoutlined1.svg"
                          />
                          <div className="relative leading-[24px]">
                            Xem trên Facebook
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                            <img
                              className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
                              alt=""
                              src="/icon-arrowright.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute !m-[0] bottom-[30px] left-[25px] text-xs leading-[22px] text-gray-300 inline-block min-w-[40px] z-[2]">{`2,394k `}</div>
                      <img
                        className="w-6 h-6 absolute !m-[0] bottom-[29px] left-[70px] overflow-hidden shrink-0 z-[2]"
                        loading="lazy"
                        alt=""
                        src="/icon-like.svg"
                      />
                      <div className="absolute !m-[0] bottom-[30px] left-[107px] text-xs leading-[22px] text-gray-300 inline-block min-w-[38px] z-[2]">{`1,003k `}</div>
                      <img
                        className="w-6 h-6 absolute !m-[0] bottom-[29px] left-[150px] overflow-hidden shrink-0 z-[2]"
                        loading="lazy"
                        alt=""
                        src="/icon-comment.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-[89px] px-7 pb-[47px] box-border relative gap-[28px] max-w-full mq450:pt-[38px] mq450:pb-5 mq450:box-border mq1050:pt-[58px] mq1050:pb-[31px] mq1050:box-border">
                <Card1
                  propAlignSelf="unset"
                  propHeight="100%"
                  propWidth="100%"
                  propMargin="0 !important"
                  propPosition="absolute"
                  propTop="0px"
                  propRight="0px"
                  propBottom="0px"
                  propLeft="0px"
                  propFlex="unset"
                />
                <div className="self-stretch flex flex-col items-start justify-start relative gap-[10px] max-w-full z-[1]">
                  <Card
                    propAlignSelf="stretch"
                    propWidth="unset"
                    propFlex="unset"
                  />
                  <div className="w-[534px] !m-[0] absolute top-[17px] left-[17px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-[13px] min-h-[156px] max-w-full z-[1]">
                    <div className="w-[534px] absolute !m-[0] top-[67px] left-[0px] leading-[22px] inline-block">
                      <p className="m-0">[Trung Kính]- Flutter</p>
                      <ul className="m-0 font-inherit text-inherit pl-[19px]">
                        <li className="mb-0">
                          <span>Từ 1,5- 2 năm kinh nghiệm với Flutter;</span>
                        </li>
                        <li className="mb-0">
                          <span>Từng làm dự án lĩnh vực Education;</span>
                        </li>
                        <li>
                          <span>{`Có kiến thức tốt về OOP, Data Structures, Algorithm, UI/UX; `}</span>
                          <span className="text-royalblue">{`>>>Xem thêm`}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="w-[446px] flex flex-row items-start justify-start max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-start max-w-full">
                        <div className="w-[349px] flex flex-row items-start justify-start gap-[10px] max-w-full mq450:flex-wrap">
                          <img
                            className="h-[54px] w-[54px] relative rounded-[50%] object-cover min-h-[54px]"
                            alt=""
                            src="/ellipse-1-1@2x.png"
                          />
                          <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[185px]">
                            <div className="self-stretch h-7 flex flex-row items-start justify-start gap-[8.5px]">
                              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                                <div className="relative leading-[22px] font-semibold inline-block min-w-[53px]">
                                  Lan Lan
                                </div>
                              </div>
                              <div className="h-[29px] w-px relative box-border border-r-[1px] border-solid border-gray-100" />
                              <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                                <div className="relative leading-[22px] font-semibold">
                                  Tuyển dụng Flutter tại Việt Nam
                                </div>
                              </div>
                            </div>
                            <div className="w-[138px] h-[22px] flex flex-row items-start justify-start relative text-xs text-gray-300">
                              <i className="absolute !m-[0] top-[0px] left-[0px] leading-[22px] inline-block min-w-[104px] whitespace-nowrap">
                                15:30 04/03/2024
                              </i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[194px] h-[194px] relative rounded-3xs bg-border-colorborder hidden z-[2]" />
                  <div className="!m-[0] absolute bottom-[17px] left-[17px] flex flex-row items-start justify-start gap-[13px] z-[1] text-xs text-gray-300">
                    <div className="flex flex-row items-start justify-start gap-[5px]">
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <div className="relative leading-[22px] inline-block min-w-[40px]">{`2,394k `}</div>
                      </div>
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                        alt=""
                        src="/icon-like.svg"
                      />
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[5px]">
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <div className="relative leading-[22px] inline-block min-w-[38px]">{`1,003k `}</div>
                      </div>
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                        alt=""
                        src="/icon-comment.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[228px] relative max-w-full mq450:h-auto mq450:min-h-[228]">
                  <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start gap-[10px] max-w-full h-full z-[1]">
                    <Card
                      propAlignSelf="unset"
                      propWidth="unset"
                      propFlex="1"
                    />
                    <div className="w-[534px] !m-[0] absolute top-[17px] left-[17px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-[13px] min-h-[156px] max-w-full z-[1]">
                      <div className="w-[534px] absolute !m-[0] top-[67px] left-[0px] leading-[22px] inline-block">
                        <span>
                          Bánh canh e bán giao đi từ 6h30 Sáng đến 18h mỗi
                          n.g.à.y (bán onl.i.n.e) Phần 30k Phần có thịt cua 50k
                          Phần đặc biệt: phần bình thường + thịt cua+ càng cua
                          (110k). Lh: 0365693162 or 0356012210, Gần giao miễn
                          phí, xa thu từ 5k- 10k. Đc: Hẻm liên tổ 4-5, Nguyễn
                          Văn Linh, Cần Thơ.
                        </span>
                        <span className="text-royalblue">{`>>>Xem thêm`}</span>
                      </div>
                      <div className="w-[446px] flex flex-row items-start justify-start max-w-full">
                        <div className="flex-1 flex flex-row items-start justify-start max-w-full">
                          <div className="flex flex-row items-start justify-start gap-[10px] max-w-full mq450:flex-wrap">
                            <div className="h-[54px] w-[54px] relative rounded-[50%] bg-firebrick" />
                            <div className="flex flex-col items-start justify-start gap-[4px]">
                              <div className="h-7 flex flex-row items-start justify-start gap-[8.5px]">
                                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                                  <div className="relative leading-[22px] font-semibold inline-block min-w-[83px]">
                                    Hung Thanh
                                  </div>
                                </div>
                                <div className="h-[29px] w-px relative box-border border-r-[1px] border-solid border-gray-100" />
                                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                                  <div className="relative leading-[22px] font-semibold">
                                    Ăn vặt hóng hớt Cần Thơ
                                  </div>
                                </div>
                              </div>
                              <div className="w-[138px] h-[22px] flex flex-row items-start justify-start relative text-xs text-gray-300">
                                <i className="absolute !m-[0] top-[0px] left-[0px] leading-[22px] inline-block min-w-[105px] whitespace-nowrap">
                                  08:34 05/03/2024
                                </i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[194px] w-[194px] relative rounded-3xs bg-border-colorborder hidden z-[2]" />
                    <div className="!m-[0] absolute bottom-[17px] left-[17px] flex flex-row items-start justify-start gap-[30px] z-[1] text-xs text-gray-300">
                      <div className="flex flex-row items-start justify-start gap-[5px]">
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                          <div className="relative leading-[22px] inline-block min-w-[23px]">
                            830
                          </div>
                        </div>
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/icon-like.svg"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[5px]">
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                          <div className="relative leading-[22px] inline-block min-w-[23px]">
                            390
                          </div>
                        </div>
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/icon-comment.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <img
                    className="absolute top-[17px] left-[585px] rounded-3xs w-[194px] h-[194px] object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/rectangle-9@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start relative gap-[10px] max-w-full z-[1]">
                  <Card
                    propAlignSelf="stretch"
                    propWidth="unset"
                    propFlex="unset"
                  />
                  <div className="w-[534px] !m-[0] absolute top-[17px] left-[17px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-[13px] min-h-[156px] max-w-full z-[1]">
                    <div className="w-[534px] absolute !m-[0] top-[67px] left-[0px] leading-[22px] inline-block">
                      <p className="m-0">[Trung Kính]- Flutter</p>
                      <ul className="m-0 font-inherit text-inherit pl-[19px]">
                        <li className="mb-0">
                          <span>Từ 1,5- 2 năm kinh nghiệm với Flutter;</span>
                        </li>
                        <li className="mb-0">
                          <span>Từng làm dự án lĩnh vực Education;</span>
                        </li>
                        <li>
                          <span>{`Có kiến thức tốt về OOP, Data Structures, Algorithm, UI/UX; `}</span>
                          <span className="text-royalblue">{`>>>Xem thêm`}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="w-[446px] flex flex-row items-start justify-start max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-start max-w-full">
                        <div className="w-[349px] flex flex-row items-start justify-start gap-[10px] max-w-full mq450:flex-wrap">
                          <div className="h-[54px] w-[54px] relative rounded-[50%] bg-border-colorborder" />
                          <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[185px]">
                            <div className="self-stretch h-7 flex flex-row items-start justify-start gap-[8.5px]">
                              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                                <div className="relative leading-[22px] font-semibold inline-block min-w-[53px]">
                                  Lan Lan
                                </div>
                              </div>
                              <div className="h-[29px] w-px relative box-border border-r-[1px] border-solid border-gray-100" />
                              <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                                <div className="relative leading-[22px] font-semibold">
                                  Tuyển dụng Flutter tại Việt Nam
                                </div>
                              </div>
                            </div>
                            <div className="w-[138px] h-[22px] flex flex-row items-start justify-start relative text-xs text-gray-300">
                              <i className="absolute !m-[0] top-[0px] left-[0px] leading-[22px] inline-block min-w-[104px] whitespace-nowrap">
                                15:30 04/03/2024
                              </i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[194px] h-[194px] absolute !m-[0] top-[calc(50%_-_97px)] right-[19px] rounded-3xs bg-border-colorborder z-[1]" />
                  <div className="!m-[0] absolute bottom-[17px] left-[17px] flex flex-row items-start justify-start gap-[13px] z-[1] text-xs text-gray-300">
                    <div className="flex flex-row items-start justify-start gap-[5px]">
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <div className="relative leading-[22px] inline-block min-w-[40px]">{`2,394k `}</div>
                      </div>
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                        alt=""
                        src="/icon-like.svg"
                      />
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[5px]">
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <div className="relative leading-[22px] inline-block min-w-[38px]">{`1,003k `}</div>
                      </div>
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                        alt=""
                        src="/icon-comment.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute !m-[0] top-[30px] left-[28px] text-lg leading-[22px] font-semibold inline-block min-w-[85px] z-[1]">
                  Liên quan
                </div>
              </div>
            </div>
            <div className="w-[400px] flex flex-col items-start justify-start gap-[33px] min-w-[400px] max-w-full text-lg text-midnightblue mq750:min-w-full mq450:gap-[16px] mq1050:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start pt-[34px] pb-[97px] pr-7 pl-[30px] box-border relative gap-[26px] max-w-full mq450:pt-5 mq450:pb-[41px] mq450:box-border mq1050:pt-[22px] mq1050:pb-[63px] mq1050:box-border">
                <Card1
                  propAlignSelf="unset"
                  propHeight="100%"
                  propWidth="100%"
                  propMargin="0 !important"
                  propPosition="absolute"
                  propTop="0px"
                  propRight="0px"
                  propBottom="0px"
                  propLeft="0px"
                  propFlex="unset"
                />
                <div className="relative leading-[22px] inline-block min-w-[127px] z-[1]">
                  Sự kiện nổi bật
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full z-[1] text-sm text-black">
                  <FrameComponent1 />
                  <div className="self-stretch flex flex-row items-start justify-start relative gap-[10px] max-w-full">
                    <Card
                      propAlignSelf="unset"
                      propWidth="342px"
                      propFlex="unset"
                    />
                    <div className="w-[310px] absolute !m-[0] right-[15px] bottom-[-12px] leading-[22px] inline-block z-[1]">
                      <span>{`Sáng ngày 27/02, buổi báo cáo dự án thực tập cuối cùng của Fresher khóa K1/2024 đã diễn ra tốt đẹp. Sau 2 tháng học tập và `}</span>
                      <span className="text-royalblue">{`>>> Xem thêm`}</span>
                    </div>
                  </div>
                  <FrameComponent1 />
                  <FrameComponent1 />
                  <FrameComponent1 />
                  <FrameComponent1 />
                  <FrameComponent1 />
                </div>
              </div>
              <div className="self-stretch h-[786px] flex flex-col items-start justify-start relative max-w-full">
                <Card1
                  propAlignSelf="stretch"
                  propHeight="unset"
                  propWidth="unset"
                  propMargin="unset"
                  propPosition="unset"
                  propTop="unset"
                  propRight="unset"
                  propBottom="unset"
                  propLeft="unset"
                  propFlex="1"
                />
                <FrameComponent
                  indicator="/rectangle-11@2x.png"
                  activeIndicator="/rectangle-10@2x.png"
                  inactiveIndicator="/rectangle-12@2x.png"
                  nhngAImCheckInTiCnTh="Những địa điểm check-in tại Cần Thơ"
                />
                <FrameComponent
                  indicator="/rectangle-11-1@2x.png"
                  activeIndicator="/rectangle-10-1@2x.png"
                  inactiveIndicator="/rectangle-12-1@2x.png"
                  nhngAImCheckInTiCnTh="Nhà trọ giá rẻ tại Cần Thơ"
                  propTop="unset"
                  propBottom="32px"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MacBookPro16;
