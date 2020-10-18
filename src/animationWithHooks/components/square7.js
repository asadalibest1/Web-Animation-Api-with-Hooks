import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";

export default function Square3() {
 const [Duration, changeDuration] = React.useState(0);

      const { ref, getAnimation,} = useWebAnimations({
        keyframes: {
            transform: "scaleX(1.5)",
            background: ["#fca311", "#5390d9", "#4f5f21"], // Go through three colors
            
    },
        id: "square7",
        timing: {
            duration: Duration, // Run for 1000ms
            iterations: Infinity, // Repeat once
            direction: "alternate", // Run the animation forwards and then backwards
            easing: "linear", // Use a fancy timing function
          }
      });

    return (
        <>
            <div className="square square7" ref={ref} onMouseOver={()=>{changeDuration(250); getAnimation().play()}} onMouseOut={()=>{ return getAnimation().cancel()}}><span>Hover me!</span></div>
        </>
    )
}
