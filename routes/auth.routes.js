const authController=require("../controllers/auth.controllers");
const {authSign}=require("../middelware/index")
module.exports=(app)=>{

    /*
        POST /orderService/api/v1/signup
    */
    app.post("/orderService/api/v1/signup",[authSign.signUp],authController.signUp);
    
     /*
        POST /orderService/api/v1/signin
    */
    app.post("/orderService/api/v1/signin",[authSign.signIn],authController.signIn)

}