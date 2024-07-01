import dbConnect from "@/lib/dbConect";
import User from "@/lib/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const GET = async () => {
  try {
    await dbConnect();
    const users = await User.find();
    return new NextResponse(JSON.stringify({ users: users }), { status: 200 });
  } catch (e) {
    return new NextResponse(JSON.stringify({ messaage: { error: e } }), {
      status: 500,
    });
  }
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { name, email, password } = body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await dbConnect();
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "Email already in use." },
        { status: 409 }
      );
    }
    const newUser = new User({
      username: name,
      email: email,
      password: hashedPassword,
    });
    await newUser.save();
    return new NextResponse(JSON.stringify({ messaage: { user: newUser } }), {
      status: 200,
    });
  } catch (e) {
    return new NextResponse(JSON.stringify({ messaage: { error: e } }), {
      status: 500,
    });
  }
};
