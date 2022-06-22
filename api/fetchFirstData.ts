import { makeAuthorizationRequest } from "./makeAuthorizationRequest";

export const fetchFirstData = async () => {
  // Authorizes with oAuth
  const token = await makeAuthorizationRequest();

  try {
    const res = await fetch(`https://api.fynbill.fynbird.io/v1/invoices/debit/list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}
