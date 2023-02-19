import { IMovie } from './models/IMovie';

import { getThemSearchedMovies } from './services/movieService';

let movieWrapper: HTMLDivElement = document.getElementById("movie-container") as HTMLDivElement; 

const preBtn: HTMLButtonElement = document.querySelector("pre-btn") as HTMLButtonElement;
const nxtBtn: HTMLButtonElement = document.querySelector("nxt-btn") as HTMLButtonElement;


function createMoviesOnDOM(movieObject: IMovie[]) {
    
    movieWrapper.innerHTML = "";
    
    for(let i = 0; i < movieObject.length; i++) {
        let movieContainer: HTMLDivElement = document.createElement("div") as HTMLDivElement;
        let movieTitle: HTMLHeadingElement = document.createElement("h3") as HTMLHeadingElement;
        let movieImg: HTMLImageElement = document.createElement("img") as HTMLImageElement;
        let btnWrapper: HTMLDivElement = document.createElement("div") as HTMLDivElement; 
        let movieBtn: HTMLButtonElement = document.createElement("button") as HTMLButtonElement;
        let watchBtn: HTMLButtonElement = document.createElement("button") as HTMLButtonElement;


        movieContainer.classList.add("movie-box");
        btnWrapper.classList.add("btn-wrapper");
        movieBtn.classList.add("button-32");

        movieBtn.innerText = "Imdb";
        watchBtn.innerText = "Add to watchlist";

        btnWrapper.appendChild(watchBtn);
        btnWrapper.appendChild(movieBtn);

        
        movieTitle.textContent = movieObject[i].Title;
        movieImg.setAttribute("src", movieObject[i].Poster);
        movieImg.setAttribute("alt", movieObject[i].Title);
        
        movieContainer.appendChild(movieTitle);
        movieContainer.appendChild(movieImg);
        movieContainer.appendChild(btnWrapper);
        movieWrapper.appendChild(movieContainer);
    }
}

const replaceWhiteSpaces = (movieSearch = "") => {
    let res: string = "";
    const { length } = movieSearch;
    for (let i = 0; i < length; i++) {
        const char: string = movieSearch[i];
        if(!(char === " ")) {
            res += char;
        } else {
            res += "%20";
        };
    };
    return res;
}

(document.getElementById("SearchForm") as HTMLFormElement).addEventListener("submit", async (e: SubmitEvent)=> {
    e.preventDefault();
    let searchText: string = (document.getElementById("input-search") as HTMLInputElement).value.toLocaleLowerCase();
    let movies: IMovie [] = await getThemSearchedMovies(replaceWhiteSpaces(searchText));
    
    createMoviesOnDOM(movies);
});

let inputShit: HTMLInputElement = document.getElementById("input-search") as HTMLInputElement;

// inputShit.addEventListener("input", async()=> {
//     if (inputShit.value.length === 3) {
//         let searchText: string = inputShit.value.toLocaleLowerCase();
//         let movies: IMovie [] = await getThemSearchedMovies(replaceWhiteSpaces(searchText));
//         createMoviesOnDOM(movies);

//     } 
// });
