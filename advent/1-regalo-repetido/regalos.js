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
//Test: findFirstRepeated([1, 3, 4, 5, 0, 1, 3, 0, 7]) Expected:1 , actual 0
const giftIds4 = [1, 3, 4, 5, 0, 1, 3, 0, 7]
const firstRepeatedId4 = findFirstRepeated(giftIds4)
console.log(firstRepeatedId4) // 1
//Test: findFirstRepeated([1, 10, 2, 10, 20, 50, 7, 0, 0, 7]) Expected:10 , actual 0
const giftIds5 = [1, 10, 2, 10, 20, 50, 7, 0, 0, 7]
const firstRepeatedId5 = findFirstRepeated(giftIds5)
console.log(firstRepeatedId5) // 10

function findFirstRepeated(gifts) {
  let repeatGift = []

  for (let i = 0; i < gifts.length; i++) {
    for (let j = i + 1; j < gifts.length; j++) {
      if (gifts[i] === gifts[j] && i !== j) {
        repeatGift.push({ "pos": j, "regalo": gifts[i] })
      }
    }
  }
  if (repeatGift.length == 0) {
    return -1
  } else {
   let gift = repeatGift[0]
    for (i = 1; i < repeatGift.length; i++) {
      if (repeatGift[i].pos < gift.pos) {
        gift = repeatGift[i]
      }
    }
    return gift.regalo
  }
}