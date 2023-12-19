export const checkDataValidation=(email, password)=>{

    const emailvalid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
    const passwordvalid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if(!emailvalid){
        return "Email ID Not Valid"
    }
    if(!passwordvalid){
        return "Password Invalid"
    }
    return null

}