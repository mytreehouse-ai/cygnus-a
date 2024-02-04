await import("./env.mjs");

const dockerBuild =
  process.env.NODE_ENV === "production" && process.env.DOCKER_BUILD === "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

export default nextConfig;
