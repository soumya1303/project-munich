//import instagramCred from "../public/instagram";

const getInstaImages=async (maxCount)=>{

    //const {uri, token}=instagramCred;

    try {
        /*
        const resp = await fetch(`${uri}${token.accessTokenId}`, {
          method:"GET",
        });
        */

        const resp = await fetch(`${process.env.instagram_credentials.uri}${process.env.instagram_credentials.token.accessTokenId}`, {
          method:"GET",
        });

        if (!resp.ok){
          throw new Error("Instagram fetch API call failed.");
        }
      
        const {data} = await resp.json();
        
        if (!data){
          throw new Error("Instagram fetch No data found !");
        }

        const instaImgArr = data.filter((d)=>{
            return d.media_type==="IMAGE"
        });
        const instaImgArrReduced=[];
        var i=0;
        instaImgArr.forEach((e)=>{
        
          if (i<maxCount){
            instaImgArrReduced.push(e);
            i++;
          }
        })
        return instaImgArrReduced;
    
  } catch (error) {
      console.log(error.message);
      return []
  }
}

export default getInstaImages;