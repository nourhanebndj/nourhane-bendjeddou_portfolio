// Export statique : fonctionne sur Vercel, Netlify ET GitHub Pages.
// Pour GitHub Pages (sous-dossier), lance le build avec :
//   NEXT_PUBLIC_BASE_PATH=/nourhane-bendjeddou_portfolio npm run build
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
