function palindromChecker(strtext){
    //Convert the input to a string(in case it's a number) and lowercase it

    var changedstr=strtext.toString().toLowerCase();

    //Compare the changed string with its reverse
    return changedstr===changedstr.split('').reverse().join('');
}

//Test the function
console.log("List of Words and numbers to check-1")
console.log(palindromChecker("lala"));
console.log(palindromChecker("LAAL"));
console.log(palindromChecker("101"));
console.log(palindromChecker("madam"));
console.log(palindromChecker("101"));
console.log(palindromChecker("Null"));
console.log(palindromChecker("TINT"));


//Test the fucntion-2
console.log("List of Text Strings to check-2")
console.log(palindromChecker("Don't nod"));
console.log(palindromChecker("Step on no pets"));
console.log(palindromChecker("Sit on a potato pan, Otis"));

