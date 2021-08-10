import React from 'react';
import YouTube from 'react-youtube';
import '../components/Videos.css';

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
            <body>
                <div className="scoll-bg">
                    <div className="scroll-div">
                        <div className="scroll-object">
                            <i class="fab fa-youtube fa-5x"></i>
                            <YouTube videoId="64s8ujoydRM" opts={opts} />
                            <YouTube videoId="1D9WcrJWpNk" opts={opts} />
                            <YouTube videoId="ZBtMbBPzqHY" opts={opts} />
                            <YouTube videoId="onEXmLX2ZZQ" opts={opts} />
                            <YouTube videoId="30r45P1JFys" opts={opts} />
                            <YouTube videoId="BEWz4SXfyCQ" opts={opts} />
                            <YouTube videoId="KC8qr-U9ehU" opts={opts} />
                        </div>
                    </div>
                </div>
            </body>
        </div >
    );
}