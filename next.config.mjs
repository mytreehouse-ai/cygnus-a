await import("./env.mjs");

const dockerBuild =
  process.env.NODE_ENV === "production" && process.env.DOCKER_BUILD === "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: dockerBuild ? "standalone" : undefined,
};

export default nextConfig;
