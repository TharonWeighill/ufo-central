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
                            <YouTube videoId="LDhM4U5DgPI" opts={opts} />
                            <YouTube videoId="iTvm_xDVaDI" opts={opts} />
                            <YouTube videoId="rh4QngYJG4I" opts={opts} />
                            <YouTube videoId="FAMCx6Kr1k8" opts={opts} />
                            <YouTube videoId="OU58Ya2-rpY" opts={opts} />
                            <YouTube videoId="QSQqbPWMGYU" opts={opts} />
                            <YouTube videoId="FZdg0g84HUM" opts={opts} />
                            <YouTube videoId="SKsLK_Na7iw" opts={opts} />
                            <YouTube videoId="qCZ-BMSGqwk" opts={opts} />
                            <YouTube videoId="0J2rCaHxJ6w" opts={opts} />
                            <YouTube videoId="AX-mifWsRYE" opts={opts} />
                            <YouTube videoId="47ahpZWKHF0" opts={opts} />
                            <YouTube videoId="0iPKq-u9PGM" opts={opts} />
                            <YouTube videoId="PSUTIemu58o" opts={opts} />
                        </div>
                    </div>
                </div>
            </body>
        </div >
    );
}