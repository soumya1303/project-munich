const getBlogByBlogId=async (blogId)=>{

    try {

      const resp = await fetch(`${process.env.api_server_route}fetchBlog?blogId=${blogId}`, {method:"GET"});
  
      if (!resp.ok){
        throw new Error("fetchBlog API didnot return a response");
      }
      const jsonData = await resp.json();

      if (!jsonData){
        throw new Error("fetchBlog API didnot return a valid response");
      }
      
      if (!jsonData.data){
        throw new Error("fetchBlog API didnot return any data");
      }

      return jsonData.data;
    
  } catch (error) {
    console.log(error.message);
    return ;
  }

}

export default getBlogByBlogId;