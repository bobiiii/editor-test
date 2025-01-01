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

export async function GET(request) {
    console.log("GET req received add blog");
 
 try {
 
  await startDB()
const getBlogs = await BlogModel.find({})
  if ( !getBlogs) {
    return NextResponse.json({ error: 'Unable to GET blogs' }, { status: 400 });
  }

    return NextResponse.json({ message: "Request successfull", data: getBlogs }, { status: 201 });
  } catch (error) {
    console.error('Failed to GET blog', error);
    return NextResponse.json({ error: 'Failed to GET blogs' }, { status: 500 });
  }
}
