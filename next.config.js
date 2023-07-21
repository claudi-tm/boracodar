/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "assets.vercel.com",
				port: "",
				pathname: "/image/upload/**",
			},
			{
				protocol: "https",
				hostname: "www.rocketseat.com.br",
				port: "",
				pathname: "/boracodar/_next/**",
			},
		],
	},
};
