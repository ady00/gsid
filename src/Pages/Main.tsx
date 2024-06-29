import "../App.css";

import {
  ClockIcon,
  UserIcon,
  GiftIcon,
  UsersIcon,
  ArrowSmRightIcon,
  BookOpenIcon,
  LightningBoltIcon,
  UserGroupIcon,
  LinkIcon,
} from "@heroicons/react/outline";




import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import React from "react";

export default function Main(props) {
  return (
    <div
      className={
        (props.dark ? "dark" : "") +
        " min-h-screen overflow-hidden dark:bg-gray-900 duration-150"
      }
    >
      <Navbar page="main" dark={props.dark} setDark={props.setDark} />
      <Banner />

      <section className="relative duration-150">
        <div className="max-w-7xl mx-auto ">
          <div className="relative z-10 pb-8 bg-white dark:bg-gray-900 duration-150 2xl:pb-20 lg:pb-12 lg:max-w-[44rem] lg:w-full ">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-56 text-white  duration-150 dark:text-gray-900 transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-1 px-4 sm:px-6 lg:px-8 "></div>

            <section className="mt-4 mx-auto max-w-7xl px-4 sm:px-6 2xl:mt-14 lg:mt-6 lg:px-8 py-3">
              <div className="relative">
                <h1 className="tracking-tight font-extrabold text-gray-900 dark:text-transparent  sm:text-6xl sm:pb-3">
                  <span className=" duration-150 tiny:text-[3rem] text-4xl sm:text-6xl inline lg:border-l-[10px] lg:pl-3 border-red-700 dark:border-red-700 bg-clip-text bg-gradient-to-l from-red-600 via-red-700 to-red-700">
                    Stand out {" "}
                  </span>
                  <span className="text-[rem] tiny:text-[3.5rem] sm:text-5xl font-[900] text-transparent bg-clip-text bg-gradient-to-r from-gray-500 dark:from-gray-400 to-gray-500 dark:to-gray-600  inline ">
                   from the crowd.
                  </span>
                  <div className="w-24 absolute h-40 ml-8 overflow-hidden tiny:hidden inline-block">
                    <div className=" h-24 bg-red-700 -rotate-45 transform origin-top-right"></div>
                  </div>
                </h1>
                <div className="border border-b-2 border-t-0 border-x-0 mt-3 mb-6 dark:border-gray-800 duration-150"></div>
                <p className=" duration-150 pb-4 md:pb-0 mt-3 text-gray-500 dark:text-gray-400  z-10 relative sm:mt-5 text-md 2xl:text-lg  sm:mx-auto md:mt-5 lg:mx-0">
                  <div className="w-4 absolute  overflow-hidden   inline-block">
                    <div className=" h-16 bg-red-600 dark:bg-red-700 rotate-45 transform origin-top-left"></div>
                  </div>
                  <div className="ml-6 mb-4  duration-150 lg:mr-6 bg-gray-100 border-2 border-gray-200 dark:border-[#182133] dark:bg-[#1d263a]  rounded-xl p-2">
                    <b>Golden State MUN</b> is a 501c3 accredited nonprofit organization which aims to
                    promote leadership and diplomacy
                    through simulations of the United Nations.{" "}
                  </div>
                  <div className="w-4 absolute  overflow-hidden   inline-block">
                    <div className=" h-16 bg-red-600 dark:bg-red-700 rotate-45 transform origin-top-left"></div>
                  </div>
                  <div className="ml-6  duration-150 lg:mr-6 bg-gray-100 border-2 border-gray-200 dark:border-[#182133] dark:bg-[#1d263a] rounded-xl p-2 ">
                  As a part of the Golden State Independent Delegation, you'll learn not only about leadership and speaking skills, but so much more – all without the usual politics of MUN clubs.


                  </div>
                </p>
                <div className="mt-8 py-2 sm:mt-12 sm:flex ">
                  <div className="sm:mr-4 hover:scale-105 transform duration-150 ease-in-out ">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeW1Il1ySFkMuhtYQ-IaPGzfTSH0s1Pgu8Rt12qE1FodFIuSw/viewform"
                      className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium 
                      rounded-xl shadow text-white bg-gradient-to-r from-red-700 to-red-800 md:py-4 md:text-lg select-none"
                    >
                      Sign up today!{" "}
                      <ArrowSmRightIcon className="h-5 w-5 my-auto ml-2"></ArrowSmRightIcon>
                    </a>
                  </div>
                  
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-900 ">
          <div className="w-11 absolute overflow-hidden lg:hidden inline-block">
            <div className="h-16 bg-white dark:bg-gray-900 rotate-45 transform origin-top-right"></div>
          </div>
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full select-none lg:dark:opacity-60 "
            src="https://www.ri.org//content/uploads/2021/03/GIRA.jpg"
            alt="ppl gamin"
            loading="lazy"
          />

          <div className="absolute left-0 right-0 lg:right-1/2 xl:right-3/4 top-0 bottom-0 inset-0 opacity-[10%] transform-gpu animate-blob1 rounded-full blur-2xl bg-red-900 "></div>
          <div className="w-11 absolute right-0 bottom-0 overflow-hidden lg:hidden inline-block">
            <div className=" h-16  bg-slate-100 dark:bg-[#182133] rotate-45 transform origin-bottom-left"></div>
          </div>
        </div>
      </section>



      <section className="py-12 bg-slate-100 dark:bg-[#182133] relative z-20 duration-150">
        <div className="w-4 absolute ml-[-5px] overflow-hidden lg:hidden inline-block">
          <div className=" h-16 bg-red-700 rotate-45 transform origin-top-left"></div>
        </div>
        <div className="justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="lg:grid grid-cols-4">
            <div>
              <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase ">
                About Us
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl">
                Who are we?
              </p>
              <p className="mt-4 mb-3 max-w-2xl text-xl text-gray-500 dark:text-gray-400 ">
                We are Golden State MUN – a close-knit community tackling real-world issues.
              </p>
            </div>
            
            <div className="mt-8 bg-[#fcfeff] dark:bg-[#222d41] rounded-xl pr-2 py-3 md:ml-5">
              <h2 className="font-bold ml-8 text-xl pb-2 tracking-tight text-gray-900 dark:text-gray-300 sm:text-xl">Network with Peers</h2>

              <p className=" ml-7 max-w-2xl text-[20px] text-gray-500 dark:text-gray-400 pr-2">
              Find new friends from a variety of backgrounds through MUN.
              </p>
            </div>
            <div className="mt-8 bg-[#fcfeff] dark:bg-[#222d41] rounded-xl pr-2 py-3 md:ml-5">
              <h2 className="font-bold ml-8 text-xl pb-2 tracking-tight text-gray-900 dark:text-gray-300 sm:text-xl">Engaging Conferences</h2>

              <p className=" ml-7 max-w-2xl text-[20px] text-gray-500 dark:text-gray-400 pr-2">
              We plan, host, and attend a number of MUN conferences each year for our members.
              </p>
            </div>
            <div className="mt-8 bg-[#fcfeff] dark:bg-[#222d41] rounded-xl pr-2 py-3 md:ml-5">
              <h2 className="font-bold ml-8 text-xl pb-2 tracking-tight text-gray-900 dark:text-gray-300 sm:text-xl">Expand your Knowledge</h2>

              <p className=" ml-7 max-w-2xl text-[20px] text-gray-500 dark:text-gray-400 pr-2">
              Through Model UN, members will learn about the nuanced geopolitics and issues our world faces.
              </p>
            </div>
          </div>
        </div>
      </section>

      



      <section className="md:flex place-content-center">
        <div className="py-12 self-center md:mt-2 mb-2">
          <div className="w-4 absolute ml-[-5px] overflow-hidden lg:hidden inline-block">
            <div className=" h-16 bg-red-700 rotate-45 transform origin-top-left"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="self-center ">
              <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
                Conferences
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-300 ">
                Our History
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto dark:text-gray-400 ">
                <div className="md:mr-12">
                  Golden State MUN was initially started to offer all students the chance to participate in MUN without the burden of school and district rules.
                </div>
              </p>
            </div>
          </div>
        </div>
        <main className="md:flex place-content-center">
          <div className=" self-center max-w-7xl mx-auto md:pt-6 pb-6 px-6 lg:px-8">
            <ol className="relative border-l-2 border-gray-200 dark:border-gray-600 my-6">
              
              <li className="mb-10 ml-4 text-white bg-gray-100 dark:bg-[#1d263a] border-2 border-gray-200 dark:border-[#182133] rounded-xl p-2">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-[0.415rem] border border-white dark:border-gray-900 "></div>
                <time className="mb-1 text-sm font-normal leading-none text-red-700 dark:text-red-600">
                 Conference
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300 ">
                UC Davis Model United Nations Conference
                </h3>
                <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  Typically our last conference of the year, DMUNC is a fun, 2-night trip about 2 hours from Pleasanton. With a variety of double-delegation and crisis committees, members can try their hand at newer forms of MUN!
                </p>
              </li>
              <li className="mb-10 ml-4 text-white bg-gray-100 dark:bg-[#1d263a] border-2 border-gray-200 dark:border-[#182133] rounded-xl p-2">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-[0.415rem] border border-white dark:border-gray-900 "></div>
                <time className="mb-1 text-sm font-normal leading-none text-red-700 dark:text-red-600">
                  Conference
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300 ">
                Golden State Model Nations Conference
                </h3>
                <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  GSMUNC is one of Golden State's flagship conferences held at Granite Bay High School, typically around Febuary. It features a number of veteran and novice committees desiged to cater to all levels of skill!
                </p>
              </li>
              <li className="mb-10 ml-4 text-white bg-gray-100 dark:bg-[#1d263a] border-2 border-gray-200 dark:border-[#182133] rounded-xl p-2">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-[0.415rem] border border-white dark:border-gray-900 "></div>
                <time className="mb-1 text-sm font-normal leading-none text-red-700 dark:text-red-600">
                  Conference
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300 ">
                  BruinMUN
                </h3>
                <p className="mb-2 text-base font-normal text-gray-500  dark:text-gray-400">
                  Our first travel conference of the year, BruinMUN serves as a great introduction for our delegates to a world of more competitive Model United Nations, with some of California's best delegates attending. Sign up today!
                </p>
              </li>
            </ol>
          </div>
        </main>
      </section>

      <div className="bg-red-700">
			<div className="max-w-screen-xl px-4 py-12 mx-auto sm:py-16 sm:px-6 lg:px-8 lg:py-20">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-extrabold leading-9 text-white sm:text-4xl sm:leading-10">
						By The Numbers
					</h2>
				</div>
				<dl className="mt-10 text-center sm:max-w-4xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
					
					<div className="flex flex-col mt-10 sm:mt-0">
						<dt className="order-2 mt-2 text-lg font-medium leading-6 text-amber-400">
							Members
						</dt>
						<dd className="order-1 text-5xl font-extrabold leading-none text-white">
							50+
						</dd>
					</div>
					<div className="flex flex-col mt-10 sm:mt-0">
						<dt className="order-2 mt-2 text-lg font-medium leading-6 text-amber-400">
            Conferences hosted/attended each year
						</dt>
						<dd className="order-1 text-5xl font-extrabold leading-none text-white">
							8 
						</dd>
					</div>
					<div className="flex flex-col mt-10 sm:mt-0">
						<dt className="order-2 mt-2 text-lg font-medium leading-6 text-amber-400">
							Award Winning Club and Community
						</dt>
						<dd className="order-1 text-5xl font-extrabold leading-none text-white">
							1
						</dd>
					</div>
				</dl>
			</div>
		</div>


    <div className="bg-gray-50">
			<div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
				<h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
					Ready to start your MUN journey?
					<br />
					<span className="text-red-600">
						Join GSID Today!
					</span>
				</h2>
				<div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
					<div className="inline-flex rounded-md shadow">
						<a
							href="https://docs.google.com/forms/d/e/1FAIpQLSeW1Il1ySFkMuhtYQ-IaPGzfTSH0s1Pgu8Rt12qE1FodFIuSw/viewform"
							className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring transition duration-150 ease-in-out"
						>
							Join Now
						</a>
					</div>
				</div>
			</div>
		</div>
    </div>
  );
}
