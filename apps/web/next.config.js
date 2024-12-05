/** @type {import('next').NextConfig} */

const DOCS_DOMAIN = process.env.DOCS_DOMAIN
console.log("DOCS_DOMAIN", DOCS_DOMAIN)
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/docs",
                destination: `${DOCS_DOMAIN}`,
            },
            {
                source: "/docs/:path+",
                destination: `${DOCS_DOMAIN}/:path+`,
            },
            {
                source: "/docs-static/_next/:path+",
                destination: `${DOCS_DOMAIN}/docs-static/_next/:path+`,
            },
        ];
    }
};

export default nextConfig;


