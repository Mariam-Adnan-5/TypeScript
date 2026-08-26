/* 
Task 1 : build a pyramid of stars
i = counter of rows 
 s = counter of spaces
 j =counter of stars
 */

 let i: number, s: number, j: number;
 let rows: number =3; 
 
 for(i=1 ; i<=rows ; i++){ // loop for rows
    for(s=1 ;s<= rows-i ; s++)
        { process.stdout.write(" "); } // for loop for spaces
    for(j=1 ; j<=2*i-1 ; j++)
        { process.stdout.write("*"); } // for loop for stars
    process.stdout.write("\n"); // new line after each row

 }

