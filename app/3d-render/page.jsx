"use client"
import dynamic from "next/dynamic"
const Visualizer = dynamic(() => import('./Render'), { ssr: false })


 function page() {
    return(
        <div className="grid place-items-center text-red-600">
            3D Render
            <Visualizer/>
        </div>
    )
}

export default page