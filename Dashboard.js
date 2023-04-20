//
//access tocken validations
localStorage.getItem("access_token");
if(!localStorage.getItem("access_token"))
{
    alert("Login required")
    window.location.href="SignIn.html"
}
// targeting the main data ids via jquery
var city= $("#city");
var country= $("#country");
var countrycode= $("#countryCode");
var isp= $("#isp");
var lat= $("#lat");
var lon= $("#lon");
var organization= $("#organization");
var query= $("#query");
var region= $("#region");
var regionName= $("#regionName");
var status1= $("#status");
var timezone= $("#timezone");
var zip= $("#zip");
var as= $("#as");


 
 //input field validation
    

     $(".icon").click(()=>{
        window.location="Dashboard.html"
     })
    //    address generator api
  
// console.log(document.getElementById("inputIP").innerText;
  $("#navBtns").click(()=>{

   var ipInput= document.getElementById("inputIP").innerText;


   //check debuging
   console.log(ipInput);
   // api fetching  functionality

    fetch(`http://ip-api.com/json/${ipInput}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

city.text(`${data.city}`);

country.text(`${data.country}`);

countrycode.text(`${data.countryCode}`);

isp.text(`${data.isp}`);

lat.text(`${data.lat}`);

lon.text(`${data.lon}`);

organization.text(`${data.org}`);

query.text(`${data.query}`);

region.text(`${data.region}`);

regionName.text(`${data.regionName}`);

status1.text(`${data.status}`);

timezone.text(`${data.timezone}`);

zip.text(`${data.zip}`);

as.text(`${data.as}`);
// google map integration

console.log(`${data.lat } and ${data.lon}`)
var mapSrc=`https://maps.google.com/maps?q=${data.lat},${data.lon}&z=15&output=embed`;
document.getElementById("mapIntegration").src=mapSrc;
       
      });

      

     

   
  })

  //colapse button operations


$("#burgerBtn").click(()=>{
   
    $(".sideBar").css({
        display:"block",
       
    })
    $("body").css({
        overflow:"hidden"
    })
})
$(".cancleBtn").click(()=>{
    $(".sideBar").css({
        display:"none"
    })
    $("body").css({
        overflow:"scroll"
    })
})

$(".navBtns").click(()=>{
    localStorage.clear();
    window.location.href="SignUp.html"
})
 