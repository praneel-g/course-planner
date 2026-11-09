/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    // Wiki pages and course notes read their Markdown from disk when
    // rendered, so make sure the files ship with the server build.
    outputFileTracingIncludes: {
      "/**": ["./content/pages/*.md", "./content/courses/*.md"],
    },
  },
};

module.exports = nextConfig;
