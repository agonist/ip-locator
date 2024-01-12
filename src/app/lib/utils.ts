export const appBaseUrl = () => {
  if (process.env.VERCEL_ENV === "production") {
    return `https://${process.env.VERCEL_URL}`;
  } else if (
    process.env.VERCEL_ENV === "preview" ||
    process.env.VERCEL_ENV === "development"
  ) {
    return `https://${process.env.VERCEL_URL}`;
  } else {
    return "http://localhost:3000";
  }
};
