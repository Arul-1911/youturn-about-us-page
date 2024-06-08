import CryptoJS from "crypto-js";
import moment from "moment";
import { retrieve_item } from "./cryptos";
export function store_item(key, data) {
  const salt = process.env.REACT_APP_SALT || "";
  let value = JSON.stringify(data);
  let encryptedKey = window.btoa(key);
  let encryptedValue = encrypt_data(value, salt);
  window.localStorage.setItem(encryptedKey, encryptedValue);
  window.dispatchEvent(new Event(`${key}`));
}
export function format_view_count(viewCount) {
  if (viewCount || viewCount === 0) {
    let formattedNumber;

    if (viewCount >= 1000) {
      const countInK = Math.floor(viewCount / 1000);
      formattedNumber = countInK + "k";
    } else {
      formattedNumber = viewCount.toLocaleString("en-US", {
        useGrouping: true,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
    }

    return formattedNumber.replace(/,/g, ", ");
  } else {
    return "0";
  }
}

export function clear_local_storage() {
  try {
    window.localStorage.clear();
  } catch (e) {
    return;
  }
}

export const encrypt_data = (data, salt) =>
  CryptoJS.AES.encrypt(JSON.stringify(data), salt).toString();

export const decrypt_data = (cipher_text, salt) => {
  const bytes = CryptoJS.AES.decrypt(cipher_text, salt);
  try {
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (err) {
    return null;
  }
};

export const split_tamil_english_words = (text, from, to) => {
  const mixedWordsArray = text?.match(/[\u0B80-\u0BFF\w.]+|\d+(?:\.\d+)?/g);
  let dots = mixedWordsArray?.length > 10 ? "..." : "";
  let result = mixedWordsArray
    ? mixedWordsArray.slice(from ?? 0, to ?? 10).join(" ")
    : [];

  return `${result}${dots}`;
};

export const format_views_count = (views_count) => {
  if (views_count >= 1000000) {
    return (views_count / 1000000).toFixed(1).replace(".0", "") + "M";
  } else if (views_count >= 1000) {
    return (views_count / 1000).toFixed(1).replace(".0", "") + "k";
  } else {
    return views_count?.toString();
  }
};

export const split_title = (text, from = 0) => {
  let to = 0;
  const get_language = retrieve_item("language");
  if (get_language.name === "tamil") {
    to = 80;
  } else {
    to = 50;
  }

  const dots = text?.length > 10 ? "..." : "";

  const result = text ? text?.slice(from, to) : "";

  return `${result}${dots}`;
};
let store_order_id = "";
export const initiate_request_razorpay_payment = async (
  order_id,
  set_payment_response
) => {
  let contact = retrieve_item("mobile");
  var options = {
    key: process.env.REACT_APP_RAZORPAY_PAYMENY_KEY || "",
    currency: "INR",
    description: "Test Transaction",
    order_id: order_id,
    handler: function (response) {
      set_payment_response(response);
    },
    prefill: {
      contact: contact,
    },
    theme: {
      color: "#F37254",
    },
  };
  if (order_id !== store_order_id) {
    store_order_id = order_id;
    let rzp1 = new Razorpay(options);
    await rzp1.open();
    // Store order_id only if it's available
  } else {
    console.log(
      "something went wrong: order_id not provided or already processed"
    );
  }
};
export const split_content = (text, from = 0) => {
  let to = 0;
  const get_language = retrieve_item("language");
  console.log("get_language", get_language);

  if (get_language.name === "tamil") {
    to = 40;
  } else {
    to = 60;
  }

  const parser = new DOMParser();
  const urlRegex = /https?:\/\/[^\s]+/g;
  const doc = parser.parseFromString(text, "text/html");
  let textContent = doc.body.textContent || "";
  textContent = textContent.replace(urlRegex, "").trim();
  const mixedWordsArray = textContent.match(
    /[\u0B80-\u0BFF\w.]+|\d+(?:\.\d+)?/g
  );
  const dots = mixedWordsArray?.length > to - from ? "..." : "";
  const result = mixedWordsArray
    ? mixedWordsArray.slice(from, to).join(" ")
    : "";
  return `${result}${dots}`;
};

export const date_format = (date) => {
  return moment(date).format("MMM DD,YYYY");
};

export const split_featured_content = (text, from = 0) => {
  let to = 0;
  const get_language = retrieve_item("language");
  console.log("get_language", get_language);

  if (get_language.name === "tamil") {
    to = 30;
  } else {
    to = 55;
  }

  const parser = new DOMParser();
  const urlRegex = /https?:\/\/[^\s]+/g;
  const doc = parser.parseFromString(text, "text/html");
  let textContent = doc.body.textContent || "";
  textContent = textContent.replace(urlRegex, "").trim();
  const mixedWordsArray = textContent.match(
    /[\u0B80-\u0BFF\w.]+|\d+(?:\.\d+)?/g
  );
  const dots = mixedWordsArray?.length > to - from ? "..." : "";
  const result = mixedWordsArray
    ? mixedWordsArray.slice(from, to).join(" ")
    : "";
  return `${result}${dots}`;
};
