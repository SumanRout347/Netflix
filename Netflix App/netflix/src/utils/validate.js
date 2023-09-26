
export const signupFieldValidator=(fullName,email,password)=>{
 const isNameValid=/^[A-Za-z]+((\s)?([A-Za-z])+)*$/.test(fullName)
 const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
 const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

 if(!isNameValid){
    return "Please enter a valid name"
 }
 if(!isEmailValid){
    return "Please enter a valid email"
 }
 if(!isPasswordValid){
    return "Please enter a valid password"
 }
 return null
}

export const signinFieldValidator=(email,password)=>{
    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if(!isEmailValid){
       return "Please enter a valid email"
    }
    if(!isPasswordValid){
       return "Please enter a valid password"
    }
    return null
   }