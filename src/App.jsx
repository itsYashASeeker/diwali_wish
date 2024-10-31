import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './App.css'
import DiwaliBG from "./assets/diwali_bg.png"
import Cracker from "./assets/cracker.png"
import Diya3d from "./assets/diya_3d.png"
import TypewriterComponent from 'typewriter-effect'
import { motion } from "framer-motion"
import { Fireworks } from '@fireworks-js/react'



function App() {
  const [count, setCount] = useState(0)
  const [showVideo, setShowVideo] = useState(true);
  const [isBgLoaded, setIsBgLoaded] = useState(false);


  const ref = useRef(null)



  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowVideo(false);
  //   }, 2000); 

  //   return () => clearTimeout(timer);
  // }, []);
  useEffect(() => {
    // Create a new Image object
    const img = new Image();
    img.src = DiwaliBG;

    // Set up an event listener to change state once the image is fully loaded
    img.onload = () => {
      setIsBgLoaded(true);
    };

    // Optional: Hide video after 1 second
    // const timer = setTimeout(() => {
    //   setShowVideo(false);
    // }, 1000);

    // return () => clearTimeout(timer);
  }, []);

  const toggle = () => {
    if (!ref.current) return
    if (ref.current.isRunning) {
      ref.current.stop()
    } else {
      ref.current.start()
    }
  }

  const handleImageLoad = () => {
    setIsBgLoaded(true);
  };

  useEffect(() => {
    console.log(isBgLoaded);

  }, [isBgLoaded])


  return (
    <>
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
      <div className=' w-full flex justify-center items-start bg-image bg-black'
        style={{ backgroundImage: isBgLoaded ? `url(${DiwaliBG})` : "none" }}
      // onLoad={handleImageLoad}
      >
        {/* <img
          src={DiwaliBG}
          alt="Background"
          style={{}}
          className=' bg-image'
          onLoad={handleImageLoad}
        /> */}
        {!isBgLoaded ? (
          <div className='flex justify-center items-center w-full h-[80vh] bg-black'>
            <iframe src="https://lottie.host/embed/acd72e3c-55ba-480d-a343-5473b001280f/060pfJCh3l.json" width={"90vw"} height={"100%"}
              className='w-full h-screen'
            ></iframe>
          </div>
        ) : (
          <>
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

          </>

        )}
      </div>

    </>
  )
}

export default App
