
const loginData = JSON.stringify({
  username: process.env.NEXT_PUBLIC_USERNAME,
  password: process.env.NEXT_PUBLIC_PASSWORD,
  client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
  client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
  grant_type: process.env.NEXT_PUBLIC_GRANT_TYPE,
});

export const authorizationOptions = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: loginData,
};