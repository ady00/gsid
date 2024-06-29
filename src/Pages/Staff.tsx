import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Profile from "../Components/Profile";
import React from "react";

const members = [
  
  {
    id: 1,
    name: "ABCD",
    href: "#",
    imageSrc: "https://media.sketchfab.com/models/efa8ea5f84ff407ab5e29e695408ad2c/thumbnails/098a93952b5147d08eaf5a323429d034/2fcb246f18fe4863a298fdf89603ac72.jpeg",
    imageAlt: "Person",
    role: "XYZ Role",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio lorem, condimentum eget finibus in, bibendum in libero. Nullam convallis elit a tempor lobortis. Donec tincidunt, neque vel hendrerit viverra, nulla enim maximus lacus, a tincidunt mauris sapien non urna. Cras ipsum dolor, convallis eget egestas aliquam, interdum eu nisi. Donec placerat libero eros, quis scelerisque arcu lobortis ut. Vivamus euismod dictum nibh vitae porta. Proin placerat nunc sit amet erat convallis rutrum. Nullam vehicula pharetra arcu, at blandit ante ullamcorper ac. Quisque pulvinar sem sed augue aliquet semper eget et lorem. ",
  },
  {
    id: 2,
    name: "ABCD",
    href: "#",
    imageSrc: "https://media.sketchfab.com/models/efa8ea5f84ff407ab5e29e695408ad2c/thumbnails/098a93952b5147d08eaf5a323429d034/2fcb246f18fe4863a298fdf89603ac72.jpeg",
    imageAlt: "Person",
    role: "XYZ Role",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio lorem, condimentum eget finibus in, bibendum in libero. Nullam convallis elit a tempor lobortis. Donec tincidunt, neque vel hendrerit viverra, nulla enim maximus lacus, a tincidunt mauris sapien non urna. Cras ipsum dolor, convallis eget egestas aliquam, interdum eu nisi. Donec placerat libero eros, quis scelerisque arcu lobortis ut. Vivamus euismod dictum nibh vitae porta. Proin placerat nunc sit amet erat convallis rutrum. Nullam vehicula pharetra arcu, at blandit ante ullamcorper ac. Quisque pulvinar sem sed augue aliquet semper eget et lorem. ",
  },
  {
    id: 3,
    name: "ABCD",
    href: "#",
    imageSrc: "https://media.sketchfab.com/models/efa8ea5f84ff407ab5e29e695408ad2c/thumbnails/098a93952b5147d08eaf5a323429d034/2fcb246f18fe4863a298fdf89603ac72.jpeg",
    imageAlt: "Person",
    role: "XYZ Role",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio lorem, condimentum eget finibus in, bibendum in libero. Nullam convallis elit a tempor lobortis. Donec tincidunt, neque vel hendrerit viverra, nulla enim maximus lacus, a tincidunt mauris sapien non urna. Cras ipsum dolor, convallis eget egestas aliquam, interdum eu nisi. Donec placerat libero eros, quis scelerisque arcu lobortis ut. Vivamus euismod dictum nibh vitae porta. Proin placerat nunc sit amet erat convallis rutrum. Nullam vehicula pharetra arcu, at blandit ante ullamcorper ac. Quisque pulvinar sem sed augue aliquet semper eget et lorem. ",
  },
  {
    id: 4,
    name: "ABCD",
    href: "#",
    imageSrc: "https://media.sketchfab.com/models/efa8ea5f84ff407ab5e29e695408ad2c/thumbnails/098a93952b5147d08eaf5a323429d034/2fcb246f18fe4863a298fdf89603ac72.jpeg",
    imageAlt: "Person",
    role: "XYZ Role",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio lorem, condimentum eget finibus in, bibendum in libero. Nullam convallis elit a tempor lobortis. Donec tincidunt, neque vel hendrerit viverra, nulla enim maximus lacus, a tincidunt mauris sapien non urna. Cras ipsum dolor, convallis eget egestas aliquam, interdum eu nisi. Donec placerat libero eros, quis scelerisque arcu lobortis ut. Vivamus euismod dictum nibh vitae porta. Proin placerat nunc sit amet erat convallis rutrum. Nullam vehicula pharetra arcu, at blandit ante ullamcorper ac. Quisque pulvinar sem sed augue aliquet semper eget et lorem. ",
  },
  {
    id: 5,
    name: "ABCD",
    href: "#",
    imageSrc: "https://media.sketchfab.com/models/efa8ea5f84ff407ab5e29e695408ad2c/thumbnails/098a93952b5147d08eaf5a323429d034/2fcb246f18fe4863a298fdf89603ac72.jpeg",
    imageAlt: "Person",
    role: "XYZ Role",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio lorem, condimentum eget finibus in, bibendum in libero. Nullam convallis elit a tempor lobortis. Donec tincidunt, neque vel hendrerit viverra, nulla enim maximus lacus, a tincidunt mauris sapien non urna. Cras ipsum dolor, convallis eget egestas aliquam, interdum eu nisi. Donec placerat libero eros, quis scelerisque arcu lobortis ut. Vivamus euismod dictum nibh vitae porta. Proin placerat nunc sit amet erat convallis rutrum. Nullam vehicula pharetra arcu, at blandit ante ullamcorper ac. Quisque pulvinar sem sed augue aliquet semper eget et lorem. ",
  },
  {
    id: 6,
    name: "ABCD",
    href: "#",
    imageSrc: "https://media.sketchfab.com/models/efa8ea5f84ff407ab5e29e695408ad2c/thumbnails/098a93952b5147d08eaf5a323429d034/2fcb246f18fe4863a298fdf89603ac72.jpeg",
    imageAlt: "Person",
    role: "XYZ Role",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio lorem, condimentum eget finibus in, bibendum in libero. Nullam convallis elit a tempor lobortis. Donec tincidunt, neque vel hendrerit viverra, nulla enim maximus lacus, a tincidunt mauris sapien non urna. Cras ipsum dolor, convallis eget egestas aliquam, interdum eu nisi. Donec placerat libero eros, quis scelerisque arcu lobortis ut. Vivamus euismod dictum nibh vitae porta. Proin placerat nunc sit amet erat convallis rutrum. Nullam vehicula pharetra arcu, at blandit ante ullamcorper ac. Quisque pulvinar sem sed augue aliquet semper eget et lorem. ",
  },


  
  
];
export default function Staff(props) {
  return (
    <div
      className={
        (props.dark ? "dark" : "") +
        " min-h-screen bg-slate-100 dark:bg-gray-900 duration-150"
      }
    >
      <Navbar page="staff" dark={props.dark} setDark={props.setDark} />
      <Banner />
      <header className=" drop-shadow-lg  duration-150 bg-white dark:bg-[#182133]">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-slate-100">
            Staff
          </h1>
        </div>
      </header>
      <div className="w-full mx-auto max-w-7xl px-4 md:px-10 pt-10">
        <div className="mt-6 grid grid-cols-1 md:gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {members.map((member) => (
            <Profile member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
