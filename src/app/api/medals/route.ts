import { NextResponse } from "next/server";
import modals from '../../../data/medals.json';

export async function GET() {
  try {
    await new Promise(res => setTimeout(res, 200));
    return NextResponse.json(modals);
  } catch (error) {
    return NextResponse.json({ message: 'Failed to load modals'}, { status: 500 });
  }
}