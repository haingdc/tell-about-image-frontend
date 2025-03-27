import { NextRequest, NextResponse } from 'next/server';

const DENO_SERVER_URL = 'https://tell-about-image-backend.fly.dev';

export async function POST(request: NextRequest) {
  console.log('inspect.start upload')
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file || !(file instanceof Blob)) {
      return NextResponse.json(
        { error: 'No valid file provided' },
        { status: 400 }
      );
    }

    // Get selected mode from request header
    const mode = request.headers.get('x-upload-mode') || 'base64';
    const endpoint = mode === 'base64' ? '/upload-base64' : '/describe';

    // FormData to send to Deno server
    const denoFormData = new FormData();
    denoFormData.append('image', file);

    console.log('inspect.forward to Deno server')
    // Forward to Deno server
    const response = await fetch(`${DENO_SERVER_URL}${endpoint}`, {
      method: 'POST',
      body: denoFormData,
    });
    console.log('inspect.response', response)

    if (!response.ok) {
      throw new Error('Failed to process image');
    }

    const data = await response.json();
    console.log('inspect.data', data)
    return NextResponse.json(data);

  } catch (error) {
    console.error('Error processing upload:', error);
    return NextResponse.json(
      { error: 'Failed to process upload' },
      { status: 500 }
    );
  }
}
