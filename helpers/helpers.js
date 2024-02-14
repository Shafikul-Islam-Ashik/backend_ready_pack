////////////////////////////////////////////////////
// ashraful haque sir's helpers functions
////////////////////////////////////////////////////

/**
 * Email Validate
 */
export const isValidEmail = (email) => {
  return /^[^\.-/][a-z0-9-_\.]{1,}@[a-z0-9-]{1,}\.[a-z\.]{2,}$/.test(email);
};

/**
 * Email Validate
 */
export const isValidMobile = (mobile) => {
  return /^(01|8801|\+8801)[0-9]{9}$/.test(mobile);
};

/**
 * Email Validate
 */
export const isString = (data) => {
  return /^[a-z@\.]{1,}$/.test(data);
};

/**
 * Email Validate
 */
export const isNumber = (number) => {
  return /^[0-9\+]{1,}$/.test(number);
};

/**
 * Create a random number
 */
export const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Random String
 */
export const randStr = (length = 12) => {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
};

/**
 * Dot to Hy
 */
export const dotsToHyphens = (inputString) => {
  // Use the replace method with a regular expression to replace dots with hyphens
  const stringWithHyphens = inputString.replace(/\./g, "asrafulhaq");
  return stringWithHyphens;
};

/**
 * Hypens to Dots
 */
export const hyphensToDots = (inputString) => {
  // Use the replace method with a regular expression to replace hyphens with dots
  const stringWithDots = inputString.replace(/asrafulhaq/g, ".");
  return stringWithDots;
};

/**
 * Find Public ID
 */
export const getPublicId = (url) => {
  return url.split("/")[url.split("/").length - 1].split(".")[0];
};

/**
 * Create Slug
 */
export const createSlug = (title) => {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedTitle = title.replace(/[^\w\s]/gi, "").toLowerCase();

  // Replace spaces with hyphens
  const slug = cleanedTitle.replace(/\s+/g, "-");

  return slug;
};

/**
 * Generat Random Password
 */
export const generateRandomPassword = (length = 10) => {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
};

/**
 * Time Ago
 */
export const timeAgo = (date) => {
  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const WEEK = 7 * DAY;
  const MONTH = 30 * DAY;
  const YEAR = 365 * DAY;

  const timeElapsed = Date.now() - new Date(date).getTime();

  if (timeElapsed < MINUTE) {
    return `${Math.floor(timeElapsed / SECOND)} seconds ago`;
  } else if (timeElapsed < HOUR) {
    return `${Math.floor(timeElapsed / MINUTE)} minutes ago`;
  } else if (timeElapsed < DAY) {
    return `${Math.floor(timeElapsed / HOUR)} hours ago`;
  } else if (timeElapsed < WEEK) {
    return `${Math.floor(timeElapsed / DAY)} days ago`;
  } else if (timeElapsed < MONTH) {
    return `${Math.floor(timeElapsed / WEEK)} weeks ago`;
  } else if (timeElapsed < YEAR) {
    return `${Math.floor(timeElapsed / MONTH)} months ago`;
  } else {
    return `${Math.floor(timeElapsed / YEAR)} years ago`;
  }
};

/**
 * OPT
 */
export const createOTP = (length = 5) => {
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10); // Append a random digit (0-9)
  }

  return otp;
};

////////////////////////////////////////////////////
// my helpers functions
////////////////////////////////////////////////////

// /**
//  * Phone validation
//  * @param {*} mobile
//  * @returns
//  */
// export const isValidMobile = (mobile) => {
//   // Regular expression for mobile number validation
//   return /^(01|8801|\+8801)[0-9]{9}$/.test(mobile);
// };

// /**
//  * Email validation
//  * @param {*} email
//  * @returns
//  */
// export const isValidEmail = (email) => {
//   // Regular expression for a more comprehensive email validation
//   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//   return emailRegex.test(email);
// };

// /**
//  * create random unique ID
//  */
// // export const getRandomUserID = (length = 20) => {
// //   if (isNaN(length) || length < 1) {
// //     throw new Error("Invalid length. Length must be a positive integer.");
// //   }

// //   const characters =
// //     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
// //   const charactersLength = characters.length;
// //   let userID = "";

// //   for (let i = 0; i < length; i++) {
// //     const randomIndex = Math.floor(Math.random() * charactersLength);
// //     userID += characters.charAt(randomIndex);
// //   }

// //   return userID;
// // };

// /**
//  * create slug
//  */
// export const getProductSlug = (productName) => {
//   // Remove special characters and spaces, convert to lowercase
//   const cleanedName = productName.replace(/[^\w\s]/gi, "").toLowerCase();

//   // Replace spaces with hyphens
//   const slug = cleanedName.replace(/\s+/g, "-");

//   return slug;
// };

// // Example usage:
// //   const productName = "Awesome Product 123!";
// //   const productSlug = getProductSlug(productName);
// //   console.log(productSlug); // Output: "awesome-product-123"

// /**
//  * Time Ago function
//  */
// export const timeAgo = (timestamp) => {
//   const currentTime = Date.now();
//   const timeDifference = currentTime - timestamp;

//   // Define time units in milliseconds
//   const minute = 60 * 1000;
//   const hour = 60 * minute;
//   const day = 24 * hour;
//   const month = 30 * day;
//   const year = 365 * day;

//   if (timeDifference < minute) {
//     return "Just now";
//   } else if (timeDifference < hour) {
//     const minutesAgo = Math.floor(timeDifference / minute);
//     return `${minutesAgo} ${minutesAgo === 1 ? "minute" : "minutes"} ago`;
//   } else if (timeDifference < day) {
//     const hoursAgo = Math.floor(timeDifference / hour);
//     return `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
//   } else if (timeDifference < month) {
//     const daysAgo = Math.floor(timeDifference / day);
//     return `${daysAgo} ${daysAgo === 1 ? "day" : "days"} ago`;
//   } else if (timeDifference < year) {
//     const monthsAgo = Math.floor(timeDifference / month);
//     return `${monthsAgo} ${monthsAgo === 1 ? "month" : "months"} ago`;
//   } else {
//     const yearsAgo = Math.floor(timeDifference / year);
//     return `${yearsAgo} ${yearsAgo === 1 ? "year" : "years"} ago`;
//   }
// };

// /**
//  * Get public ID
//  */
// export const getPublicId = (url) => {
//   return url.split("/")[url.split("/").length - 1].split(".")[0];
// };
