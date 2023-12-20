const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// // 'tren' SÍ porque sus letras están en 'tronesa'
// // 'oso' SÍ porque sus letras están en 'tronesa'
// // 'pelota' NO porque sus letras NO están en 'tronesa'


const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

manufacture(gifts2, materials2) // ["puzzle"]

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

manufacture(gifts3, materials3) // []

function manufacture(gifts, materials) {
    let regalos=[]
    let regalo=''
    for(let gift in gifts){
        regalo=''
        for(let i=0;i<gifts[gift].length;i++){
            // console.log(i,gifts[gift][i]);
            for(let j=0;j<materials.length;j++){
                 console.log(i,gifts[gift][i],gifts[gift][i]===materials[j],j,materials[j]);
                if (gifts[gift][i]===materials[j] ) {
                    regalo+=gifts[gift][i]
                    
                }
            }
        }
        // console.log(regalo);
       if(regalo===gifts[gift]){
        regalos.push(gifts[gift])
        
       }
    }
     return console.log(regalos);
}