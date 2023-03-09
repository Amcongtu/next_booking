/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGOOSE:"mongodb+srv://bookingapp:bookingapp@cluster0.sjx3gqy.mongodb.net/retryWrites=true&w=majority",
    JWT: "23453w45djkfghkxcvheuiyhtiaysdjkhkhjzhxckvm123aa",
    SERVER:"https://booingapp-n12.vercel.app"
    // SERVER:"http://localhost:3000"

  },
}

module.exports = nextConfig
