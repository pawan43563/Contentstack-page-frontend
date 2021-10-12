
export const apicall=async({url,obj})=>{
    try{
        let response=await fetch(url,obj);
        let data=await response.json() 
        if(data.error){
            return data
        }
        return data.data
    }catch(error){
        console.log(error);
    }
}