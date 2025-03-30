import { NextRequest, NextResponse } from "next/server";
import process from "node:process";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file");
  const type = formData.get("type");

  if (!file) {
    return NextResponse.json(
      { error: "No file provided" },
      { status: 400 },
    );
  }

  try {
    const newFormData = new FormData();
    newFormData.append("image", file);
    newFormData.append("type", type as string);

    const apiUrl = new URL("describe", process.env.BACKEND_PUBLIC_API_URL)
      .toString();
    const response = await fetch(apiUrl, {
      method: "POST",
      body: newFormData,
    });

    if (!response.ok) {
      throw new Error("Failed to get description");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to process image" },
      { status: 500 },
    );
  }
}
