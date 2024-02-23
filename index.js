const inputPropertyName=document.querySelector(".input-property-name");
const inputColor=document.querySelector(".input-color");
const inputRent=document.querySelector(".input-property-rent");

inputPropertyName.addEventListener("input", ()=>{
    if(inputPropertyName.value){
        document.querySelector(".property-name").textContent=inputPropertyName.value.toUpperCase();

        if(window.innerWidth<=700){
            document.querySelector(".card").style.height="20rem"
            document.querySelector(".card").style.opacity="1"
        }
        else{
            document.querySelector(".card").style.height="25rem"
            document.querySelector(".card").style.opacity="1"
        }

    }
    else{
        document.querySelector(".card").style.height="0rem"
        document.querySelector(".card").style.opacity="0.6"
    }

})

inputRent.addEventListener("input", ()=>{
    if(inputRent.value){
        const rent=document.querySelector(".card-inner-frame-rent");
        rent.style.width="auto";
        rent.style.padding="0.6rem";
        rent.style.transform="translateX(0px)";
        rent.style.opacity="1";
        document.querySelector(".base-rent").textContent=`₩ ${inputRent.value}`;

        setTimeout(()=>{
            const comboRent=document.querySelector(".combo-rent");
            comboRent.textContent=`₩ ${inputRent.value * 2}`;
            sideSlide(comboRent);
        },500);

        setTimeout(()=>{
            const oneHouse=document.querySelector(".one-house");
            sideSlide(oneHouse);
            oneHouse.textContent=`₩ ${inputRent.value * 3}`;
        },600);

        setTimeout(()=>{
            const twoHouse=document.querySelector(".two-house");
            sideSlide(twoHouse);
            twoHouse.textContent=`₩ ${Math.floor((inputRent.value * 3) * 1.5)}`;
        },700);

        setTimeout(()=>{
            const threeHouse=document.querySelector(".three-house");
            sideSlide(threeHouse);
            threeHouse.textContent=`₩ ${Math.floor((inputRent.value * 3) * 2.5)}`;
        },800);

        setTimeout(()=>{
            const fourHouse=document.querySelector(".four-house");
            sideSlide(fourHouse);
            fourHouse.textContent=`₩ ${Math.floor((inputRent.value * 3)  * 3.5)}`;
        },900);

        setTimeout(()=>{
            const hotel=document.querySelector(".hotel");
            sideSlide(hotel);
            hotel.textContent=`₩ ${Math.floor((inputRent.value * 3)  * 4.5)}`;
        },1000);

        setTimeout(()=>{
            document.querySelector(".straight-line").style.transform="translateY(0px)";
            document.querySelector(".straight-line").style.opacity="1";
        },1100);

        setTimeout(()=>{
            const houseCost=document.querySelector(".house-cost");
            sideSlide(houseCost);
            if(inputRent.value>=70){
                houseCost.textContent=`₩ 200`;
            }
            else if (inputRent.value<70 && inputRent.value>=40){
                houseCost.textContent=`₩ 100`;
            }
            else{
                houseCost.textContent=`₩ 50`;
            }
        },1600);

        setTimeout(()=>{
            const hotelCost=document.querySelector(".hotel-cost");
            sideSlide(hotelCost);
            if(inputRent.value>=70){
                hotelCost.textContent=`₩ 200`;
            }
            else if (inputRent.value<70 && inputRent.value>=40){
                hotelCost.textContent=`₩ 100`;
            }
            else{
                hotelCost.textContent=`₩ 50`;
            }
        },1600);
       
    }

})

function sideSlide(rentType){
    rentType.style.opacity="1";
    rentType.style.transform="translateX(0px)";
}


inputColor.addEventListener("input",()=>{
    document.querySelector(".input-section-inputcolor").style.backgroundColor=inputColor.value;
    document.querySelector(".card-inner-frame-title").style.backgroundColor=inputColor.value;
    document.querySelector(".download-image").style.backgroundColor=inputColor.value;
})

document.querySelector(".reset-btn").addEventListener("click",()=>{
    window.location.reload();
})




// Downloading Image

function downloadURI(uri, name) {
    const link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


function downloadImage() {
    const divToCapture = document.querySelector('.card');
    divToCapture.style.boxShadow="none";
  
    html2canvas(divToCapture).then(function (canvas) {
      const imageData = canvas.toDataURL('image/png');
      downloadURI(imageData, `${inputPropertyName.value}.png`);
    });

    divToCapture.style.pointerEvents="none";

    if(window.innerWidth>700){
        if(window.innerWidth>1200){
            divToCapture.style.transform="perspective(1900px) rotateY(400deg) translateX(-700px) scale(0.9)";
        }
    
        else if(window.innerWidth>500 && window.innerWidth<1200){
            divToCapture.style.transform="perspective(1900px) rotateY(400deg) translateX(-400px) scale(0.9)";
        }
    
        divToCapture.style.transition="0.7s ease-in-out"
        document.querySelector(".left-side").style.opacity="0"
        document.querySelector(".left-side").style.transform="translateX(400px)"
        document.querySelector(".left-side").style.pointerEvents="none"
        document.querySelector(".message").style.display="block"
        document.querySelector(".message").style.opacity="1"
        document.querySelector(".message").style.transform="translateX(0px)"
    }

  }

