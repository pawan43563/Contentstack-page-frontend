
export const apicall=async({url,obj})=>{
    try{
        let response=await fetch(url,obj);
        let data=await response.json() 
        return data.data
    }catch(error){
        console.log(error);
    }
}