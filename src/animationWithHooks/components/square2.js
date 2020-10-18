import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";

export default function Square2() {
 const [Duration, changeDuration] = React.useState(0);

      const { ref, getAnimation} = useWebAnimations({
        keyframes: {
        borderRadius: "50%",
          transform: "rotate(360deg)", // Move by 500px
            background: ["red", "blue", "green"], // Go through three colors
        },
        // playbackRate: 1, // Change playback rate, default is 1
        id: "square2",
        timing: {
            duration: Duration, // Run for 1000ms
            iterations: Infinity, // Repeat once
            // direction: "alternate", // Run the animation forwards and then backwards
            easing: "linear", // Use a fancy timing function
          }
        //   delay: 500, // Start with a 500ms delay
      });

    return (
        <>
            <div className="square square2" ref={ref} onMouseOver={()=>{changeDuration(400); getAnimation().play()}} onMouseOut={()=>{ return getAnimation().cancel()}}><span className="hover">Hover me!</span><span className="Click">click me!</span></div>
        </>
    )
}
