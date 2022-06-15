import { authorizationOptions } from "./authorizationOptions";

export const fetchList = async () => {

// Authorizes with oAuth
fetch("https://api.fynbill.fynbird.io/oauth", authorizationOptions)
  .then(async (response) => {
    const authData = await response.json();
    // Returns Promise with error if no response
    if (!response.ok) {
      const error = (authData && authData.message) || response.status;
      return Promise.reject(error);
    }

    // Set the fetched authorization token as a 'Bearer Token'
    const fetchOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authData.access_token}`,
      },
    };

    // once authorized, fetches list of invoices
    fetch("https://api.fynbill.fynbird.io/v1/invoices/debit/list", fetchOptions).then(
      async (response) => {
        const data = await response.json();
        console.log(data);
        if (!response.ok) {
          const error = (authData && authData.message) || response.status;
          return Promise.reject(error);
        }
      }
    );
  })
  // Log  error if unsuccesfull
  .catch((error) => {
    console.error("There was an error!", error);
  })
};