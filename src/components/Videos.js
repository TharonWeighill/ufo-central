import React from 'react';
import { useState } from 'react';
import YouTube from 'react-youtube';


export default function Videos() {



    function handleChange(e) {

    }

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
            <h4>Videos</h4>
            <YouTube videoId="64s8ujoydRM" opts={opts} />
            <YouTube videoId="Sz-6jRrbtuI" opts={opts} />
            <YouTube videoId="IqHm-69NsPE" opts={opts} />
            <YouTube videoId="mClp2rZ-g0A" opts={opts} />
            <YouTube videoId="Wh-tCAY0u7I" opts={opts} />
            <YouTube videoId="9a0xIzp-fbs" opts={opts} />
            <YouTube videoId="KC8qr-U9ehU" opts={opts} />
        </div>
    );
}


