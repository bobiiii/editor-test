// app/api/upload/route.js
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';

import { nanoid } from 'nanoid';
import { NextResponse } from 'next/server';

// Set up AWS S3 client
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export async function POST(request) {
    console.log("post req received");
    
  // Parse the form data
  const formData = await request.formData();
  const file = formData.get('file');
// console.log(file);


  if (!file || !file.name) {
    return NextResponse.json({ error: 'File not provided' }, { status: 400 });
  }

  // Generate a unique ID for the image
  const imageId = nanoid();
  const s3Key = `${imageId}-${file.name}`;

  // Upload to S3
  try {
    // Convert the file into a readable stream
    const fileStream = file.stream();

    // Use the Upload utility from @aws-sdk/lib-storage
    const upload = new Upload({
      client: s3Client,
      params: {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: s3Key,
        Body: fileStream,
        ContentType: file.type,
      },
    });

    await upload.done();

    // Return the image ID
    return NextResponse.json({ imageURL: s3Key }, { status: 201 });
  } catch (error) {
    console.error('Error uploading to S3:', error);
    return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
  }
}
