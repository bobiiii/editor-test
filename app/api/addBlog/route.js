// app/api/upload/route.js
// import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
// import { Upload } from '@aws-sdk/lib-storage';

// import { nanoid } from 'nanoid';
import { startDB } from '@/app/editor/dbConfig';
import BlogModel from '@/app/editor/editorModel';
import { NextResponse } from 'next/server';

// Set up AWS S3 client
// const s3Client = new S3Client({
//   region: process.env.AWS_REGION,
//   credentials: {
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   },
// });

export async function POST(request) {
    console.log("post req received add blog");
 
    const { content } = await request.json();
    console.log("content from api route ", content);
    

  if ( !content) {
    return NextResponse.json({ error: 'Please send content field' }, { status: 400 });
  }

 
  try {
 
  await startDB()
  const addBlog = await BlogModel.create({
    bannerImage: "will be added later",
    blogTitle: "will be added from input fields",
    date: "12-12-2024",
    content
  }) 

  if ( !addBlog) {
    return NextResponse.json({ error: 'Unable to add blog to Databse' }, { status: 400 });
  }

    return NextResponse.json({ message: "Blog added successfully" }, { status: 201 });
  } catch (error) {
    console.error('Failed to Add blog', error);
    return NextResponse.json({ error: 'Failed to Add blog' }, { status: 500 });
  }
}
