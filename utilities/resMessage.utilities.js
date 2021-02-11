//takes res error and returns it into a readable format
export const resMessage = (error) => {
    return(
    (error.response && 
         error.response.data && 
         error.response.data.message) || 
         error.message || 
         error.toString
         )
 }