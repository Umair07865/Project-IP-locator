// sign up page credentials



$("#SignUPbtn").click(()=>{
   
    //validations
 var name=document.getElementById("SinupEmail").value;
 var password=document.getElementById("SignUpPass").value;
 
 //check validation for password
 
 if(password=="" )
 {
   
   
    $("#SignUpPass").css({
        backgroundColor:"rgb(255, 53, 3)",
    })
    setTimeout(() => {
        $("#SignUpPass").css({
            backgroundColor:"rgb(10 60 51)",
        })
    }, 2000);
 }
 
 if(name=="" )
 {
    $("#SignUPbtn").css({
       
    })
   
    $("#SinupEmail").css({
        backgroundColor:"rgb(255, 53, 3)",
    })
    setTimeout(() => {
        $("#SinupEmail").css({
            backgroundColor:"rgb(10 60 51)",
        })
    }, 2000);
 }

 // passward validation

if(name!="" && password!="")
{
    localStorage.setItem("name" , name);
    localStorage.setItem("password" , password);
    
    alert("seccessfully added!")
    setTimeout(() => {
        window.location.href="SignIn.html";
        
    }, 2000);
}
else{

    alert("empty fields!")
    

}


})
// sign in page validation credentials


var checkSubmitBtn= $("#SignInCheck");

checkSubmitBtn.click(()=>{
    var nameCredential= localStorage.getItem("name");

    var passCredentials= localStorage.getItem("password");
    let user= document.getElementById("SignInName") ;
let pass = document.getElementById("SignInPass");

    if(user.value== nameCredential && pass.value == passCredentials)
    {
        alert("Access granted");
        //dashboard validation to make the root page as a sign in page

       localStorage.setItem("access_token", true);

        window.location.href="Dashboard.html"
    }
    else{
       
        if(user.value=="" || user.value!= nameCredential )
        {
            user.style.backgroundColor="rgb(255, 53, 3)"

            setTimeout(() => {
                user.style.backgroundColor="black"
            }, 2000);

            alert("invalid Username");

        }
        if(pass.value== "" || pass.value!=passCredentials )
        {
            pass.style.backgroundColor="rgb(255, 53, 3)"
            setTimeout(() => {
                pass.style.backgroundColor="black"
            }, 2000);
            alert("invalid Password")

        }
      
       
    }
})

$("#SignedInbtn").click(()=>{
    localStorage.clear();
})



