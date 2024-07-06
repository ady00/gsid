import "../App.css";
import React from "react";


// instagram posts
export default function Post(props) {
  return (
    <a className="flex place-content-center grow mt-2" href = {props.src}>
      
      <div className="shadow-lg grow w-full">
        <img src = {props.igLink}
          className="instagram-media instagram-media-rendered w-full bg-white dark:bg-gray-800 duration-150"
          title="instagramPost"
          id="instagram-embed-0"
          allowTransparency={true}
          allowFullScreen={true}
          frameBorder="0"
          height="650"
          data-instgrm-payload-id="instagram-media-payload-0"
          scrolling="no"
          style={{
            borderRadius: "15px",
            boxShadow: "none",
            display: "block",
            minWidth: "156px",
            padding: "0px",
            overflow: "hidden",
          }}
        ></img>
      </div>
      
    </a>
  );
}
