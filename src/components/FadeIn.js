import  React  from "react";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";



function FadeInMotion() {

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);
  
    const title = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {delay: 0.5,
        },
      },
    };
  
    const titleSecond = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {delay: 1,
        },
      },
    };
  
    const titleThird = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {delay: 2,
        },
      },
    };

    const titlefourth = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {delay: 2.5,
          },
        },
      };

}




export default FadeInMotion