// import React, { useState, useEffect } from "react";
//
// // import song1 from './../../../../assets/audio/musicDemo/01.Strana chudes.mp3'
// // import song2 from './../../../../assets/audio/musicDemo/Capricorns_dream.mp3'
// // import song3 from './../../../../assets/audio/musicDemo/03.╨в╨╡╤З╨╡ ╨▓╨╛╨┤╨░ - ╨Ь╨╗╨░╨┤╨░ .mp3'
// import song4 from './../../../../assets/audio/song.mp3'
// // // import song5 from './../../../../assets/audio/musicDemo/01.Strana chudes.mp3'
// // // import song6 from './../../../../assets/audio/musicDemo/01.Strana chudes.mp3'
// // // import song7 from './../../../../assets/audio/musicDemo/01.Strana chudes.mp3'
// // import picture from '../../../../assets/forGallery/sangDrum3.jpg'
// import {Box, Button} from "@material-ui/core";
//
//
// const useAudio = url => {
//     const [audio] = useState(new Audio(url));
//     const [playing, setPlaying] = useState(false);
//
//     const toggle = () => setPlaying(!playing);
//
//     useEffect(() => {
//             playing ? audio.play() : audio.pause();
//         },
//         [audio, playing]
//     );
//
//     useEffect(() => {
//         audio.addEventListener('ended', () => setPlaying(false));
//         return () => {
//             audio.removeEventListener('ended', () => setPlaying(false));
//         };
//     }, [audio]);
//
//     return [playing, toggle];
// };
//
// const Player = () => {
//     const [playing, toggle] = useAudio(song4);
//
//     return (
//         <Box>
//             <div style={{display:"block"}}>
//                 <Button variant='contained' color='secondary' button onClick={toggle}>{playing ? "Pause" : "Play"}</Button>
//                 <span style={ { marginLeft: 30}}>Песня 1</span>
//             </div>
//             <div style={{display:"block"}}>
//                 <Button variant='contained' color='secondary' button onClick={toggle}>{playing ? "Pause" : "Play"}</Button>
//                 <span style={ { marginLeft: 30}}>Песня 2</span>
//             </div>
//         </Box>
//     );
// };
//
// export default Player;