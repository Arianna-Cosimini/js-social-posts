/*

Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.


*/


// Creo array di oggetti
const posts = [
    {
        id: 1,
        author: {
            name: "Giorgio Ferraro",
            photo: "https://picsum.photos/id/1025/100/100",
        },
        date: "02-15-2024",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Donec ultrices lacus sed neque ultricies, eu tincidunt nisi tristique.",
        image: "https://picsum.photos/id/1026/600/400",
        likes: 10,
    },
    {
        id: 2,
        author: {
            name: "Maria Romano",
            photo: "https://picsum.photos/id/1027/100/100",
        },
        date: "02-14-2024",
        text: "Nunc accumsan, libero eget feugiat mollis, risus mi porta dui, eget lacinia neque libero eget neque. Donec elementum risus ac lectus tincidunt, eget congue purus hendrerit.",
        likes: 25,
    },
    {
        id: 3,
        author: {
            name: "Luca Verdi",
            photo: "https://picsum.photos/id/1028/100/100",
        },
        date: "02-13-2024",
        text: "Proin eget tortor risus. Sed egestas, ante et ullamcorper tincidunt, nisl leo feugiat nibh, sed pulvinar neque leo ac lectus.",
        image: "https://picsum.photos/id/1029/600/400",
        likes: 5,
    },
    {
        id: 4,
        author: {
            name: "Giulia Colombo",
            photo: "https://picsum.photos/id/1031/100/100",
        },
        date: "02-12-2024",
        text: "Suspendisse potenti. Cras ullamcorper massa sit amet lacus egestas, ac ultricies nisi tincidunt. Nunc accumsan, libero eget feugiat mollis, risus mi porta dui, eget lacinia neque libero eget neque.",
        image:"",
        likes: 18,
    },

];

console.log(posts)


/*

Milestone 2 - Prendendo come riferimento il layout di 
esempio presente nell'html, stampiamo i post del nostro feed


*/


// Bersaglio la card

let cardElement = document.querySelector(".container");

// creo ciclo forEach per stampare in pagina le proprietà 

posts.forEach(function (currentArray) {

    cardElement.innerHTML += `

    <div class="card p-4 mb-5">
            <div class="author d-flex gap-3 align-items-center mb-4">
            <div class="photo-author">
                <img src="${currentArray.author.photo}" alt="">
            </div>

            <div class="name-author d-flex flex-column">
                <h3>${currentArray.author.name}</h3>
                <span>${currentArray.date}</span>
            </div>
        </div>

        <div class="center-card mb-4">
            <div class="text-center-card">
                <p>${currentArray.text}</p>
            </div>

            <div class="photo-card">
                <img class="w-100 " src="${currentArray.image}" alt="">
            </div>
        </div>

        <div class="button-card d-flex justify-content-around">
            <div class="btn btn-outline-light border border-0 text-black"><i class="fa-solid fa-thumbs-up pe-2"></i>Mi piace</div>
            <div class="btn btn-outline-light border border-0 text-black">Piace a ${currentArray.likes} persone</div>
        </div>
            
    
    </div>
    
    `
    console.log(currentArray)
});


