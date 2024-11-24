

// Așteptăm ca DOM-ul să fie gata înainte de a accesa elementele
document.addEventListener("DOMContentLoaded", () => {
    

    // Selectăm elementele din DOM
    const calculateBtn = document.getElementById("calculateBtn");
    const startTimeInput = document.getElementById("startTime");
    const endTimeInput = document.getElementById("endTime");
    const resultDiv = document.getElementById("result");

 


    // Adăugăm un eveniment click pe buton
    calculateBtn.addEventListener("click", () => {


        // Obținem valorile input-urilor
        const startTime = startTimeInput.value;
        const endTime = endTimeInput.value;


        if (!startTime || !endTime) {
            resultDiv.textContent = "Te rog să introduci ambele ore!";
            
            return;
        }

        // Calculăm diferența dintre ore
        const start = new Date(`1970-01-01T${startTime}:00`);
        const end = new Date(`1970-01-01T${endTime}:00`);

      

        let difference = end - start;
        if (difference < 0) {
            difference += 24 * 60 * 60 * 1000; // Adăugăm 24 de ore pentru ture peste noapte
        }

        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));


        // Afișăm rezultatul în DOM
        resultDiv.textContent = `Ai muncit ${hours} ore și ${minutes} minute.`;
    });
});
