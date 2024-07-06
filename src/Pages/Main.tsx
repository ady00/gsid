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

     

    <section className="py-24 sm:px-6 lg:py-50 relative duration-150 bg-[url(https://cloud-jz4g4s1rx-hack-club-bot.vercel.app/0hero.png)] bg-cover bg-center before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/70 before:via-white/50 before:to-white/30">
        <div className="max-w-7xl mx-auto ">
          <div className="relative z-10 pb-8 duration-150 2xl:pb-20 lg:pb-12 lg:max-w-[44rem] lg:w-full ">
        
            <div className="relative pt-1 px-4 sm:px-6 lg:px-8 "></div>

            <section className="mt-4 mx-auto max-w-7xl px-4 sm:px-6 2xl:mt-14 lg:mt-6 lg:px-8 py-3">


              <div className="relative">
                <h1 className="tracking-tight font-extrabold text-gray-900 dark:text-transparent  sm:text-6xl sm:pb-3">
                <span className=" duration-150 tiny:text-[3rem] text-4xl sm:text-6xl inline lg:border-l-[10px] lg:pl-3 border-red-700 dark:border-red-700 bg-clip-text bg-gradient-to-l from-amber-600 via-red-700 to-amber-700 dark:bg-gradient-to-l dark:from-amber-600 dark:via-red-700 dark:to-amber-700">
                  Stand out {" "}
                </span>
                <span className="text-[rem] tiny:text-[3.5rem] sm:text-5xl font-[900] text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500  inline ">
                  from the crowd.
                </span>
                  <div className="w-24 absolute h-40 ml-8 overflow-hidden tiny:hidden inline-block">
                    <div className=" h-24 bg-red-700 -rotate-45 transform origin-top-right"></div>
                  </div>
                </h1>
                <div className="mt-3 mb-6 duration-150"></div>
                
                <p className=" duration-150 pb-4 md:pb-0 mt-3 text-gray-500 dark:text-gray-400  z-10 relative sm:mt-5 text-md 2xl:text-lg  sm:mx-auto md:mt-5 lg:mx-0">
                
                <div className="w-4 absolute  overflow-hidden inline-block">
                    <div className=" h-16 bg-red-600 dark:bg-red-700 rotate-45 transform origin-top-left"></div>
                  </div>
                
                <i>
                  <p className="ml-6 mb-4 lg:mr-6 duration-150 mt-4 max-w-lg sm:text-xl/relaxed text-gray-900">
                  Golden State MUN is a 501c3 accredited nonprofit organization which aims to promote leadership and 
                  diplomacy through simulations of the United Nations. Any 7th to 12th grader from the Bay Area can join.
                  </p>
                </i>

                  
  
                  

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
                Our Benefits
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-300 ">
                Why Us?
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
                 Training
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300 ">
                One-on-One training with Delegates
                </h3>
                <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  We want to see each and every one of our delegates succeed – and for that reason, we offer coaching sessions with delegates free of charge to prepare for conferences. 
                </p>
              </li>
              <li className="mb-10 ml-4 text-white bg-gray-100 dark:bg-[#1d263a] border-2 border-gray-200 dark:border-[#182133] rounded-xl p-2">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-[0.415rem] border border-white dark:border-gray-900 "></div>
                <time className="mb-1 text-sm font-normal leading-none text-red-700 dark:text-red-600">
                  Flexibility
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300 ">
                Personalized picks for committee assignments
                </h3>
                <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  At GSID, we can ensure you recieve your top conference picks through open communication and planning in advance, ensuring you do your best when conference day rolls around.
                </p>
              </li>
              <li className="mb-10 ml-4 text-white bg-gray-100 dark:bg-[#1d263a] border-2 border-gray-200 dark:border-[#182133] rounded-xl p-2">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-[0.415rem] border border-white dark:border-gray-900 "></div>
                <time className="mb-1 text-sm font-normal leading-none text-red-700 dark:text-red-600">
                  Exploration
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300 ">
                  Travel to out-of-state conferences
                </h3>
                <p className="mb-2 text-base font-normal text-gray-500  dark:text-gray-400">
                    GSID plans a number of travel conferences across California and the greater United States for our members. Join today!
                </p>
              </li>
              <li className="mb-10 ml-4 text-white bg-gray-100 dark:bg-[#1d263a] border-2 border-gray-200 dark:border-[#182133] rounded-xl p-2">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-[0.415rem] border border-white dark:border-gray-900 "></div>
                <time className="mb-1 text-sm font-normal leading-none text-red-700 dark:text-red-600">
                  Connections
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300 ">
                  Make friends and contacts across the globe
                </h3>
                <p className="mb-2 text-base font-normal text-gray-500  dark:text-gray-400">
                    The conferences we host and attend attract top Model UN talent from not only across the Bay, but also the world. 
                </p>
              </li>
              <li className="mb-10 ml-4 text-white bg-gray-100 dark:bg-[#1d263a] border-2 border-gray-200 dark:border-[#182133] rounded-xl p-2">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-[0.415rem] border border-white dark:border-gray-900 "></div>
                <time className="mb-1 text-sm font-normal leading-none text-red-700 dark:text-red-600">
                  Join Now!
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300 ">
                  Any School can Join
                </h3>
                <p className="mb-2 text-base font-normal text-gray-500  dark:text-gray-400">
                    The best part about GSID is our flexibility! Anyone from any school in the Bay is able to join us right now for our next conference. What are you waiting for?
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
							100+
						</dd>
					</div>
					<div className="flex flex-col mt-10 sm:mt-0">
						<dt className="order-2 mt-2 text-lg font-medium leading-6 text-amber-400">
            Conferences hosted/attended each year
						</dt>
						<dd className="order-1 text-5xl font-extrabold leading-none text-white">
							16+ 
						</dd>
					</div>
					<div className="flex flex-col mt-10 sm:mt-0">
						<dt className="order-2 mt-2 text-lg font-medium leading-6 text-amber-400">
							Award Winning Community
						</dt>
						<dd className="order-1 text-5xl font-extrabold leading-none text-white">
							1
						</dd>
					</div>
				</dl>
			</div>
		</div>


    <div className="bg-gray-50 dark:bg-gray-900">
			<div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
				<h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl sm:leading-10">
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
