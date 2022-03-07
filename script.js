const wrapper = document.querySelector(".diamond-cards-container");
const pointsWrapper = document.querySelector("#points");
const diamondImage = `<img class="diamond-img" alt="Diamond Image" src="assets/img/diamond.svg">`;
let points = 0;

//Class for Diamond Card
class Diamond {
    constructor(index) {
        this.card = document.createElement('div');
        wrapper.appendChild(this.card);
        this.card.classList.add('diamond-card');
        this.card.setAttribute('id', index + 1);
        this.card.innerHTML = ` <div class="diamond-card-front"></div>
                                <div class="diamond-card-back">
                                    ${index % 2 === 0 ? diamondImage : ""}
                                </div>`;
        if(index % 2 === 0) this.card.setAttribute('data-diamond-card', true);
        this.card.addEventListener('click', this.cardClick());
    }
    cardClick() {
            return function() {
                this.children[0].style.display = "none";
                if (this.dataset.diamondCard == 'true') {
                    points += 1;
                    pointsWrapper.innerText = points;
                }
            }
    }
}

//Create Diamond Cards
const createDiamondCards = ((count) => {
    for (let i = 0; i < count; i++) {
        new Diamond(i);
    }
})(20);

//Hide Welcome Overlay
const hideOverlay = (() => {
    document.querySelector("#start-game").onclick = () => {
        document.querySelector(".welcome-overlay").style.display = "none";
    }
})();


