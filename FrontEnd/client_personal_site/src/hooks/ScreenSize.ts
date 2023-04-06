import { useEffect, useState } from "react";

// export const useMobileScreen = (): boolean=> {

//   const [width, setWidth] = useState(0)
//   const [isMobile, setIsMobile] = useState()
//   const handleWindowResize = () => {
//     setWidth(window.innerWidth);
//   }

//     useEffect(() => {
//       handleWindowResize();
//       window.addEventListener("resize", handleResize)
//     });

//     return isMobile;

// }

export const useMobileScreen = () => {

  const [width, setWidth] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return width < 768;
}