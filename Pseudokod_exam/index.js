// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

function splitTheBill(summa, antalVänner, dricks)

    SET variabel dricksVärde = summa * dricks;
    SET variabel totalPayment = summa + dricksVärde;
    SET variabel individualPayment = totalPayment / antalVänner;

    return variabel individualPayment;

    SET variabel varjePersonSkaBetala = splitTheBill(..., ..., ...);
    PRINT "Varje person ska betala: " + variabel varjePersonSkaBetala.individualPayment + "kr";

end function
*/




// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*


function isValidWord(word, wordList) 
   return True om word finns i ordbok, annars False

end function


function isValidSwap(wordOne, wordTwo) 
    if (om längden av wordOne är inte lika som wordTwo) 
        return false;
    end if

        
    SET variabel differentLetterCount = 0;
    
    for (let i = 0; i < wordOne.length; i++) 
        if (word1[i] !== wordTwo[i]) 
            differentLetterCount++;
        end if
    end for

    return differentLetterCount === 1;

end function


function playPuzzle(startWord, endWord, wordList) 
    while (startWord !== endWord) 
        console.log(startWord);
        
        let swapWord = prompt("Ange ett ord:");
        
        if (!isValidWord(swapWord, wordList))
            console.log("Ogiltigt ord. Försök igen.");
            continue;
        end if
        
        if (!isValidSwap(startWord, swapWord))
            console.log("Ogiltigt steg. Du kan bara ändra ett tecken åt gången.");
            continue;
        end if
        
        startWord = swapWord;
    end while

    console.log("Grattis! Du löste pusslet. Det sista ordet:", startWord);
end function

SET variabel startWord = "EYE";
SET variabel endWord = "LID";
SET variabel wordList = ["EYE", "LID",..., ...., ...]

playPuzzle(startWord, endWord, wordList);

*/