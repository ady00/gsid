import "../App.css";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import {
  UserGroupIcon,
  VariableIcon,
  LocationMarkerIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  GlobeAltIcon
  
  
} from "@heroicons/react/outline";
import React, { useEffect, useCallback } from "react";

import conferencesData from "../Components/ConferencesData";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AutoHeight from "embla-carousel-auto-height";
// import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";



export default function Publications(props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(),
    AutoHeight(),
    // WheelGesturesPlugin(),
  ]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div
      className={
        (props.dark ? "dark" : "") +
        " min-h-screen bg-slate-100 dark:bg-gray-900 duration-150 "
      }
    >
      <Navbar page="meme" dark={props.dark} setDark={props.setDark} />

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="md:grid-cols-6 flex-col flex md:grid gap-6">
          <div className="drop-shadow-lg md:col-span-2 flex justify-end items-end border border-gray-200 dark:border-gray-800 rounded-xl bg-center bg-cover bg-[url('/public/meme/hero.jpg')]">
            <img
              src="/favicon.png"
              className="w-12 mt-36 md:mt-0 sm:w-24 m-4"
              alt="Logo"
            />
          </div>
          <div className="flex flex-col md:col-span-4 text-gray-900 dark:text-gray-200 gap-4">
            <div className="inline font-extrabold text-3xl lg:border-l-[10px] lg:pl-3 border-red-600 dark:border-red-600">
              Conferences
            </div>
            <div className="border border-b-2 border-t-0 border-x-0  dark:border-gray-800 duration-150"></div>
            <div className="relative">
              <div className="w-4 absolute  overflow-hidden   inline-block">
                <div className="h-16 bg-red-600 dark:bg-red-700 rotate-45 transform origin-top-left"></div>
              </div>
              <div className="ml-6 flex gap-4 text-gray-800 lg:items-center dark:text-gray-200 border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-center p-4 h-16 w-20 bg-gradient-to-br from-red-500 to-red-600 rounded-lg text-white">
                  <UserGroupIcon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div>
                  Model UN is characterized by its conferences, allowing delegates to apply the knowledge they have learned in a practical setting, with the chance to win awards and meet new people.
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-4 absolute  overflow-hidden   inline-block">
                <div className=" h-16 bg-red-600 dark:bg-red-700 rotate-45 transform origin-top-left"></div>
              </div>
              <div className="ml-6 flex gap-4 text-gray-800 lg:items-center dark:text-gray-200 border-2  border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-center p-4 h-16 w-20 bg-gradient-to-br from-red-500 to-red-600 rounded-lg text-white">
                  <GlobeAltIcon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div>
                  Some conferences will allow delegates to travel faraway, and sometimes even overnight (think of it as an academic vacation)! 
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-4 absolute  overflow-hidden   inline-block">
                <div className=" h-16 bg-red-600 dark:bg-red-700 rotate-45 transform origin-top-left"></div>
              </div>
              <div className="ml-6 flex gap-4 text-gray-800 lg:items-center dark:text-gray-200 border-2  border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-center p-4 h-16 w-20 bg-gradient-to-br from-red-500 to-red-600 rounded-lg text-white">
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>

                </div>
                <div>
                  At Golden State MUN, we also host a number of our own conferences – members of Golden State can volunteer with us as chairs and crisis staff, and grow their knowledge of Model UN. 
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 text-gray-800 dark:text-gray-400 border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 rounded-xl p-4 flex">
            <div className="w-1/3">
              <img src="https://images.squarespace-cdn.com/content/v1/60cad55aac824c1fa4ba0730/224a2185-de80-4dbb-9870-36a8178e03b6/AdobeStock_280639194_UCLA_Editorial_Use_Only.jpeg" alt="UCLA Campus" className="rounded-xl w-full h-auto" />
            </div>
            <div className="w-2/3 pl-4 text-gray-800 dark:text-gray-200">
              <p className="font-extrabold text-3xl pb-2">BruinMUN</p>
              <p className="mb-3 text-lg">
                <i>November 8-10, 2024 | UCLA Campus<br></br></i><br></br>
                BruinMUN is our first travel conference of the year, hosted by UCLA. The conference will provide veteran delegates large committees to succeed in and give novice delegates a taste of competitive Model UN. 
              </p>
              Sign up today! <u><a href = "https://bit.ly/BruinGS">https://bit.ly/BruinGS</a></u>
            </div>
          </div>


          <div className="md:col-span-6 text-gray-800 dark:text-gray-400 border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 rounded-xl p-4 flex">
            <div className="w-1/3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Granite_Bay_High_School_%282006%29.jpg" alt="UCLA Campus" className="rounded-xl w-full h-auto" />
            </div>
            <div className="w-2/3 pl-4 text-gray-800 dark:text-gray-200">
              <p className="font-extrabold text-3xl pb-2">Golden State MUN Conference</p>
              <p className="mb-3 text-lg">
                <i> February 2025 | Granite Bay High School<br></br></i><br></br>
                  GSMUNC is co-hosted by yours truly, Golden State Independent, alongside Granite Bay MUN. It will feature a number of committees for both beginners and MUN experts, with a variety of crisis and GAs to suit everyone. 
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}