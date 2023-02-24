/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGOOSE:"mongodb+srv://bookingapp:bookingapp@cluster0.sjx3gqy.mongodb.net/retryWrites=true&w=majority",
    JWT: "23453w45djkfghkxcvheuiyhtiaysdjkhkhjzhxckvm123aa",

  },
}

module.exports = nextConfig
