const getAllCategories=async ()=>{

    const categoryList=[];

    try {
        const resp = await fetch(`${process.env.api_server_route}fetchCategories`, {method:"GET"});
        if (!resp.ok){
        throw new Error("fetchCategories API didnot return a response");
        }
        const jsonData = await resp.json();
        if (!jsonData){
        throw new Error("fetchCategories API didnot return a valid response");
        }
        if (jsonData.data.length===0){
        throw new Error("fetchCategories API didnot return any data");
        }
        
        jsonData.data.forEach((e)=>{
        categoryList.push(e);
        });
        return categoryList;

  } catch (error) {
    console.log(error.message);
    return [];
  }

}

export default getAllCategories