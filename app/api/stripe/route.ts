import ProductEmail from "@/app/components/ProductEmail";
import { stripe } from "@/app/lib/stripe";

import { headers } from "next/headers";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.text();

  const signature = headers().get("Stripe-Signature") as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_SECRET_WEBHOOK as string
    );
  } catch (error: unknown) {
    return new Response("webhook error", { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;

      // Extract the recipient's email from the session object
      const recipientEmail = session.customer_email;

      if (!recipientEmail) {
        return new Response("Recipient email not found", { status: 400 });
      }

      const link = session.metadata?.link;

      const { data, error } = await resend.emails.send({
        from: "DevHubs <devhubs@happychuks.tech>",
        to: recipientEmail,
        subject: "Your Project from DevHubs",
        react: ProductEmail({
          link: link as string,
        }),
      });

      break;
    }
    default: {
      console.log("unhandled event");
    }
  }

  return new Response(null, { status: 200 });
}
