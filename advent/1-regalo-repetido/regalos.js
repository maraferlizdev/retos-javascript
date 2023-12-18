
const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5

function findFirstRepeated(gifts) {
  let repeatGift=[]
  let gift=-1;

    for (let i=0; i<gifts.length ; i++  ){
        for(let j=i+1; j<gifts.length; j++){
            if(i===j){
                j=i+1
                
            }else if(gifts[i]===gifts[j]){
                repeatGift.push({"pos":j,"regalo":gifts[i]})
            }
        } 
    }
   
   for(let i =0; i<repeatGift.length; i ++){
    for (let j = 0; j < repeatGift.length; j++) {
        if(repeatGift[i].regalo<repeatGift[j].regalo){
            gift = repeatGift[i].regalo
        }else{
            gift = repeatGift[j].regalo
        }   
    }
   }
        return gift
  }