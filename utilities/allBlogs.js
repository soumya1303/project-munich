const getAllBlogs=async (maxCount)=>{

    const blogList=[];

    try {

      const resp = await fetch(`${process.env.api_server_route}fetchBlogs`, {method:"GET"});
  
      if (!resp.ok){
        throw new Error("fetchBlogs API didnot return a response");
      }
      const jsonData = await resp.json();

      if (!jsonData){
        throw new Error("fetchBlogs API didnot return a valid response");
      }
      
      if (jsonData.data.length===0){
        throw new Error("fetchBlogs API didnot return any data");
      }

      if (maxCount){

            var i=0;
            jsonData.data.forEach((e)=>{
            if (i<maxCount)
            blogList.push(e);
            i++;

            }) 
      }
      else {
          jsonData.data.forEach((e)=>{
          blogList.push(e);
          })
      }

      return blogList;
    
  } catch (error) {
    console.log(error.message);
    return [];
  }

}

export default getAllBlogs;