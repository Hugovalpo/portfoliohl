/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "fr", "es"],
    defaultLocale: "en",
    localeDetection: false,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
