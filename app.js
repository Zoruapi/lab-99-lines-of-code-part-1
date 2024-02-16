/* List of friends that will "Sing the song" */
var friends = ['Pedro', 'Gabriel', 'Andrea', 'Stevan', 'Sam'];

/* Select each friend turn to sing */
for (var i = 0; i < friends.length; i++) {
    
    console.log(friends[i].toUpperCase() + ':');
    
    /* Friend singing each line of the song */
    for (var j = 99; j != 0; j--) {

        if (j == 1) {
            console.log(j + ' lines of code in the file, ' + j + ' lines of code; ' 
                + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file');
        } else {
            console.log(j + ' lines of code in the file, ' + j + ' lines of code; ' 
                + friends[i] + ' strikes one out, clear it all out, ' + (j - 1) + ' lines of the code in the file');
        
        }
    }
    
}
