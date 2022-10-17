//STEP 1
var favoriteMovies = ["Mersal","Bigil","Master","Kaththi","Vikram"]
window.console.log(favoriteMovies[1]);


//STEP 2
var movies = new Array(5);
movies[0]= "Mersal";
movies[1]= "Bigil";
movies[2]= "Master";
movies[3]= "Kaththi";
movies[4]= "Vikram";
window.console.log(movies[0]);


//STEP 3
var movies = new Array(5);
movies[0]= "Mersal";
movies[1]= "Bigil";
movies[2]= "Master";
movies[3]= "Kaththi";
movies[4]= "Vikram";
movies.splice(2,0,"M.S.Dhoni");
window.console.log(movies.length);


//STEP 4
var movies = [];
movies[0]= "Mersal";
movies[1]= "Bigil";
movies[2]= "Master";
movies[3]= "Kaththi";
movies[4]= "Vikram";
delete movies[0];
window.console.log(movies);

//STEP 5
var movies = [];
movies[0]= "Mersal";
movies[1]= "Bigil";
movies[2]= "Master";
movies[3]= "Kaththi";
movies[4]= "Vikram";
movies[5]= "M.S.Dhoni";
movies[6]= "End Game";
for(var i=0;i<movies.length;i++){
    window.console.log(i+1 + ":" + movies[i]+ "<br>");
}

//STEP 6
var movies = [];
movies[0]= "Mersal";
movies[1]= "Bigil";
movies[2]= "Master";
movies[3]= "Kaththi";
movies[4]= "Vikram";
movies[5]= "M.S.Dhoni";
movies[6]= "End Game";
var i;
for(i in movies){
    window.console.log(parseInt(i)+1 + ":" + movies[i]+ "<br>");
}

//STEP 7
var movies = [];
movies[0]= "Mersal";
movies[1]= "Bigil";
movies[2]= "Master";
movies[3]= "Kaththi";
movies[4]= "Vikram";
movies[5]= "M.S.Dhoni";
movies[6]= "End Game";
var i;
movies.sort();
for(i in movies){
    window.console.log(parseInt(i)+1 + ":" + movies[i]+ "<br>");
    //window.document.write(parseInt(i)+1 + ":" + movies[i]+ "<br>");
}

//STEP 8
var movies = [];
movies[0]= "Mersal";
movies[1]= "Bigil";
movies[2]= "Master";
movies[3]= "Kaththi";
movies[4]= "Vikram";
movies[5]= "M.S.Dhoni";
movies[6]= "End Game";
var leastFavMovies =[];
leastFavMovies[0]= "Rock";
leastFavMovies[1]= "John wick";
leastFavMovies[2]= "James Bond 007";

window.console.log("Movies I like:\n\n");
for(var i in movies){
    window.console.log(parseInt(i)+1 + ":" + movies[i]+ "<br>");
}
window.console.log("\n\n\n");


window.console.log("Movies I regret watching:\n\n");
for(i in leastFavMovies){
    window.console.log(parseInt(i)+1 + ":" + leastFavMovies[i]+ "<br>");
}




//STEP 9
var movies = [];
movies[0]= "Mersal";
movies[1]= "Bigil";
movies[2]= "Master";
movies[3]= "Kaththi";
movies[4]= "Vikram";
movies[5]= "M.S.Dhoni";
movies[6]= "End Game";
var leastFavMovies =[];
leastFavMovies[0]= "Rock";
leastFavMovies[1]= "John wick";
leastFavMovies[2]= "James Bond 007";

movies = movies.concat(leastFavMovies);
movies.sort();
window.console.log(movies.reverse());




//STEP 10

var movies = [];
movies[0]= "Mersal";
movies[1]= "Bigil";
movies[2]= "Master";
movies[3]= "Kaththi";
movies[4]= "Vikram";
movies[5]= "M.S.Dhoni";
movies[6]= "End Game";
var leastFavMovies =[];
leastFavMovies[0]= "Rock";
leastFavMovies[1]= "John wick";
leastFavMovies[2]= "James Bond 007";

movies = movies.concat(leastFavMovies);
movies.sort().reverse();
window.console.log(movies.slice(-1));
