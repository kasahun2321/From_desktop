/*eslint-disable */
"use strict";
//let temp = [];
let library = [
    {
        title: "The Road Ahead",
        author: "Bill Gates",
        libraryID: 1254
    },
    {
        title: "Walter Isaacson",
        author: "Steve Jobs",
        libraryID: 4264
    },
    {
        title: "Mockingjay: The Final Book of The Hunger Games",
        author: "Suzanne Collins",
        libraryID: 3245
    }
];
// console.log(library);

/**
 * Creates an instance of Circle.
 *
 * @constructor
 * @author: moi
 * @param {number} r The desired radius of the circle.
 */
function addbook() {
    // let object={};
    let count = 0;
    let obj = {
        title: document.getElementById("bookname").value,
        author: document.getElementById("author").value,
        libraryID: document.getElementById("libID").value,
    };
    if(obj.title==="" && obj.title==="" && obj.libraryID==="")
    {
        alert("please enter the empty box")
    }
    
else{
    library.push(obj);
}
    //alert("book added");

 document.getElementById("bookadd").innerHTML="new book added \n"+obj;
    console.log(library);

}
/**
 * Creates an instance of Circle.
 *
 * @constructor
 * @author: moi
 * @param {number} r The desired radius of the circle.
 */
function showtitle() {
    //display
    let showbooktitle = [];
    for (let i = 0; i < library.length; i++) {
        showbooktitle[i] = library[i].title;
    }

    document.getElementById("display").innerHTML = showbooktitle.join("\n");


}
/**
 * Creates an instance of Circle.
 *
 * @constructor
 * @author: moi
 * @param {number} r The desired radius of the circle.
 */
function showauthors() {
    let showauthor = [];
    for (let i = 0; i < library.length; i++) {
        showauthor[i] = library[i].author;
    }

    document.getElementById("display").innerHTML = showauthor.join("\n");

}
/**
 * Creates an instance of Circle.
 *
 * @constructor
 * @author: moi
 * @param {number} r The desired radius of the circle.
 */
function showid() {
    let showauthor = [];
    for (let i = 0; i < library.length; i++) {
        showauthor[i] = library[i].libraryID;
    }

    document.getElementById("display").innerHTML = showauthor.join("\n");

}
//console.log(library)
/**
 * event handler to display library title scrambled by word size
 * @returns{undefined }
 */

function scramble()
{
    /**
     * get all the title
     * put all the words into array
     * find all word of different length and put each into own array
     * join each array back to string array of string 
     * join the array of string into single string with \n line breaks
     * display in the text area
     */

     const alltite=findtitle();
     const wordstringarray=null;
     const scramblestring=wordstringarray.join("\n");
     textarea.innerHTML=scramblestring;

}

/**
 * 
 * @param{array}accept array from library var
 * @returns{string}join all the array given and print string
 */


function scramble() {
  let allTitles = "";
  let tempArr = [];
  for (let i = 0; i < library.length; i++) {
    tempArr[i] = library[i].title;
  }
  tempArr.sort(function (a, b) {
    //this function sorts the titles aplphabetically and ignore upper case and lower case
    let x = a.toLowerCase();
    let y = b.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (y < x) {
      return 1;
    }
    return 0;
  });

  for (let j = 0; j < tempArr.length; j++) {
    let space = " ";

    allTitles += tempArr[j];
    allTitles = allTitles + space;
  }
  allTitles = allTitles.trim(); // trim all the space of allTitles

  allTitles = allTitles.split(" "); // convert allTitles into an array of words
  let wordsLength = allTitles.map((words) => words.length); // create a new array that contains the value of word's length
  wordsLength = wordsLength.sort((a, b) => a - b);
  wordsLength = wordsLength.filter(
    (value, index) => wordsLength.indexOf(value) === index // remove all the duplicate value inside the array
  );

  let sameWordLength = [];
  let scrambledTitles = "";
  for (let i = 0; i < wordsLength.length; i++) {
    sameWordLength = allTitles.filter(
      (words) => words.length === wordsLength[i] //create new arrays that contain all the words that have the same word length
    );
    scrambledTitles += sameWordLength.join(" "); //convert all the same word length arrays into a string
    scrambledTitles = scrambledTitles + "\r\n";
  }

  console.log(scrambledTitles);

  let textArea = document.getElementById("display");
  textArea.innerHTML = scrambledTitles;
}

console.log(scramble());