import React, { useEffect, useState } from "react";
import { Button, Slider, Tooltip } from "@material-ui/core"; // material-ui

// icons
import {
  BiTransfer,
  BiVolume,
  BiVolumeFull,
  BiVolumeLow,
  BiVolumeMute,
} from "react-icons/bi";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { FiChevronRight } from "react-icons/fi";
import { BsMusicNoteList } from "react-icons/bs";

// type writer animation
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";

// react router
import { Link, useHistory } from "react-router-dom";

// axios
import axios from "axios";
import screenfull from "screenfull";

const LofiPlayer = ({
  paused,
  setPaused,
  volume,
  setVolume,
  name,
  fetchVideo,
  muted,
  buffering,
  toggleMute,
  setIsFullScreen,
  isFullScreen,
}) => {
  const [data, setData] = useState([]);

  // history
  let history = useHistory();

  const fetchData = async () => {
    await axios
      .get("/data/tracks.json", {
        headers: {},
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // random video
  const updatetoRandomVideo = () => {
    const randomVideo = data[Math.floor(Math.random() * data.length)];
    if (typeof window !== undefined) {
      const { id, name } = randomVideo;

      const video = {
        videoId: id,
        name: name,
      };
      localStorage.setItem("video", JSON.stringify(video));
    }
    fetchVideo();
  };

  // previous video
  const moveToPreviousVideo = () => {
    const currentVideo = data.filter((video) => video.name === name);
    const currentVideoIndex = currentVideo[0].index;

    if (typeof window !== undefined) {
      if (currentVideoIndex === 0) {
        console.log("no more previous video");
      } else {
        const { id, name } = data[currentVideoIndex - 1];

        const video = {
          videoId: id,
          name: name,
        };
        localStorage.setItem("video", JSON.stringify(video));
      }
    }
    fetchVideo();
  };

  // next video
  const moveToNextVideo = () => {
    const currentVideo = data.filter((video) => video.name === name);
    const currentVideoIndex = currentVideo[0].index;

    if (typeof window !== undefined) {
      if (data.length - 1 === currentVideoIndex) {
        console.log("no more next video");
      } else {
        const { id, name } = data[currentVideoIndex + 1];
        const video = {
          videoId: id,
          name: name,
        };

        localStorage.setItem("video", JSON.stringify(video));
      }
    }
    fetchVideo();
  };

  // twitterLink for shortcut
  const twitterLink =
    "https://twitter.com/intent/tweet?text=Check%20out%20loficlub.now.sh%20by%20@SavioMartin7%E2%9A%A1%EF%B8%8F%0D%0A%0AThe%20best%20place%20to%20enjoy%20Hip%20hop%20beats%20to%20Relax%20or%20Study!%20%F0%9F%8E%A7%20Give%20it%20a%20try!%20You%27ll%20love%20it!%20%F0%9F%94%A5%0D%0A%0A%23lofi%20%23chillbeats";

  // keyboard shortcuts for productivity
  document.onkeypress = function (e) {
    if (muted) {
      toggleMute();
    } else {
      checkShortcuts(e);
    }
  };

  // keyboard keydown - arrow keys only work with keydown
  document.onkeydown = function (e) {
    if (muted) {
      toggleMute();
    } else {
      checkKeyDowns(e);
    }
  };

  const checkShortcuts = (e) => {
    const { keyCode } = e;
    console.log(keyCode);
    if (keyCode === 32) {
      setPaused(!paused);
    } else if (keyCode === 114) {
      updatetoRandomVideo();
    } else if (keyCode === 97) {
      history.push("/tracks");
    } else if (keyCode === 102) {
      setIsFullScreen(!isFullScreen);
      screenfull.toggle();
    } else if (keyCode === 116) {
      window.open(twitterLink);
    } else if (keyCode === 107) {
      history.push("/keyboard-shortcuts");
    } else if (keyCode === 108) {
      history.push("/todo");
    } else if (keyCode === 99) {
      history.push("/chat");
    } else if (keyCode === 112) {
      history.push("/pomodoro");
    } else if (keyCode === 104) {
      history.push("/");
    }
  };

  const checkKeyDowns = (e) => {
    const { keyCode } = e;
    if (keyCode === 37) {
      moveToPreviousVideo();
    } else if (keyCode === 39) {
      moveToNextVideo();
    } else if (keyCode === 38) {
      const nextVolume = parseInt(volume / 10, 10) * 10;
      if (nextVolume < 100) {
        if (nextVolume % 10 === 0) {
          setVolume(nextVolume + 10);
        }
      }
    } else if (keyCode === 40) {
      const nextVolume = parseInt(volume / 10, 10) * 10;
      if (nextVolume % 10 === 0) {
        setVolume(nextVolume);
      }
    }
  };

  return (
    <div className="w-full pl-7">
      {muted ? (
        <Typewriter
          string="Press any key to Start"
          className="text-2xl"
          delay={80}
        />
      ) : (
        <>
          <div className="mb-1 flex animate__animated animate__fadeInUp">
            <div
              className="relative rounded-lg flex items-center justify-center bg-gradient-to-t from-[#00C9FF] to-[#92FE9D] overflow-hidden h-10 w-10 shadow-2xl"
              onClick={() => setPaused(!paused)}
            >
              <Tooltip title={paused ? "paused" : "playing"} arrow>
                <Button className="playBtn">
                  <div class={`control-btn ${!paused && "paused"}`}>
                    <label for="playpause"></label>
                  </div>
                </Button>
              </Tooltip>
            </div>
            <Tooltip title="random" arrow>
              <div
                className="relative rounded-lg flex items-center justify-center text-white overflow-hidden h-10 w-8 shadow-2xl ml-1"
                onClick={updatetoRandomVideo}
              >
                <Button className="playBtn h-full">
                  <BiTransfer className="text-2xl text-white" />
                </Button>
              </div>
            </Tooltip>
            <Link to="/tracks">
              <Tooltip title="Tracks" arrow>
                <div className="relative rounded-lg flex items-center justify-center text-white overflow-hidden h-10 w-8 shadow-2xl">
                  <Button className="playBtn h-full">
                    <BsMusicNoteList className="text-2xl text-white" />
                  </Button>
                </div>
              </Tooltip>
            </Link>
            <div
              className="relative rounded-lg flex items-center justify-center text-white overflow-hidden h-10 w-8 shadow-2xl ml-1"
              onClick={moveToPreviousVideo}
            >
              <Tooltip title="Previous" arrow>
                <Button className="playBtn h-full">
                  <HiChevronDoubleLeft className="text-2xl text-white" />
                </Button>
              </Tooltip>
            </div>
            <div
              className="relative rounded-lg flex items-center justify-center text-white overflow-hidden h-10 w-8 shadow-2xl"
              onClick={moveToNextVideo}
            >
              <Tooltip title="Next" arrow>
                <Button className="playBtn h-full">
                  <HiChevronDoubleRight className="text-2xl text-white" />
                </Button>
              </Tooltip>
            </div>

            <Tooltip title={`Volume ${volume}%`} arrow>
              <div className="w-40 ml-1 flex items-center justify-center">
                <div className="mr-2">
                  {volume < 1 ? (
                    <BiVolumeMute className="text-2xl text-white" />
                  ) : volume > 85 ? (
                    <BiVolumeFull className="text-2xl text-white" />
                  ) : volume < 45 ? (
                    <BiVolume className="text-2xl text-white" />
                  ) : (
                    <BiVolumeLow className="text-2xl text-white" />
                  )}
                </div>

                <Slider
                  min={0}
                  max={100}
                  valueLabelDisplay="auto"
                  value={volume}
                  onChange={(e, volume) => setVolume(volume)}
                />
              </div>
            </Tooltip>
          </div>
          <div className="flex items-start justify-start w-auto mt-2 animate__animated animate__fadeInUp">
            {!paused ? (
              <div className="spectrum flex items-end justify-end h-5 mr-2">
                <div className="line1 bg-white line"></div>
                <div className="line2 bg-white line"></div>
                <div className="line3 bg-white line"></div>
                <div className="line4 bg-white line"></div>
              </div>
            ) : (
              <div className="spectrum flex items-end justify-end h-5 mr-2">
                <div className="h-[.2em] bg-white line"></div>
                <div className="h-[.2em] bg-white line"></div>
                <div className="h-[.2em] bg-white line"></div>
                <div className="h-[.2em] bg-white line"></div>
              </div>
            )}

            <Link
              to="/tracks"
              className="flex items-center justify-start w-auto"
            >
              <h1 className="text-lg text-[#4CD2D6]">
                {buffering
                  ? "Buffering up ..."
                  : paused
                  ? "Music paused"
                  : "Click to Change"}
              </h1>
              <FiChevronRight className="text-xl text-[#4CD2D6]" />
              <Tooltip title={`${name} - Click to change`} arrow>
                <h1 className="text-lg">{name}</h1>
              </Tooltip>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default LofiPlayer;
