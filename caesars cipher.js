function rot13(str) {
    //Object to look up the index of alphabets
    let alphIndex = {
        'A' : 1, 'B' : 2, 'C' : 3, 'D' : 4, 'E' : 5,
		'F' : 6, 'G' : 7, 'H' : 8, 'I' : 9, 'J' : 10,
		'K' : 11, 'L' : 12, 'M' : 13, 'N' : 14, 'O' : 15,
		'P' : 16, 'Q' : 17, 'R' : 18, 'S' : 19, 'T' : 20,
		'U' : 21, 'V' : 22, 'W' : 23, 'X' : 24, 'Y' : 25, 'Z' : 26
    };

    //Object to look up corresponding look up after shifting
    let alphShift = {
        0 : 'Z', 1 : 'A', 2 : 'B', 3 : 'C', 4 : 'D', 5 : 'E',
		6 : 'F', 7 : 'G', 8 : 'H', 9 : 'I', 10 : 'J',
		11 : 'K', 12 : 'L', 13 : 'M', 14 : 'N', 15 : 'O',
		16 : 'P', 17 : 'Q', 18 : 'R', 19 : 'S', 20 : 'T',
		21 : 'U', 22 : 'V', 23 : 'W', 24 : 'X', 25 : 'Y'
    };

    let infStr = [];
    let decString = [];
    //let decipher = '';
    for (const letter of str) {
        if (letter != ' ') {
            //console.log(letter);
            //console.log(alphIndex[letter]);
            let infIndex = (alphIndex[letter] - 13 + 26) % 26;
            //console.log(infIndex);
            
            infStr.push(alphShift[infIndex]);
            //decipher = decipher + alphShift[infIndex];

            //console.log(decipher);
        } else {
            //decipher += ' '
            infStr.push(' ');
        }
    }

    console.log(infStr);
    decString = infStr.join('');
    console.log(decString);
    return decString;

  }
  
  rot13("SERR PBQR");