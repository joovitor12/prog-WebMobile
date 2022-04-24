$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    })
})


const url = "https://api.github.com/users/joovitor12/repos";
let repos = [];

const listaRepos = document.getElementById("cards");

function gerarListaRepos() {
    listaRepos.innerHTML = "";
    for (let i = 0; i < repos.length; ++i) {
        const li = document.createElement("li");
        li.classList.add("card");
        if (repos[i].description == null) {
            repos[i].description = "";
        }
        if (repos[i].language == null) {
            repos[i].language = "README";
        }
        li.innerHTML = `
            <h2>${repos[i].name}</h2>    
            <p>Linguagem: ${repos[i].language}</p>
            <p>⭐ ${repos[i].stargazers_count}</p>
          `;
        li.onclick = (event) => {
            window.open(repos[i].html_url);
        };
        listaRepos.appendChild(li);
    }
}

const fetchRepos = () => {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            repos = data;
            gerarListaRepos();
        });
};

fetchRepos();