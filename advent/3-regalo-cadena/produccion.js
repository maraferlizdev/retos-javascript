const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

function findNaughtyStep(original, modified) {
  // Code here
  for( const step of modified){
    if(!original.includes(step)) return step
  }
  return ''
}