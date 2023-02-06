// const hasMoreVowels = (str) =>{
//     vowelsCount = 0
//     constCount = 0
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             vowelsCount++
//         } else constCount++
//     }
// return `The number of vowels is ${vowelsCount}, and the number of consonants is ${constCount}.`
// }
// console.log(hasMoreVowels('quetsylsakatanengo'))

console.log('===============================')

const hasMoreVowels = word => {
    word = word.toLowerCase()
    let vowels = ['a','e','i','o','u']
    let vowelCount = 0
    for (i = 0; i < word.length; i++){
        if (vowels.includes(word[i]) ){
            vowelCount++
        }
    }
    // if (str.length / 2 <= vowelCount){
    //     return false
    
    return  word.length/2 < vowelCount
}
console.log(hasMoreVowels('Moose'))