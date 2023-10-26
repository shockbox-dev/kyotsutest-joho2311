/** @type {import('next').NextConfig} */
const IsProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  compiler: {
    emotion: true,
  },
  swcMinify: true,
  assetPrefix: IsProd
    ? 'https://t-msg.co.jp/lp/kyotsutest-joho2311'
    : undefined,
}

module.exports = nextConfig
