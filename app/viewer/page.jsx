// "use client"
// import CreateBlog from './CreateBlog'
// import './styles.scss'
// import Tiptap from './Tiptap'
// import Heading from '@/components/reuseable/Heading'

import Image from "next/image";

export default function Home() {
  return <div className='h-screen  bg-slate-100'>
 {/* <h1>EDITOR TEST</h1>    */}
                <Image
                src={"/hero.webp"}
                // width={400}
                // height={400}
                quality={100}
                fill
                alt="abc"
                />
            {/* <CreateBlog/> */}
    
  
  
  </div>
}
