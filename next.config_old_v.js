const nextConfig = ()=>{

    return(
      {
        reactStrictMode: true,
        crossOrigin: 'anonymous',
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'scontent.cdninstagram.com',
              port: '',
              pathname: '/v/t51.29350-15/**',
            }
          ],
        },
      })

}

export default nextConfig;

