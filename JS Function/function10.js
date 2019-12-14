//Write a JavaScript function which returns the n rows by n columns identity matrix.

//User defined
const n = 3;

function matrix(n) {

    for (i=0; i < n; i++) {
        for (j=0; j < n; j++) {
            if (i === j) {
                console.log(' 1 ');
            } else {
                console.log(' 0 ');
            }
        }
         console.log('----------');
    }
 }
matrix(n);
