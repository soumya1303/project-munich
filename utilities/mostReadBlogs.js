const getMostReadBlogs=async (maxCount)=>{

    const blogList=[];

    try {

        const resp = await fetch(`${process.env.api_server_route}fetchMostRead?limit=${maxCount}`, {method:"GET"});
    
        if (!resp.ok){
            throw new Error("fetchMostRead API didnot return a response");
        }
        const jsonData = await resp.json();

        if (!jsonData){
            throw new Error("fetchMostRead API didnot return a valid response");
        }
        
        if (jsonData.data.length===0){
            throw new Error("fetchMostRead API didnot return any data");
        }

        jsonData.data.forEach((e)=>{blogList.push(e);
        })

        return blogList;
    
  } catch (error) {
        console.log(error.message);
        return [];
  }

}

export default getMostReadBlogs;