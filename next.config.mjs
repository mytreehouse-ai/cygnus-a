await import("./env.mjs");

const dockerBuild = process.env.DOCKER_BUILD === "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: dockerBuild ? "standalone" : undefined,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
        pathname: "/public/**",
      },
    ],
  },
};

export default nextConfig;
