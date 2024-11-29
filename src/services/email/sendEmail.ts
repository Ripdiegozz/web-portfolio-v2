import emailjs from "@emailjs/browser";
import config from "../../env/config";

export const sendEmail = async (data: HTMLFormElement) => {
  if (config.ASTRO_EMAIL_JS_PUBLIC_KEY === undefined) {
    alert("EmailJS public key not found. Please contact the developer.");
    return;
  }
  if (
    config.ASTRO_EMAIL_JS_TEMPLATE_ID === undefined ||
    config.ASTRO_EMAIL_JS_SERVICE_ID === undefined
  ) {
    alert(
      "EmailJS template ID or service ID not found. Please contact the developer."
    );
    return;
  }

  emailjs
    .sendForm(
      config.ASTRO_EMAIL_JS_SERVICE_ID,
      config.ASTRO_EMAIL_JS_TEMPLATE_ID,
      data,
      {
        publicKey: config.ASTRO_EMAIL_JS_PUBLIC_KEY,
      }
    )
    .then(
      () => {
        console.log("SUCCESS!");
      },
      (error: any) => {
        console.log("FAILED...", error);
      }
    );
};

export default sendEmail;
