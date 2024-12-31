"use client";
import { useEffect, useRef } from "react";
import CloudImage360Viewer from "js-cloudimage-360-view";

const Visualizer = () => {
    const containerRef = useRef(null);

  useEffect(() => {
    // Dynamically import the image from the public directory
    const images = Array.from({ length: 36 }, (_, index) => `/rows/Filename_${(index + 1).toString().padStart(2, '0')}.jpg`);
// console.log("img urls ",imageUrls);

// const viewerContainer = document.querySelector(".cloudimage-360");
//   if (!viewerContainer) {
//     console.error("Viewer container not found!");
//     return;
//   }

    // Initialize the CloudImage360Viewer only on the client-side
    const viewer = new CloudImage360Viewer({
        // imageUrls: imageUrls, // Correctly reference the image URL
        images: images,
        container: containerRef.current,
        amount: 36, // Number of frames for the 360 view
    });
    console.log("viewer  ", viewer);
    

    // Optional: Cleanup on component unmount
    return () => {
      viewer.destroy();
    };
  }, []);

  return (
   <>
    <div
    ref={containerRef}
    
      className=" border border-red-500"
      style={{ width: "600px", height: "400px" }}
    />


    <img src="/rows/Filename_01.jpg" alt="360 Image" />;
    </>
  );
};

export default Visualizer;
