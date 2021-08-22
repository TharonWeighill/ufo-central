import React from 'react';
import YouTube from 'react-youtube';
import '../styles/Videos.css';

export default function Videos() {
    const opts = {
        height: '200',
        width: '300',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };
    return (
        <div>
            <div className="videos">
            <div className="scoll-bg">
                <div className="scroll-div">
                    <div className="scroll-object">
                        <i className="fab fa-youtube fa-5x"></i>
                        <YouTube videoId="64s8ujoydRM" opts={opts} />
                        <YouTube videoId="1D9WcrJWpNk" opts={opts} />
                        <YouTube videoId="ZBtMbBPzqHY" opts={opts} />
                        <YouTube videoId="onEXmLX2ZZQ" opts={opts} />
                        <YouTube videoId="30r45P1JFys" opts={opts} />
                        <YouTube videoId="BEWz4SXfyCQ" opts={opts} />
                        <YouTube videoId="KC8qr-U9ehU" opts={opts} />
                        <YouTube videoId="LDhM4U5DgPI" opts={opts} />
                        <YouTube videoId="iTvm_xDVaDI" opts={opts} />
                    </div>
                </div>
            </div>
            </div>
        </div >
    );
}