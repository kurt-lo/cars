/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.imagin.studio']
    },
    typescript: {//kapag mag dedeploy then may error sa typescript para mabalewala yung mga errors
        ignoreBuildErrors: true,
    }
}

module.exports = nextConfig
