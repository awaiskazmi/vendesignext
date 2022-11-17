export const sendContactForm = async (data) =>
  fetch("/api/contact", {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
