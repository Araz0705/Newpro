const form=document.getElementById("form");
const contactName=document.getElementById("contactName");
const city=document.getElementById("city");
const country=document.getElementById("country");
const phone=document.getElementById("phone");
console.log(contactName)
let arr=[];
form.addEventListener("submit", function (e) {

    let obj={
        contactName: "",
        city: "", 
        country: "", 
        phone: "",
    }

    obj.contactName=contactName.value

    


    // fetch("https://northwind.vercel.app/api/customers",{method: "POST"


})
    // .then(res=>res.json())
    // .then(data=>{
     
    // let obj={
    //     contactName: "",
    //     city: "", 
    //     country: "", 
    //     phone: "",
    // }

    // })


    
})