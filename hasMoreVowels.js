const hasMoreVowels = (str) =>{
    vowelsCount = 0
    constCount = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelsCount++
        } else constCount++
    }
return `The number of vowels is ${vowelsCount}, and the number of consonants is ${constCount}.`
}
console.log(hasMoreVowels('quetsylsakatanengo'))