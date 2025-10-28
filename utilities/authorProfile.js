const getAuthorProfile=async ()=>{

    try {
        const resp = await fetch(`${process.env.api_server_route}fetchAuthor`, {method:"GET"});
        if (!resp.ok){
        throw new Error("fetchCategories API didnot return a response");
        }
        const jsonData = await resp.json();
        if (!jsonData){
        throw new Error("fetchCategories API didnot return a valid response");
        }
        
        const authorProfie=jsonData.data;

        return authorProfie;

    } catch (error) {
        console.log(error.message);
        return {}
  }

}

export default getAuthorProfile;