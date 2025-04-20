let oyuncuSkor = 0;
let bilgisayarSkor = 0;

const oyuncuSkorElementi = document.getElementById("oyuncuskor");
const bilgisayarSkorElementi = document.getElementById("bilgisayarskor");
const kazananElementi = document.getElementById("kazanan");

const butonlar = document.querySelectorAll("button");
const secimler = ["taş","kağıt","makas"];

butonlar.forEach( buton => {

    buton.addEventListener("click", () => {

        const oyuncuSecimi = buton.id;
        const bilgisayarSecimi = secimler[Math.floor(Math.random() * 3)];

        if(oyuncuSecimi === bilgisayarSecimi){

            kazananElementi.innerHTML = "<b> BERABERE ! </b>"; 
        }
        else if( (oyuncuSecimi === "taş" && bilgisayarSecimi === "makas") ||
                 (oyuncuSecimi === "kağıt" && bilgisayarSecimi === "taş") ||
                 (oyuncuSecimi === "makas" && bilgisayarSecimi === "kağıt") ){

                    oyuncuSkor++;
                    kazananElementi.innerHTML = "KAZANAN: <b> SİZ ! </b><br><br>" + oyuncuSecimi.toUpperCase() + "(Oyuncu Seçimi), " + bilgisayarSecimi.toUpperCase() + "'ı (Bot Seçimi) yendi.";
                 }
        else{

            bilgisayarSkor++;
            kazananElementi.innerHTML = "KAZANAN: <b> BOT ! </b><br><br>"+ bilgisayarSecimi.toUpperCase() + "(Bot Seçimi), " + oyuncuSecimi.toUpperCase() + "'ı (Oyuncu Seçimi) yendi.";
        }

        oyuncuSkorElementi.textContent = oyuncuSkor;
        bilgisayarSkorElementi.textContent = bilgisayarSkor;
    });
});