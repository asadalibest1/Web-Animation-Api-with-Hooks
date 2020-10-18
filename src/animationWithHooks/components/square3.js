import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";

export default function Square3() {
 const [Duration, changeDuration] = React.useState(0);

      const { ref, getAnimation,} = useWebAnimations({
        keyframes: {
          transform: "skew(20deg)",
        //   transform: "translate(-20px, -20px)",
        },
        id: "square3",
        timing: {
            duration: Duration, // Run for 1000ms
            iterations: Infinity, // Repeat once
            direction: "alternate", // Run the animation forwards and then backwards
            easing: "linear", // Use a fancy timing function
          }
      });

    return (
        <>
            <div className="square square3" ref={ref} onMouseOver={()=>{changeDuration(250); getAnimation().play()}} onMouseOut={()=>{ return getAnimation().cancel()}}><span className="hover">Hover me!</span><span className="Click">click me!</span></div>
        </>
    )
}
