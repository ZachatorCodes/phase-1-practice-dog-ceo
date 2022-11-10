console.log('%c HI', 'color: firebrick');

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const dropDown = document.querySelector("#breed-dropdown");

fetch(imgUrl)
    .then(response => response.json())
    .then(data => data["message"])
    .then(arr => {
        arr.forEach(element => {
            const img = document.createElement("img");
            const imgContainer = document.querySelector("#dog-image-container");
            img.src = element;
            img.height = 300;
            imgContainer.appendChild(img);
        });
    });

fetch(breedUrl)
    .then(response => response.json())
    .then(data => data["message"])
    .then(obj => {
        const keys = Object.keys(obj);
        keys.forEach(item => {
            const li = document.createElement("li");
            const liContainer = document.querySelector("#dog-breeds");
            li.style.cursor = "pointer";
            li.addEventListener("click", function () {
                li.style.color = "red";
            });
            li.textContent = item;
            liContainer.appendChild(li);
        });
    });
    
dropDown.addEventListener("change", event => {
    const list = document.getElementById("dog-breeds").getElementsByTagName("li");
    const firstLetter = event.target.value;
    for (item of list) {
        if (item.textContent[0] !== firstLetter) {
            item.style.display = "none";
        }
        else {
            item.style.display = "list-item";
        }
    }
});