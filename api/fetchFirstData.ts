import { errorToJson } from "../utils/errorToJson";
import { makeAuthorizationRequest } from "./makeAuthorizationRequest";
import { BASE_URL } from "./utils/BASE_URL";

export const fetchFirstData = async () => {
  // Authorizes with oAuth
  const token = await makeAuthorizationRequest();

  try {
    const res = await fetch(`${BASE_URL}/invoices/debit/list`, {
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
    return errorToJson(e)
  }
}
