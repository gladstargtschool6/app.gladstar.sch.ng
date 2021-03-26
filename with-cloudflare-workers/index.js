import { createClient } from "@supabase/supabase-js";

// Fill you client credential here.
const db = createClient("https://imdvvfcbtrfewysxgrnr.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNDMzNzg3MSwiZXhwIjoxOTI5OTEzODcxfQ.O7Ck0RFbXxsJ9BpxdAuey5O_MJcC_lHM06xDYKTbWxg");

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  try {
    // Uncomment this part to start querying your database using Supabase client.
    //
    // const { data, error } = await db
    //   .from("TABLE")
    //   .select("name");
    // console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.log(error);
  }

  return new Response("Hello worker!", {
    headers: { "content-type": "text/plain" },
  });
}
