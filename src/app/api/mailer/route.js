import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const user = process.env.EMAIL;
const pass = process.env.PASSWORD;

export async function POST(request) {


  try {
    const { name, email } = await request.json();

    const message = `Dear ${name},

We are thrilled to have you join FundMeKGP, the official fundraising platform of the IIT Kharagpur community. By being part of this initiative, you’re contributing to a cause that brings positive change, emergency medical needs, and local welfare efforts.

At FundMeKGP, we believe in the power of collective action. With your involvement, we can accomplish even more and create a lasting impact. Whether you're here to support or to share your own initiatives, we want to make your experience as smooth and fulfilling as possible.

If you have any questions or need assistance, feel free to reach out to us at fundmekgp@gmail.com.

Thank you once again for being a part of this journey. Let's make a difference together!

Warm regards,
FundMeKGP Team`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: false,
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: `${user}`,
      to: `${email}`,
      subject: "Welcome to FundMeKGP  - Together, We Can Make a Difference!",

      text: `${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return new NextResponse("Failed to send message.", { status: 500 })
  }
}