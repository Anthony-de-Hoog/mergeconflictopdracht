const oldgreeting = require("./oldgreeting.js");
console.log("merge oefening leuk!")

oldgreeting.greet()


function basicHaiku()
{
    return ["Toward those short trees","Something struck me in the rear","They fly up so high."]
}
//zet hier je haiku functie neer, zie https://github.com/progsen/haikugitopdracht voor ideeen

function student1Haiku()
{
    return ["They call me Sokka","That is in the watertribe","I am not a oaf."]
}

haikus = [
    basicHaiku()
    student1Haiku()
]

function randomHaiku()
{

    let i = Math.floor(Math.random(haikus.length));
    return haikus[i];
}

function start()
{
    console.log("starting main")
    
    console.log(randomHaiku())

}

start()