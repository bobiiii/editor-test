import React from 'react'

async function page() {
    const res = await fetch('http://localhost:3000/api/getBlogs');
    const data = await res.json();
    console.log("data   ", data.data[0].content);
    
  return (
    <div className=' flex gap-x-4 my-16 max-w-[1440px] mx-auto'>
{/* dangerouslySetInnerHTML={data.data[0].content} */}
        <div className=' w-2/6 bg-slate-200 text-[40px]'>SideBar</div>
        <h1 className="pb-3 font-bold   text-[25px] leading-tight">
                                {data.data[0].title}
                            </h1>
        <article className=' w-4/6 max-w-none prose prose-sm sm:prose-sm lg:prose-lg xl:prose-lg' dangerouslySetInnerHTML={{ __html: data.data[2].content }} >
        </article>
    </div>
  )
}

export default page