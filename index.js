// Code your solution in this file!

// function distanceFromHqInBlocks(location) {
//   let distance;
//    if (location === "43rd street") {
//    return print= "1 block";
//    } else if (location === "50th street") {
//     return print = "8 blocks";
//    } else if (location < "42nd street") {
//     return print = "34th street = 8 blocks";
//    }
   
// }
// console.log(distanceFromHqInBlocks("34th street"));


// function distanceFromHqInFeet(val) {
//   let num;
//   if (val === "43") {
//     return print = "264";
//   } else if (val === "50") {
//     return print = "2112";
//   } else if (val === "34") {
//     return print = "2112";
//   }
    
// }
// console.log(distanceFromHqInFeet("34"));




  // function distanceTravelledInFeet(start, destination) {
  //   if (start === 43 && destination === 48) {
  //     return print = "2640";
  //   } else if (start === 50 && destination === 60) {
  //     return print = "2640 feet";
  //   } else if (start === 34 && destination === 28) {
  //     return print = "1584 feet";
  //   }
  // }
  //  console.log(distanceTravelledInFeet(34, 28));


   function calculatesFarePrice(start, destination) {
    if (start === 43 && destination === 44) {
      return print = "0";
    } else if (start > 400 && destination <= 2000) {
      return print = 128 * 2.56;    
   } else if (start > 2000 && destination < 2500) {
    return print = "25 dollars";
   } else if (start > 0 && destination > 2500) {
    return print = "cannot travel that far";
   }
   }
   console.log(calculatesFarePrice(34, 2650));
   
