import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const urls = [
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  ];
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const videoRef = useRef();

  // console.log(videoRef.current?.currentTime);
  // // setCurrentTime(videoRef.current?.currentTime);
  // const onSeek = (seek) => {
  //   //Handler for change in seekbar
  //   videoRef.current.seek(seek);
  // };

  // useEffect(() => {
  //   const vid = document.getElementById("vid");
  //   vid.addEventListener("seeking", function () {
  //     alert("Seek operation began!");
  //   });
  // }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <video
        id="vid"
        style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
        playsInline
        muted
        controls
        onEnded={() => setShowNextButton(true)}
        src={urls[currentUrlIndex]}
        ref={videoRef}
      />
      {showNextButton && (
        <button
          onClick={() => {
            setCurrentUrlIndex(
              (prevUrlIndex) => (prevUrlIndex + 1) % urls.length
            );
            setShowNextButton(false);
          }}
          style={{
            position: "absolute",
            zIndex: 10,
            fontSize: "2em",
          }}
        >
          next
        </button>
      )}
    </div>
  );
}
