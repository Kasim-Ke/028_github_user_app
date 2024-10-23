import axios from "axios";

import search from "../assets/icon-search.svg";

import website from "../assets/icon-website.svg";
import twitter from "../assets/icon-twitter.svg";
import location from "../assets/icon-location.svg";
import company from "../assets/icon-company.svg";
import { useState } from "react";

export const Main = () => {
  const [account, setAccount] = useState(null);
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const gitData = () => {
    setError("");
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        setAccount(res.data);
      })
      .catch((error) => {
        console.error("Error fetching GitHub user data:", error);
        setError("User not found");
      });
  };

  return (
    <div className=" lg:max-w-[1440px] md:max-w-[768px] max-w-[375px] min-h-screen mx-auto flex justify-center items-center">
      {/*CONTAINER*/}
      <div className="lg:w-[730px] lg:h-[586px] md:w-[573px] md:h-[648px] w-[327px] h-[667px]   flex flex-col justify-between items-center">
        {/*header and darkmode button and img */}
        <div className="lg:w-[730px] md:w-[573px] w-[327px] h-[38px] flex flex-row justify-between items-center font-bold ">
          <h1 className="lg:text-[28px] text-[26px] ">devfinder</h1>
          <div className="flex justify-around w-[90px] h-[20px] hover:opacity-30  duration-200 cursor-pointer "></div>
        </div>

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
              className="md:mx-2 mx-1 bg-transparent md:text-[18px] text-[13px] md:w-[254px] w-[184px] focus:outline-none"
              type="text"
              placeholder="Search GitHub username…"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update username state
            />
          </div>

          {/* search button  */}
          <div>
            <button
              onClick={gitData}
              className="bg-[#0079FF] md:w-[106px] md:h-[50px] w-[84px] h-[46px] rounded-xl font-bold hover:bg-[#60ABFF] duration-300"
            >
              Search
            </button>
          </div>
          {/* Display error if user not found */}
          {error && <p className="text-red-500">{error}</p>}
        </div>

        {/* INFO */}
        {account && (
          <div className="lg:w-[730px] lg:h-[444px] md:w-[573px] md:h-[481] w-[327px] h-[517px]  bg-[#1E2A47] rounded-2xl flex flex-col lg:items-end items-center justify-between p-10 ">
            {/*  info    DEKTOP SIZE*/}

            <div className=" lg:flex justify-between items-start hidden w-full h-[50px]">
              {/*account img   */}
              <div className="  md:w-[117px] md:h-[117px] w-[70px] h-[70px] bg-white rounded-full md:mr-10">
                <img
                  className="rounded-full"
                  src={account.avatar_url}
                  alt={account.login}
                />
              </div>
              <div className="flex justify-between w-[490px]">
                <div>
                  <h2 className="md:text-[26px] text-[16px] font-bold">
                    {account.name || "No Name"}
                  </h2>
                  <p className="text-[#0079FF]">@{account.login}</p>
                </div>
                <p className="md:text-[15px] text-[13px] pt-2">
                  Joined {new Date(account.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
            {/* account info and img  TABLET & MOBILE SIZE*/}
            <div className=" lg:hidden flex  md:w-[490px] md:h-[117px] w-[234px] h-[70px] justify-start items-center  ">
              {/*account img */}
              <div className="  md:w-[117px] md:h-[117px] w-[70px] h-[70px] bg-white rounded-full md:mr-10 mr-3">
                <img
                  className="rounded-full"
                  src={account.avatar_url}
                  alt={account.login}
                />
              </div>
              {/*account info */}
              <div className="md:w-[176px] md:h-[91px] w-[144px] h-[69px] ">
                <h2 className="md:text-[26px] text-[16px] font-bold">
                  {account.name || "No Name"}
                </h2>
                <p className="text-[#0079FF]">@{account.login}</p>
                <p className="md:text-[15px] text-[13px]">
                  Joined {new Date(account.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
            {/* account BIOI */}
            <div>
              <p className="md:w-[490px] md:h-[50px] md:text-[15px] w-[279px] h-[75px] text-[13px]">
                {account.bio ? account.bio : "This user has no bio"}
              </p>
            </div>
            {/* account stats */}
            <div className="md:w-[490px] w-[279px] lg:h-[85px] h-[85px] bg-[#141D2F] rounded-xl flex justify-around items-center">
              <div className="flex flex-col items-center">
                <p className="lg:text-[18px] md:text-[16px] text-[13px]">
                  Repos
                </p>
                <p className="lg:text-[22px] md:text-[20px] text-[18px] font-bold">
                  {account.public_repos}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="lg:text-[18px] md:text-[16px] text-[13px]">
                  Followers
                </p>
                <p className="lg:text-[22px] md:text-[20px] text-[18px] font-bold">
                  {account.followers}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="lg:text-[18px] md:text-[16px] text-[13px]">
                  Following
                </p>
                <p className="lg:text-[22px] md:text-[20px] text-[18px] font-bold">
                  {account.following}
                </p>
              </div>
            </div>
            {/* account links */}
            <div className="md:w-[490px] md:h-[63px] w-[279px] h-[127px] text-[13px] grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-4 ">
              <div className="flex m-1 ">
                <img
                  className="mr-2 object-cover w-[14px] h-[20px]"
                  src={location}
                  alt="location"
                />
                <p> {account.location || "Not Available"} </p>
              </div>
              <div className="flex m-1">
                <img
                  className="mr-2 object-cover w-[19px] h-[20px]"
                  src={twitter}
                  alt="twitter"
                />
                <p>
                  {account.twitter_username
                    ? `@${account.twitter_username}`
                    : "Not Available"}
                </p>
              </div>
              <div className="flex m-1">
                <img
                  className="mr-2 object-cover w-[20px] h-[20px]"
                  src={website}
                  alt="website"
                />
                <p>{account.blog || "Not Available"}</p>
              </div>
              <div className="flex m-1">
                <img
                  className="mr-2 object-cover w-[20px] h-[20px]"
                  src={company}
                  alt="company"
                />
                <p>{account.company || "Not Available"}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
