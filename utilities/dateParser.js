const parseDate = (dtString)=>{
    const date = new Date(dtString);
    const formattedDate = date.toLocaleDateString("en-GB", {
        year:"2-digit",
        month:"short",
        day:"2-digit"
    });

    return ({
        day:formattedDate.slice(0,2),
        month:formattedDate.slice(3,7),
        year:formattedDate.slice(7,10)
    });

}

export default parseDate;