import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './App.css'
import DiwaliBG from "./assets/diwali_bg2.png"
import Cracker from "./assets/cracker.png"
import Diya3d from "./assets/diya_3d.png"
import TypewriterComponent from 'typewriter-effect'
import { motion } from "framer-motion"
import { Fireworks } from '@fireworks-js/react'
import BackgroundMusic from "./assets/diwali_song.mp3";


function App() {
  const [isBgLoaded, setIsBgLoaded] = useState(false);
  const [openBG, setOpenBG] = useState(false);


  const ref = useRef(null)
  const audioRef = useRef(null);
  const audioContextRef = useRef(null);
  const [buffer, setBuffer] = useState(null);



  const loadAudio = async () => {
    const response = await fetch(BackgroundMusic);
    const arrayBuffer = await response.arrayBuffer();
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    audioContextRef.current = audioContext;

    audioContext.decodeAudioData(arrayBuffer, (decodedData) => {
      setBuffer(decodedData);
    }, (error) => {
      console.error('Error decoding audio data', error);
    });
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);
    source.loop = true;
    source.start(0);
  };

  useEffect(() => {
    const img = new Image();
    img.src = DiwaliBG;
    img.onload = async () => {
      setIsBgLoaded(true);
    };
    // audioRef.current.pause();


  }, []);

  async function toggle() {
    setOpenBG(true);
    const bg_audio = new Audio(BackgroundMusic);
    bg_audio.play()
      .catch((error) => {
        console.log(error);

      })
  }

  // const toggle = () => {
  //   if (!ref.current) return
  //   if (ref.current.isRunning) {
  //     ref.current.stop()
  //   } else {
  //     ref.current.start()
  //   }
  // }

  // const handleImageLoad = () => {
  //   setIsBgLoaded(true);
  // };

  // useEffect(() => {
  //   console.log(isBgLoaded);

  // }, [isBgLoaded])


  return (
    <div className='bg-black'>
      <audio src={BackgroundMusic} ref={audioRef} />

      <Fireworks
        ref={ref}
        options={{
          opacity: 0.1, explosion: 5, friction: 0.99, particles: 40,
          // rocketsPoint: [0, 100],
          intensity: 5,
          gravity: 1.5,
          rocketsPoint: {
            min: 0,
            max: 100
          },
          traceSpeed: 3,
          lineWidth: {
            min: 0,
            max: 50
          },
          sound: {
            enabled: true,
            volume: {
              min: 0,
              max: 80
            }
          }
        }}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'fixed',
          background: 'transparent',
        }}
      />


      {/* <img
          src={DiwaliBG}
          alt="Background"
          style={{}}
          className=' bg-image'
          onLoad={handleImageLoad}
        /> */}
      {!openBG ? (
        <div className=' w-full flex justify-center items-start bg-image bg-black'
        >
          <div className='flex justify-center items-center w-full h-[80vh] bg-black text-white flex-col gap-3'>
            {isBgLoaded ?
              <motion.button className='w-12 h-12 rounded-full flex justify-center items-center bg-white text-black p-12 relative z-[50] border border-black shadow-white click-button'
                // initial={{ scale: 0.6 }}
                // animate={{ scale: 1 }}
                // transition={{ type: "spring", duration: 2, repeat: Infinity }}
                onClick={toggle}
              >Click here</motion.button>
              : <>
                <p>Please wait..</p>
                <p>Loading.....</p>
              </>
            }

            {/* <iframe src="https://lottie.host/embed/acd72e3c-55ba-480d-a343-5473b001280f/060pfJCh3l.json" width={"90vw"} height={"100%"}
              className='w-full h-screen'
            ></iframe> */}
          </div>
        </div>
      ) : (
        <motion.div className=' w-full flex justify-center items-start bg-image bg-black'
          style={{ backgroundImage: openBG ? `url(${DiwaliBG})` : "none" }}
          initial={{ scale: 0, borderRadius: "100%" }}
          animate={{ scale: 1, borderRadius: 0 }}
          transition={{
            type: "spring", duration: 3
          }}
        // onLoad={handleImageLoad}
        >
          <div className='w-full flex justify-center items-center flex-col h-full'>
            <div className='h-[50%] w-full flex justify-center items-start pt-8'>
              <motion.div className=" w-fit px-3 py-2 rounded-lg text-white text-center gap-3 diwalicard"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 1 }}
              >
                <h1 className='diwali1 text-xl sm:text-3xl'>Shubh Deepawali!</h1>
                <TypewriterComponent
                  className='diwali2 sm:text-xl'
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Warm wishes")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("From Chauhan Family")
                      .start();
                  }}
                />
              </motion.div>
            </div>
            <div className='h-[50%] w-full flex justify-center items-end pb-16'>
              <div class="container relative  ">
                <div class="shadow"></div>
                <div class="diya">
                  <div class="line-1"></div>
                  <div class="line-2"></div>
                  <div class="dots"></div>
                </div>
                <div class="inside">
                  <div class="light"></div>
                  <div class="flame"></div>
                </div>
              </div>
            </div>
          </div>



          {/* <motion.div
              className='absolute bottom-10 left-10'
              initial={{ scale: 0, x: -200, y: 200 }}
              animate={{ scale: 1, x: 0, y: 0 }}
              transition={{ type: "spring", duration: 1 }}
            >
              <img src={Cracker} className='w-28 h-fit' />
            </motion.div> */}
          {/* <div className='absolute bottom-10 left-10'>
              <img src={Cracker} className='w-28 h-fit' />
            </div> */}
          {/* <motion.div className='absolute bottom-[25%] right-[15%]'
              initial={{ y: 100, scale: 0, x: 200 }}
              animate={{ y: 0, scale: 1, x: 0 }}
              transition={{ type: "spring", duration: 1 }}
            >
              <img src={Diya3d} className='w-28 h-fit' />
            </motion.div> */}

        </motion.div>

      )}
    </div>
  )
}

export default App
