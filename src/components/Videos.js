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
            <h4 className="video-title"> Videos </h4>
            <div className="videos">
                <YouTube videoId="64s8ujoydRM" opts={opts} />
                <YouTube videoId="Sz-6jRrbtuI" opts={opts} />
                <YouTube videoId="IqHm-69NsPE" opts={opts} />
                <YouTube videoId="mClp2rZ-g0A" opts={opts} />
                <YouTube videoId="Wh-tCAY0u7I" opts={opts} />
                <YouTube videoId="9a0xIzp-fbs" opts={opts} />
                <YouTube videoId="KC8qr-U9ehU" opts={opts} />
            </div>
        </div>
    );
}