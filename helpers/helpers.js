/**
 * Phone validation
 * @param {*} mobile
 * @returns
 */
export const isValidMobile = (mobile) => {
  // Regular expression for mobile number validation
  return /^(01|8801|\+8801)[0-9]{9}$/.test(mobile);
};

/**
 * Email validation
 * @param {*} email
 * @returns
 */
export const isValidEmail = (email) => {
  // Regular expression for a more comprehensive email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return emailRegex.test(email);
};

/**
 * create random unique ID
 */
// export const getRandomUserID = (length = 20) => {
//   if (isNaN(length) || length < 1) {
//     throw new Error("Invalid length. Length must be a positive integer.");
//   }

//   const characters =
//     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//   const charactersLength = characters.length;
//   let userID = "";

//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * charactersLength);
//     userID += characters.charAt(randomIndex);
//   }

//   return userID;
// };

/**
 * create slug
 */
export const getProductSlug = (productName) => {
  // Remove special characters and spaces, convert to lowercase
  const cleanedName = productName.replace(/[^\w\s]/gi, "").toLowerCase();

  // Replace spaces with hyphens
  const slug = cleanedName.replace(/\s+/g, "-");

  return slug;
};

// Example usage:
//   const productName = "Awesome Product 123!";
//   const productSlug = getProductSlug(productName);
//   console.log(productSlug); // Output: "awesome-product-123"

/**
 * create slug
 */
// export const createSlug = (productName) => {
//   // Remove special characters and spaces, convert to lowercase
//   const cleanedName = productName.replace(/[^\w\s]/gi, "").toLowerCase();

//   // Replace spaces with hyphens
//   const slug = cleanedName.replace(/\s+/g, "-");

//   return slug;
// };

/**
 * Time Ago function
 */
export const timeAgo = (timestamp) => {
  const currentTime = Date.now();
  const timeDifference = currentTime - timestamp;

  // Define time units in milliseconds
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const year = 365 * day;

  if (timeDifference < minute) {
    return "Just now";
  } else if (timeDifference < hour) {
    const minutesAgo = Math.floor(timeDifference / minute);
    return `${minutesAgo} ${minutesAgo === 1 ? "minute" : "minutes"} ago`;
  } else if (timeDifference < day) {
    const hoursAgo = Math.floor(timeDifference / hour);
    return `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
  } else if (timeDifference < month) {
    const daysAgo = Math.floor(timeDifference / day);
    return `${daysAgo} ${daysAgo === 1 ? "day" : "days"} ago`;
  } else if (timeDifference < year) {
    const monthsAgo = Math.floor(timeDifference / month);
    return `${monthsAgo} ${monthsAgo === 1 ? "month" : "months"} ago`;
  } else {
    const yearsAgo = Math.floor(timeDifference / year);
    return `${yearsAgo} ${yearsAgo === 1 ? "year" : "years"} ago`;
  }
};

/**
 * Get public ID
 */
export const getPublicId = (url) => {
  return url.split("/")[url.split("/").length - 1].split(".")[0];
};
