const pets = [{
    "name": "Jennifer",
    "img": "assets/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "assets/pets-katrine.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "assets/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "assets/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "assets/pets-kat.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "assets/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "assets/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "assets/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }];

let currentPets=[];
let previosPets=[];
let fillPetsList=[];

let str = '';
const elem = document.querySelector('.card-frends');
const btnLeft = document.querySelector('.button-arrow-left');
const btnRight = document.querySelector('.button-arrow-right');


  fillPetsList=(()=>{
    let tempArr=[];
    for(let i=0; i<6; i++){
      const newPets = pets;
      for(let j=pets.length; j>0; j--){
        let randInd =Math.floor(Math.random()*j);
        const randElem=newPets.splice(randInd,1)[0];
        newPets.push(randElem);
      }
      tempArr = [...tempArr, ...newPets];
    }
    return tempArr;
  })();


  function randomPets() {

    for (let i=0; i<=2; i++) {
    let r=0;
    do {
      r = Math.floor(Math.random()*7);
    } while ((currentPets.includes(r)) || (previosPets.includes(r)) );
    currentPets.push(r); 
    }
  }

  function showPets (arr) {
    str = `<div class="card-cat">`;
    str+=`<div class="card">`;
    str+=`<div class="card-img"><img src="${pets[arr[0]].img}"></div>`;
    str+=`<div  class="card-title"><p>${pets[arr[0]].name}</p></div>`;
    str+=`<button class="button-secondary"  id="${arr[0]}"> <a href="#">Learn more</a> </button>`;
    str+=`</div> </div>`; 
  
    str+= `<div class="card-jennifer">`;
    str+=`<div class="card">`;
    str+=`<div class="card-img"><img src="${pets[arr[1]].img}"></div>`;
    str+=`<div  class="card-title"><p>${pets[arr[1]].name}</p></div>`;
    str+=`<button class="button-secondary"  id="${arr[1]}"> <a href="#">Learn more</a> </button>`;
    str+=`</div> </div>`; 
 
    str+= `<div class="card-woody">`;
    str+=`<div class="card">`;
    str+=`<div class="card-img"><img src="${pets[arr[2]].img}"></div>`;
    str+=`<div  class="card-title"><p>${pets[arr[2]].name}</p></div>`;
    str+=`<button class="button-secondary"  id="${arr[2]}"> <a href="#">Learn more</a> </button>`;
    str+=`</div> </div>`; 
    elem.innerHTML = str;
    let btnSecondary = document.querySelectorAll('.button-secondary');
    btnSecondary[0].addEventListener('click',petDiscription);
    btnSecondary[1].addEventListener('click',petDiscription);
    btnSecondary[2].addEventListener('click',petDiscription);
  }


  function petDiscription(){
    let str='';
    str+='<div class="modal-window-1280">';
    str+='<div class="modal-close-button">';
    str+='<img src="assets/modal_close_button.png"></div>';
    str+='<div class="modal-window">';
    str+='<div class="modal-window-img">';
    str+=`<img src="${pets[this.id].img}"> </div>`;
    str+='<div class="pets-modal">';
    str+='<div class="modal-text">';
    str+='<div class="modal-text-heading">';
    str+=`<p>${pets[this.id].name}</p> </div>`;
    str+='<div class="modal-text-name">';
    str+=`<p>${pets[this.id].type} - ${pets[this.id].breed}</p> </div>`;
    str+='<div class="modal-text-description">';
    str+=`<p>${pets[this.id].description}</p> </div>`;
    str+='<ul class="rounded">';
    str+=`<li><b>Age:</b> ${pets[this.id].age}</li>`;
    str+=`<li><b>Inoculations:</b> none</li>`;
    str+='<li><b>Diseases:</b> none</li>';
    str+='<li><b>Parasites:</b> none</li>';
    str+='</ul> </div> </div> </div>';
    let modal = document.querySelector('.box-modal');
  
      modal.innerHTML = str;
    let btnClose = document.querySelector('.modal-close-button');
      modal.style.display='block';
      btnClose.addEventListener('click', ()=>{
      modal.style.display='none';
    });
  }

  function changePets(){
    previosPets=currentPets;
    currentPets=[];
    randomPets();
    elem.innerHTML='';
    showPets (currentPets);
  } 

randomPets();

showPets(currentPets);
 
btnRight.addEventListener('click', changePets);
btnLeft.addEventListener('click', changePets);

