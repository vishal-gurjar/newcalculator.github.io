

document.getElementById("total-amount").addEventListener("submit",computeAmount);

function computeAmount(e){

    const cutting = Number(document.getElementById('cutting').value);
    const creasing = Number(document.getElementById('creasing').value);
    const width = Number(document.getElementById('width').value);
    const length = Number(document.getElementById('length').value);

    console.log(cutting,creasing,width,length);

    // Striping Calculation

    const stripping = Math.round(cutting * 0.35);
    document.getElementById('stripping').innerText = stripping;

    // Total Cutting Calculation

    const totalCutting = Math.round(((cutting+stripping)/1000)*600);
    document.getElementById('totalCutting').innerText = totalCutting;
    console.log(totalCutting);

    // Total Creasing Calculation

    const totalCreasing = Math.round((creasing/1000)*400);
    document.getElementById('totalCreasing').innerText = totalCreasing;

    // ALLUMINIUM SLUG Calculation

    const alluminiumSlug = Math.round(((length/100) * (width/100)) * 14);
    document.getElementById('alluminiumSlug').innerText = alluminiumSlug;

     // RUBBER SLUG Calculation

     const rubberCalc = Math.round(((cutting/1000) + (creasing/1000))*290);
     document.getElementById('rubber').innerText = rubberCalc;

     // Welding Calculation

    const weldingCalc = Math.round((totalCutting/1000)*240);
    document.getElementById('welding').innerText = weldingCalc;


     // FITTING Calculation

    const fittingCalc = Math.round(((cutting + creasing)/1000) * 280);
    document.getElementById('fitting').innerText = fittingCalc;


     // LASER CUTTING Calculation

    const laserCutting = Math.round(((totalCutting + totalCreasing)/1000)*210);
    document.getElementById('lasercutting').innerText = laserCutting;


     // Total Amount Calculation






   
    






    e.preventDefault();
}