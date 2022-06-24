import { useSpring, animated, config } from "@react-spring/web";
import React from "react";
import SlidingPic from "../../assets/small/portraits/AllenBeenelogo.png";

import "./AnimatedImg.css";

function AnimatedImg() {
  const yValue1 = 0;
  const yValue2 = (window.innerHeight/4);


  const styles = useSpring({
    loop: { reverse: false },
    from: { y: yValue1, opacity: 0 },
    to: { y: yValue2, opacity: 1 },
    config: { mass: 12, tension: 180, friction: 12 },
   delay: 1000

  });

  return (
    

      <animated.div style={styles} className='EntireDivAni'>
        <div className="AnmatedImg">

        <div className="theImg">
          <img
            src={SlidingPic}
            alt="God Bless"
            name="Insert_logo"
            id="htdslider"
            style={{  borderRadius: "10px"
            }}
          />
        </div>
        </div>
        </animated.div>
   
  );
}

export default AnimatedImg;
