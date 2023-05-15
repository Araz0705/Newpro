const cedvel = document.getElementById("cedvel");
const conatiner=document.getElementById("conatiner")



fetch(" https://northwind.vercel.app/api/customers")
    .then((res) => res.json())
    .then((data) => {

        for (let i = 0; i < data.length; i++) {
            const tr = document.createElement("tr");
            tr.style.color="black";
            tr.style.backgroundColor="Lavender";
            tr.style.fontSize="20px"
            

            //sirketin adinin baslangici
            const td = document.createElement("td");
            td.style.paddingLeft="20px";
            td.innerText = data[i].companyName;
            tr.appendChild(td);
            cedvel.appendChild(tr);
            //sirketin adinin baslangicinin sonu

            //contactNamin baslangici
            const td1 = document.createElement("td");
            td1.innerText = data[i].contactName;
            td1.style.paddingLeft="20px";

            tr.appendChild(td1);
            //contactNamin sonu

            //citynin baslangici
            const td2 = document.createElement("td");
            td2.innerText = data[i].address.city;
            td2.style.paddingLeft="20px";
            tr.appendChild(td2);
            //citynin sonu

            //contrynin basligi
            const td3 = document.createElement("td");
            td3.innerText = data[i].address.country;
            td3.style.paddingLeft="20px";

            tr.appendChild(td3);
            //ciuntrynin sonu

            //phone basligi
            const td4 = document.createElement("td");
            td4.innerText = data[i].address.phone;
            td4.style.paddingLeft="20px";

            tr.appendChild(td4);
            //phonun sonu

           

            const info = document.createElement("button");
            const td5 = document.createElement("td");
            info.innerText = "Info";
            info.className = "edit";
            td5.className = "td6bck";
            td5.appendChild(info);
            tr.appendChild(td5);

            //kart yaratmaqin baslangici
            td5.addEventListener("click", function () {
                const ul=document.createElement("ul");
                ul.className="ulStyle"

                const li1=document.createElement("li");
                ul.appendChild(li1);
                conatiner.appendChild(ul);
                li1.innerText=data[i].id;


                const li2=document.createElement("li");
                ul.appendChild(li2);
                conatiner.appendChild(ul);
                li2.innerText=data[i].companyName;

                const li3=document.createElement("li");
                ul.appendChild(li3);
                conatiner.appendChild(ul);
                li3.innerText=data[i].contactName;

                const li4=document.createElement("li");
                ul.appendChild(li4);
                conatiner.appendChild(ul);
                li4.innerText=data[i].contactTitle;

                const li5=document.createElement("li");
                ul.appendChild(li5);
                conatiner.appendChild(ul);
                li5.innerText=data[i].contactTitle;

                const li6=document.createElement("li");
                ul.appendChild(li6);
                conatiner.appendChild(ul);
                li6.innerText=data[i].address.street;

                const li7=document.createElement("li");
                ul.appendChild(li7);
                conatiner.appendChild(ul);
                li7.innerText=data[i].address.city;

                const li8=document.createElement("li");
                ul.appendChild(li8);
                conatiner.appendChild(ul);
                li8.innerText=data[i].address.region;

                const li9=document.createElement("li");
                ul.appendChild(li9);
                conatiner.appendChild(ul);
                li9.innerText=data[i].address.postalCode;
                console.log(data[i].address.postalCode);

                const li10=document.createElement("li");
                ul.appendChild(li10);
                conatiner.appendChild(ul);
                li10.innerText=data[i].address.country;

                const li11=document.createElement("li");
                ul.appendChild(li11);
                conatiner.appendChild(ul);
                li11.innerText=data[i].address.phone;

            })

            //edit baslayir telefon nomresini deyismek
            const edit = document.createElement("button");
            const td6 = document.createElement("td");
            edit.innerText = "edit";
            edit.className = "edit";
            td6.className = "td6bck";
            td6.appendChild(edit);
            tr.appendChild(td6);

            td6.addEventListener("click", function () {
                let x = prompt("Deyiskliyi daxil edin");
                td4.innerText = x;
            })
            //edit bitir


            //delete baslayir cedvelin setrini silmek
            
            // const dlt = document.createElement("button");
            // dlt.innerText = "delete";
            // dlt.className = "deletePropertion";


            // const td7 = document.createElement("td");
            // td7.className = "dlt-row";
            // td7.appendChild(dlt);
            // tr.appendChild(td7);
            // td7.className = "movqe";


            //  td7.addEventListener("click", function () {
            //     tr.remove()


            //  })

           //delete 


        }



    })