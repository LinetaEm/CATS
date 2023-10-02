const catFactForm = document.getElementById("catFact");
const factContainer = document.getElementById("factContainer");
const getFactButton = document.getElementById("getRandom");

function getCatFact() {
    fetch("https://catfact.ninja/fact")
        .then(response => response.json())
        .then(data => {
            const paragraph = document.createElement("p");
            paragraph.textContent = data.fact;
            factContainer.appendChild(paragraph);
        });
}

catFactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    getCatFact();
});

getFactButton.addEventListener("click", function () {
    factContainer.innerHTML = "";
});