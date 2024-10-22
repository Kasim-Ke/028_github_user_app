import sun from "../assets/icon-sun.svg";
import search from "../assets/icon-search.svg";

import locatio from "../assets/icon-location.svg";

//import account_img from "../assets/icon-website.svg";

export const Main = () => {
  return (
    <div className=" lg:max-w-[1440px] md:max-w-[768px] max-w-[375px] min-h-screen mx-auto flex justify-center items-center">
      {/*CONTAINER*/}

      <div className="lg:w-[730px] lg:h-[586px] md:w-[573px] md:h-[648px] w-[327px] h-[667px]   flex flex-col justify-between items-center">
        {/* //////////////////////////////////////////////
         /////////////////////////////////////////////////*/}

        {/*header and darkmode button and img */}
        <div className="lg:w-[730px] md:w-[573px] w-[327px] h-[38px] flex flex-row justify-between items-center font-bold ">
          <h1 className="lg:text-[28px] text-[26px] ">devfinder</h1>
          <div className="flex justify-around w-[90px] h-[20px] hover:opacity-30  duration-200 cursor-pointer ">
            <button className="uppercase text-[13px] ">light</button>
            <img className="  object-cover " src={sun} alt="sun" />
          </div>
        </div>

        {/* //////////////////////////////////////////////
         /////////////////////////////////////////////////*/}

        {/* search bar and button */}
        <div className="lg:w-[730px]  md:w-[573px]  md:h-[69px] w-[327px] h-[60px] rounded-2xl bg-[#1E2A47] flex justify-between items-center pl-3 pr-2 ">
          {/* searchbar */}
          <div className="flex  ">
            <img
              className="object-cover md:w-[24px] md:h-[24px] w-[20px] h-[20px] ml-4"
              src={search}
              alt="search"
            />
            <input
              className="md:mx-2 mx-1 bg-transparent md:text-[18px] text-[13px] md:w-[254px] w-[184px] focus:outline-none "
              type="text"
              placeholder="Search GitHub username…"
            />
          </div>

          {/* search button  */}
          <div>
            <button className="bg-[#0079FF] md:w-[106px] md:h-[50px] w-[84px] h-[46px] rounded-xl font-bold hover:bg-[#60ABFF] duration-300">
              Search
            </button>
          </div>
        </div>

        {/* //////////////////////////////////////////////
         /////////////////////////////////////////////////*/}

        {/* INFO */}

        <div className="lg:w-[730px] lg:h-[444px] md:w-[573px] md:h-[481] w-[327px] h-[517px]  bg-[#1E2A47] rounded-2xl flex flex-col lg:items-end items-center justify-between p-10 ">
          {/*  info    DEKTOP SIZE*/}
          <div className=" lg:flex justify-between items-start hidden w-full ">
            {/*account img   */}
            <div className="  md:w-[117px] md:h-[117px] w-[70px] h-[70px] bg-white rounded-full md:mr-10"></div>
            <div className="flex justify-between w-[490px]">
              <div>
                <h2 className="md:text-[26px] text-[16px] font-bold">
                  The Octocat
                </h2>
                <p className="text-[#0079FF]">@octocat</p>
              </div>
              <p className="md:text-[15px] text-[13px] pt-2">
                Joined 25 Jan 2011
              </p>
            </div>
          </div>

          {/* account info and img  TABLET & MOBILE SIZE*/}
          <div className=" lg:hidden flex  md:w-[490px] md:h-[117px] w-[234px] h-[70px] justify-start items-center  ">
            {/*account img */}
            <div className="  md:w-[117px] md:h-[117px] w-[70px] h-[70px] bg-white rounded-full md:mr-10 mr-3"></div>
            {/*account info */}
            <div className="md:w-[176px] md:h-[91px] w-[144px] h-[69px] ">
              <h2 className="md:text-[26px] text-[16px] font-bold">
                The Octocat
              </h2>
              <p className="text-[#0079FF]">@octocat</p>
              <p className="md:text-[15px] text-[13px]">Joined 25 Jan 2011</p>
            </div>
          </div>

          {/* account BIOI */}
          <div>
            <p className="md:w-[490px] md:h-[50px] md:text-[15px] w-[279px] h-[75px] text-[13px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros.
            </p>
          </div>

          {/* account stats */}
          <div className="md:w-[490px] w-[279px] lg:h-[85px] h-[85px] bg-[#141D2F] rounded-xl flex justify-around items-center">
            <div className="flex flex-col items-center">
              <p className="lg:text-[18px] md:text-[16px] text-[13px]">Repos</p>
              <p className="lg:text-[22px] md:text-[20px] text-[18px] font-bold">
                8
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="lg:text-[18px] md:text-[16px] text-[13px]">
                Followers
              </p>
              <p className="lg:text-[22px] md:text-[20px] text-[18px] font-bold">
                3938
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="lg:text-[18px] md:text-[16px] text-[13px]">
                Following
              </p>
              <p className="lg:text-[22px] md:text-[20px] text-[18px] font-bold">
                9
              </p>
            </div>
          </div>
          {/* account links */}
          <div className="md:w-[490px] md:h-[63px] w-[279px] h-[127px] text-[13px] bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
};
