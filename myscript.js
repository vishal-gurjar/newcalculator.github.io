

document.getElementById("total-amount").addEventListener("submit",computeAmount);

// const woodDiaPrice = {
//   360 : "2550",
//   370 : "2640",
//   390 : "2760",
//   410 : "2760",
//   432 : "2910",
//   487 : "3220"
// }

// const woodWorkHalfPeri = {
//   360 : 560,
//   370 : 570,
//   390 : 590,
//   410 : 640,
//   432 : 690,
//   487 : 775
// }
//
// const woodWorkSemiPeri = {
//   360 : 840,
//   370 : 855,
//   390 : 885,
//   410 : 960,
//   432 : 1035,
//   487 : 1160
// }



function getSelectedDiameter(){
  var selectedDiameter = document.getElementById("wood-diameter").value;
  //console.log(selectedDiameter);
  document.getElementById("temp").value = selectedDiameter;
}


function computeAmount(e){

  const woodDiaPrice = {
     360 : 2550,
     370 : 2640,
     390 : 2760,
     410 : 2760,
     432 : 2910,
     487 : 3220
   }
  const woodWorkHalfPeri = {
    360 : 560,
    370 : 570,
    390 : 590,
    410 : 640,
    432 : 690,
    487 : 775
  }

  const woodWorkSemiPeri = {
    360 : 840,
    370 : 855,
    390 : 885,
    410 : 960,
    432 : 1035,
    487 : 1160
  }

    ////////////////////////////////////////////////////////////////////////
    const cutting = Number(document.getElementById('cutting').value);
    const creasing = Number(document.getElementById('creasing').value);
    const width = Number(document.getElementById('width').value);
    const length = Number(document.getElementById('length').value);
    const totalWidth = width + 120;
    const totalLength = length + 250;
    //console.log(totalWidth);
    //console.log(totalLength);

    ////////////////////////////////////////////////////////////////////////
    // Total Wood Calculation

    const tempDiaValue = Number(document.getElementById('temp').value);
    //console.log(tempDiaValue);
    //console.log(woodWorkHalfPeri[tempDiaValue]);

    if( totalWidth < woodWorkHalfPeri[tempDiaValue] ){
      var woodPrice = (woodDiaPrice[tempDiaValue] * 1)*(totalLength/1000);
      console.log(woodPrice);
    }else if ( totalWidth >= woodWorkHalfPeri[tempDiaValue] && totalWidth <= woodWorkSemiPeri[tempDiaValue] ) {
      var woodPrice = (woodDiaPrice[tempDiaValue] * 1.5)*(totalLength/1000);
      console.log(woodPrice);
    }else if ( totalWidth > woodWorkSemiPeri[tempDiaValue]) {
      var woodPrice = (woodDiaPrice[tempDiaValue] * 2)*(totalLength/1000);
      console.log(woodPrice);
    }

    console.log(woodPrice);




    ////////////////////////////////////////////////////////////////////////

    //console.log(cutting,creasing,width,length);

    // Striping Calculation

    const stripping = Math.round(cutting * 0.35);
    document.getElementById('stripping').innerText = stripping;

    // Total Cutting Calculation

    const totalCutting = Math.round(((cutting+stripping)/1000)*600);
    document.getElementById('totalCutting').innerText = totalCutting;
    //console.log(totalCutting);

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

     const totalAmount = Math.round((totalCutting + totalCreasing + alluminiumSlug + rubberCalc + weldingCalc + fittingCalc + laserCutting + woodPrice));
     console.log(totalAmount);
    document.getElementById('totalamount').innerText = totalAmount;
















    e.preventDefault();
}
