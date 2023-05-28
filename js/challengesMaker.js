class Challenges_list_Maker{
    constructor(title, url, level){
        this.title = title;
        this.url = url;
        this.level=level;
    }
}


//Make challenges pass title, url, level
const challenge1 = new Challenges_list_Maker("Abcdario", "./abcdario.html", "medium");
const challenge2 = new Challenges_list_Maker("Convert HTML Entities","./convert_html_entities.html", "easy");
const challenge3 = new Challenges_list_Maker("Pig Latin", "./abcdario.html", "medium");
const challenge4 = new Challenges_list_Maker("Sorted Union", "./sorted_union.html", "medium"  );
const challenge5 = new Challenges_list_Maker("Spinal Tap Case", "./spinal_tap_case.html", "medium" );
const challenge6 = new Challenges_list_Maker("Sum All Odd Fibonacci Numbers", "./sum_all_odd_fibonacci_numbers.html", "medium");
const challenge7 = new Challenges_list_Maker("Sum All Primes","./sum_all_primes.html", "easy" );
const challenge8 = new Challenges_list_Maker("Roman to Integer", "./roman_to_integer.html", "easy");
const challenge9 = new Challenges_list_Maker("Sign of the Product of an Array", "./sign_of_the_product_of_an_array.html", "easy");
const challenge10 = new Challenges_list_Maker("Caesars Cipher", "./caesars_cipher.html", "high" );
const challenge11 = new Challenges_list_Maker("Cash Register", "./cash_register.html", "high");
const challenge12 = new Challenges_list_Maker("Palindrome Checker", "./palindrome_checker.html", "high");
const challenge13 = new Challenges_list_Maker("Telephone Number Validator", "./palindrome_checker.html", "high");
const challenge14 = new Challenges_list_Maker("Smallest Common Multiple", "./smallest_common_multiple.html", "high");

const arrChallenges = [challenge1, challenge2, challenge3, challenge4, challenge5, challenge6, challenge7, challenge8, challenge9, challenge10, challenge11, challenge12, challenge13, challenge14];

export default arrChallenges;