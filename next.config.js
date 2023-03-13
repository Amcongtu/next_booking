/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGOOSE:"mongodb+srv://bookingapp:bookingapp@cluster0.sjx3gqy.mongodb.net/retryWrites=true&w=majority",
    JWT: "23453w45djkfghkxcvheuiyhtiaysdjkhkhjzhxckvm123aa",
    SERVER:"https://bookingapp-n12.vercel.app"
    // SERVER:"http://localhost:3000",

  },
}
module.exports = {
  async rewrites(){
    return [
      {
        source: "/api/:path*",
        destination:'http://localhost:3000/:path*'
      }
    ]
  }
}
module.exports = nextConfig
