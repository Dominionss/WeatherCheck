import React from 'react';
import ReactPlayer from 'react-player';

import {
    MediaController,
    MediaControlBar,
    MediaTimeRange,
    MediaTimeDisplay,
    MediaVolumeRange,
    MediaPlaybackRateButton,
    MediaPlayButton,
    MediaSeekBackwardButton,
    MediaSeekForwardButton,
    MediaMuteButton,
    MediaFullscreenButton,
} from "media-chrome/react";

import logo from '../assets/images/cloud.png';


function Home() {



    return(
        <div>
            <h1>Home page</h1>

            <p>Cloud picture</p>
            <img src={logo} alt="logo" width={300}/>

            <p>Cloud video</p>
            <MediaController
                style={{
                    width: "600px",
                    aspectRatio: "16/9",
                }}
            >
                <ReactPlayer
                    slot="media"
                    src="https://www.youtube.com/watch?v=8npvhQPUXSU&ab_channel=PremiumFootagePlanet"
                    controls={false}
                    playing={true}
                    style={{
                        width: "100%",
                        height: "100%",
                        "--controls": "none",
                    }}
                ></ReactPlayer>
                <MediaControlBar>
                    <MediaPlayButton />
                    <MediaSeekBackwardButton seekOffset={10} />
                    <MediaSeekForwardButton seekOffset={10} />
                    <MediaTimeRange />
                    <MediaTimeDisplay showDuration />
                    <MediaMuteButton />
                    <MediaVolumeRange />
                    <MediaPlaybackRateButton />
                    <MediaFullscreenButton />
                </MediaControlBar>
            </MediaController>

        </div>
    );
}

export default Home;