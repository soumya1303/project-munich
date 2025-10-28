const {PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER}=require("next/constants");

const NextConfig= (phase)=>{

  if (phase===PHASE_DEVELOPMENT_SERVER){

    return(
      {
        env:{
          mongo_conn_str:"mongodb://127.0.0.1:27017/",
          mongo_schema:"blogDB",
          host_server:"http://localhost:3000",
          api_server_route:"http://localhost:3000/api/",
          facebook_share_url:"https://www.facebook.com/sharer/sharer.php?u=",
          instagram_credentials:{
            uri:"https://graph.instagram.com/me/media?fields=id,media_type,media_url&access_token=",
            token:{
                  facebookDevAppName:"itswanderfullife-IG",
                  facebookDevAppId:1088376610133731,
                  connectedInstagramAccount:"la_casa_no.2",
                  accessTokenId:"IGAAPd3206luNBZAE8wZAExVdkFoZA19YOHhJQUtRNkVoY2ZAsUGJDam95em5JalNxTUNVTUFNSlBfSHNjLU0wWjRneXdHV3g1eklocHhyQnZANc2MtZAWxTSnpEcUc0WWlKUlFmQ0NqZAVlBYTR6RTFRaEVZAU1p6VENvRzFSMGt2eE1aawZDZD",
                  accessTokenGenerationDate:"12-09-2025"
                  }
          }
        },
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
  
}

module.exports= NextConfig;
