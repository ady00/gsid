import "../App.css";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Post from "../Components/Post";
import React from "react";

const posts = [
  {
    igLink:
      "/447914482_986508459794488_2643794487169038923_n.jpg",
    src: 'https://www.instagram.com/p/C725G3VxJ9R/?hl=en&img_index=2'
  },
  {
    igLink:
      "/447913591_3413976768894030_2062785795987672785_n.jpg",
      src: 'https://www.instagram.com/p/C725G3VxJ9R/?hl=en&img_index=2'
  },
  {
    igLink:
      "/447777505_484485427480396_732070532044315082_n.jpg",
      src: 'https://www.instagram.com/p/C725G3VxJ9R/?hl=en&img_index=2'
  },
  {
    igLink:
      "/430715508_253173747843260_2654606625603467998_n.jpg",
      src: 'https://www.instagram.com/p/C4Ea8SBrtOM/?hl=en&img_index=1'
  },
  {
    igLink:
      "/430877764_1735915523565511_2856723632016684044_n.jpg",
      src: 'https://www.instagram.com/p/C4Ea8SBrtOM/?hl=en&img_index=1'
  },
  {
    igLink:
      "/430877769_364620366531771_1629834409662492120_n.jpg",
      src: 'https://www.instagram.com/p/C4Ea8SBrtOM/?hl=en&img_index=1'
  },

  // MAMUNC

  {
    igLink:
      "/401660109_825664086234838_8404330497511541656_n.jpg",
      src: 'https://www.instagram.com/p/CzpJJxCP0jD/?hl=en&img_index=1'
  },
  {
    igLink:
      "/401732427_244538801692686_4289343022779124103_n.jpg",
      src: 'https://www.instagram.com/p/CzpJJxCP0jD/?hl=en&img_index=1'
  },
  {
    igLink:
      "/401871331_199843249834196_3271222161688120851_n.jpg",
      src: 'https://www.instagram.com/p/CzpJJxCP0jD/?hl=en&img_index=1'
  },

];
export default function Outreach(props) {
  return (
    <div
      className={
        (props.dark ? "dark" : "") +
        "bg-slate-100 dark:bg-gray-900 min-h-screen duration-150"
      }
    >
      <Navbar page="Outreach" dark={props.dark} setDark={props.setDark} />
      <Banner />
      <header className="drop-shadow-lg bg-white dark:bg-[#182133] duration-150">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 dark:text-white ">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Outreach/Photo Gallery
          </h1>
          Follow us at <a 
            href="https://www.instagram.com/goldenstatemun" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 dark:text-blue-300"
            >
            @goldenstatemun
            </a>!
        </div>
      </header>
      <main className="">
        <div className="max-w-7xl mx-auto py-3 pt-7 pb-7 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0 ">
            <div className=" grid gap-y-8 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 mt-4 mb-6">
              {posts.map((posts) => (
                <a>
                    <Post igLink={posts.igLink} src = {posts.src}/>
                </a>
              ))}
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}