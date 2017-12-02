// input: a string
// output: n/a
// specs: search for, insert, and delete entries

// create a directory
let Node = function() {
  this.keys = new Map();
  this.end = false;
};
Trie = new Map();


// add string to directory:
Trie.prototype.insert = function(str) {
  // iterate on every character of string
  for (var i = 0; i < str.length; i++) {
    addChar(str[i]);
  }

  var addChar = function(c) {
    // directory will create a folder for the first character of the string if it does not exist
    if (!this.has(c)) {
      this.set(c, new Map());
    }
    // proceed into folder and check the next character of the string
    this.get(c);
    // check if there is a folder for that character
    // create a folder for the character if it does not exist
    // proceed into the folder
    // repeat the folder creating / move into procees until the final character is reached
    // for the final character a folder will be created if it does not exist
    // either way the folder will be marked with a star to indicate the end of the string (word)
  };
};

// search for a string
  // iterate on each character of string starting at i equal to 0
  // if i is not found in directory then the string is not stored and is false
  // if i is found in directory proceed into folder for character at i
  // proceed to next iteration repeating lines 20-21
  // if on the final character a folder is found for it and there is a star indicating the end of a word
    // compare the full string to the word strings stored at start
      // if there is a match then it is truly stored
      // otherwise it is not stored and is false

// delete an entry
  // iterate on each character of string starting at i equal to 0
  // if character i is not found then the string is not valid
  // if character is found proceed into character folder
  // begin next iteration
  // repeat lines 30-32 until i is at last character of string
  // if character i is not found then the string is not valid
  // if a folder is found for character i then iterate through the recordings of words
  // if there is a match for string in recordings delete the match
  // if there are no more recorded words and the folder is empty delete the folder
  