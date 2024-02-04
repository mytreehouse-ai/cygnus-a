await import("./env.mjs");

const dockerBuild =
  process.env.NODE_ENV === "production" && process.env.DOCKER_BUILD === "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: dockerBuild ? "standalone" : undefined,
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
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
