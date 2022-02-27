import './karaokeLyrics.scss';
import {useState} from 'react'
import { Lrc } from 'react-lrc';

const LRC = `[ar:Shayne Ward]
[ti:Until You]
[00:01.22]Artist: Shayne Ward
[00:03.65]Album:
[00:05.60]Title: Until U
[00:08.45]By: Pu
[00:11.20]Baby life was good to me
[00:14.05]But you just made it better
[00:20.80]I love the way you stand by me
[00:25.20]Through any kind of weather
[00:31.75][01:43.60]I don’t wanna run away
[00:34.50][01:46.55]Just wanna make your day
[00:37.45][01:49.95]When you felt the world is on your shoulders
[00:42.90][01:54.55]Don’t wanna make it worse
[00:45.64][01:57.50]Just wanna make us work
[00:49.05][02:01.00]Baby tell me I will do whatever
[00:53.95][02:05.80][03:03.78][03:25.54]It feels like nobody ever knew me until you knew me
[01:00.10][02:11.80][03:09.78][03:31.64]Feels like nobody ever loved me until you loved me
[01:05.45][02:17.30][03:15.19][03:37.34]Feels like nobody ever touched me until you touched me
[01:11.10][02:23.00]Baby nobody, nobody,until you
[01:22.95]Baby it just took one hit of you now I'm addicted
[01:34.00]You never know what's missing
[01:36.80]Till you get everything you need,yeah
[02:35.90]See it was enough to know
[02:38.65]If I ever let you go
[02:42.10]I would be no one
[02:47.15]Cos I never thought I'd feel
[02:49.65]All the things you made me feel
[02:53.30]Wasn't looking for someone... until you
[03:21.99][03:42.76]Baby nobody, nobody
[03:49.86]Nobody, nobody, until you
`
function KaraokeLyrics ({lrc,timestamp}){
    const   styleKaraoke =  (active) =>(
        {
            fontSize:"18px",
            color: active ? "#21b685" : "#fff",
            marginTop: active ? "2px" : "0px",
        }
    )
    return (
        <div className="karaoke-lyrics">
                <Lrc
                    className="lrc"
                    lrc={LRC}
                    topBlank={false}
                    currentMillisecond={timestamp}
                    autoScroll={true}
                   
                    lineRenderer={({ index, active, line }) => {
                        return (
                            <div
                                style={styleKaraoke(active)}
                            >{line.content}</div>
                        )
                    }}
                />
        </div>
    )

} 
export default KaraokeLyrics