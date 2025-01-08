console.log("hello world!")

// ACCESS THE  ELEMENTS IN THE HTML

let nameValueInput = document.querySelector("#nameValue")


const QRcodeBtn = document.getElementById("QRcodeBtn")

const imgElementContainer =  document.getElementById("qrcode_container")

const imgElement = document.getElementById("QRimg")



// THE FUNCTION TO SET THE INPUT NAME TO END OF THE URL AND GET THE QR CODE IMG FROM API AND SET TO THE HTML IMG ELEMENT

async function callApi(){
    try {
        if(nameValueInput.value.length > 0){
            nameValueInput.classList.remove("errInput")
            let res = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${nameValueInput.value}`)
            imgElement.src = res.url
            if(res.status == 200){
                imgElementContainer.setAttribute("data-name","active")
            }
        }else{
            nameValueInput.classList.add("errInput")
        }
    }

    catch(error){
        console.log(error)
    }
}

QRcodeBtn.addEventListener("click",callApi)

