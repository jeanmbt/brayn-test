import { authorizationOptions } from "./authorizationOptions";

export async function makeAuthorizationRequest() {
  try {
    const res = await fetch(
      "https://api.fynbill.fynbird.io/oauth",
      authorizationOptions
    );
    const { access_token } = await res.json();
    return access_token
  } catch (e) {
    throw e;
  }
}