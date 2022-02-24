var movies = [{
        title: "ted (2012)",
        desc: "The film tells the story ",
        image: "img/ted.jpg",
        like: 0
    },
    {
        title: "Hangover (2009)",
        desc: "The film tells the story .",
        image: "img/hangover.jpg",
        like: 0
    },
    {
        title: "The Avengers (2012)",
        desc: "The film tells the story .",
        image: "img/avengers.jpg",
        like: 0
    },
    {
        title: "Spiderman  (2017)",
        desc: " The film tells the story .",
        image: "img/spiderman.jpg",
        like: 0
    },
    {
        title: "Fifty Shades  (2015)",
        desc: " The film tells the story .",
        image: "img/grey.jpg",
        like: 0
    },
    {
        title: "The Lucky One (2012)",
        desc: "The film tells the story .",
        image: "img/luckyone.jpg",
        like: 0
    },
    {
        title: "The Conjuring (2013)",
        desc: "The film tells the story",
        image: "img/conjuring.jpg",
        like: 0
    },
    {
        title: "Drag Me To Hell (2009)",
        desc: "The film tells the story",
        image: "img/dragmetohell.jpg",
        like: 0
    }
];

function moviesPrint() {
    for (let val of movies) {
        document.getElementsByClassName("movie")[0].innerHTML += `
        <div class="  row col-sm-12 col-md-6 col-lg-4 m-4 bg-secondary rounded-3">
            <div class=" col-5 p-3">
                     <img class="m-2 offset-6"src="${val.image}"  height="200">
            </div>
    
                <div class=" col-7 position-relative">
                    <div class=" ">
                        <h3>${val.title}</h3>
                        <p class=" ">${val.desc} </p>
                    
                        <div class=" row likecontainer  position-absolute bottom-0 offset-5">
                            <h3 class="col-5 ">like</h3>
                            <button class="likeButton   col-4  rounded-circle fas fa-thumbs-up h3  "></button>
                            <div class= "col-3 moviesLike rounded-circle bg-success text-center h3">${val.like}</div>
                        </div>
                    </div>
                </div>
    
            
    
        </div>
    
    
    `
    };
}
moviesPrint()

var likeButton = document.getElementsByClassName("likeButton");



function liked(i) {
    movies[i].like += 1
    document.getElementsByClassName("moviesLike")[i].innerHTML = movies[i].like
}

function likedIt() {
    for (let i = 0; i < likeButton.length; i++) {
        likeButton[i].addEventListener("click", function() {
            liked(i)
        });


    }
}
likedIt()

var mostLikes = document.getElementsByClassName("mostL")[0];
var lessLikes = document.getElementsByClassName("lessL")[0]


function fromZero() {
    movies.sort((a, b) => {
        return a.like - b.like
    })
    document.getElementsByClassName("movie")[0].innerHTML = ""
    moviesPrint()
    likedIt()
}

lessLikes.addEventListener("click", fromZero)

function toZero() {
    movies.sort((a, b) => {
        return b.like - a.like
    })
    document.getElementsByClassName("movie")[0].innerHTML = ""
    moviesPrint()
    likedIt()
}
mostLikes.addEventListener("click", toZero)