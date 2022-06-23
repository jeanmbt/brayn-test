import { serializeError } from "serialize-error";
import { makeAuthorizationRequest } from "./makeAuthorizationRequest";

export const fetchFile = async (invoice: any) => {
  const token = await makeAuthorizationRequest();
  try {
    const res = await fetch(invoice.file.file_url, {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${invoice.file.filename}`);
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
      });
  } catch (e) {
    console.error(e);
    return serializeError(e)
  }
};