// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../[...nextauth]";

export const POST = NextAuth(authOptions);
export const GET = NextAuth(authOptions);
