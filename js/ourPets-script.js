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
const classArr = ["card-cat","card-jennifer","card-woody","card-sophia","card-timmy","card-charly","card-scarlett","card-freddie"];
let currentPets=[];
let previosPets=[];
let fillPetsList=[];

let str = '';
const elem = document.querySelector('.cards-container');
const btnLeft = document.querySelector('.button-arrow-left');
const btnRight = document.querySelector('.button-arrow-right');
//console.log(elem); 
let maxPages = 6;
let amountPets = 8;

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

  function fillPets(width) {
    if(width<=768 && width>320) {
      let tempArr=[];
      for(let i=0; i<8; i++){
        const newPets = pets;
        for(let j=pets.length; j>2; j--){
          let randInd =Math.floor(Math.random()*j);
          const randElem=newPets.splice(randInd,1)[0];
          newPets.push(randElem);
        }
        tempArr = [...tempArr, ...newPets];
      }
      fillPetsList=tempArr;
   } 
  }

  function randomPets() {
    for (let i=0; i<=2; i++) {
    let r=0;
    do {
      r = Math.floor(Math.random()*7);
    } while ((currentPets.includes(r)) || (previosPets.includes(r)) );
    currentPets.push(r);
    }
  }

  function showPets (arr, startIndex) {
    let str='';
    let start=startIndex*amountPets;
    let finish=start+amountPets;
    let k=0;
 
      for(let i=start; i<finish; i++) {
        str+= `<div class="${classArr[k]}">`;
        str+=`<div class="card">`;
        str+=`<div class="card-img"><img src="${arr[i].img}"></div>`;
        str+=`<div  class="card-title"><p>${arr[i].name}</p></div>`;
        str+=`<button class="button-secondary"  id="${i}"> <a href="#">Learn more</a> </button>`;
        str+=`</div> </div>`; 
        k++;
      }                                         
   
    elem.innerHTML = str;
    let btnSecondary = document.querySelectorAll('.button-secondary');
    for (let i=0; i<btnSecondary.length; i++){
      btnSecondary[i].addEventListener('click',petDiscription);
    }
  }

  function petDiscription(){
    let str='';
    str+='<div class="modal-window-1280">';
    str+='<div class="modal-close-button">';
    str+='<img src="assets/modal_close_button.png"> </div>';
    str+='<div class="modal-window">';
    str+='<div class="modal-window-img">';
    str+=`<img src="${fillPetsList[this.id].img}"> </div>`;
    str+='<div class="pets-modal ">';
    str+='<div class="modal-text">';
    str+='<div class="modal-text-heading">';
    str+=`<p>${fillPetsList[this.id].name}</p> </div>`;
    str+='<div class="modal-text-name">';
    str+=`<p>${fillPetsList[this.id].type} - ${fillPetsList[this.id].breed}</p> </div>`;
    str+='<div class="modal-text-description">';
    str+=`<p>${fillPetsList[this.id].description}</p> </div>`;
    str+='<ul class="rounded">';
    str+=`<li><b>Age:</b> ${fillPetsList[this.id].age}</li>`;
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

  function RightOne(){
    currentPage++;
    let pagNum=document.querySelector('.paginator-number');

    if (currentPage<maxPages){
      activeBoth();
    }
 
    if (currentPage>=maxPages){
      currentPage=maxPages;
      activeLeft();
    }
    pagNum.innerHTML='';
    pagNum.innerHTML=currentPage;
    showPets(fillPetsList,(currentPage-1));
  }

  function LeftOne() {
    currentPage--;
    let pagNum=document.querySelector('.paginator-number');
    if (currentPage>1) {
      activeBoth();
    }
    if (currentPage<=1) {
      currentPage=1;
      activeRight();
    }
    pagNum.innerHTML='';
    pagNum.innerHTML=currentPage;
    showPets(fillPetsList,(currentPage-1));
  }

  function LastPage(){
    currentPage=maxPages;
    let pagNum=document.querySelector('.paginator-number');
    activeLeft();
    pagNum.innerHTML='';
    pagNum.innerHTML=currentPage;
    showPets(fillPetsList,(currentPage-1));
  }

  function FirstPage(){
    currentPage=1;
    let pagNum=document.querySelector('.paginator-number');
    activeRight();
    pagNum.innerHTML='';
    pagNum.innerHTML=currentPage;
    showPets(fillPetsList,(currentPage-1));
  }

  function activeLeft(){
  
    let rightTwo = document.querySelector('.paginator-rigth-two');
        rightTwo.style.color='#CDCDCD'; 
      pagLast.style.border='2px solid #CDCDCD'; 
    let rightOne = document.querySelector('.paginator-rigth-one');
        rightOne.style.color='#CDCDCD'; 
      pagRightOne.style.border='2px solid #CDCDCD'; 

    let leftTwo = document.querySelector('.paginator-left-two');
        leftTwo.style.color='#292929'; 
      pagFirst.style.border='2px solid #FDDCC4'; 
    let leftOne = document.querySelector('.paginator-left-one');
        leftOne.style.color='#292929';
      pagLeftOne.style.border='2px solid #FDDCC4'; 
  }

  function activeRight(){
    let rightTwo = document.querySelector('.paginator-rigth-two');
        rightTwo.style.color='#292929'; 
      pagLast.style.border='2px solid #FDDCC4'; 
    let rightOne = document.querySelector('.paginator-rigth-one');
        rightOne.style.color='#292929'; 
      pagRightOne.style.border='2px solid #FDDCC4'; 

    let leftTwo = document.querySelector('.paginator-left-two');
        leftTwo.style.color='#CDCDCD'; 
      pagFirst.style.border='2px solid #CDCDCD'; 
    let leftOne = document.querySelector('.paginator-left-one');
      leftOne.style.color='#CDCDCD';
      pagLeftOne.style.border='2px solid #CDCDCD'; 
  }

  function activeBoth(){
    let rightTwo = document.querySelector('.paginator-rigth-two');
        rightTwo.style.color='#292929'; 
      pagLast.style.border='2px solid #FDDCC4'; 
    let rightOne = document.querySelector('.paginator-rigth-one');
        rightOne.style.color='#292929'; 
      pagRightOne.style.border='2px solid #FDDCC4'; 

    let leftTwo = document.querySelector('.paginator-left-two');
        leftTwo.style.color='#292929'; 
      pagFirst.style.border='2px solid #FDDCC4'; 
    let leftOne = document.querySelector('.paginator-left-one');
        leftOne.style.color='#292929';
      pagLeftOne.style.border='2px solid #FDDCC4'; 
  }

  function setPages() {
    let size = document.querySelector('body').clientWidth;
      switch (size) {
        case 1280: maxPages=6;
                   amountPets=8;
                   break;
        case 768: maxPages=8;
                  amountPets=6;
                  break;
        case 320: maxPages =16;
                  amountPets=3;
                  break;    
       }
  }

setPages();
let currentPage=1;
showPets(fillPetsList,0);
const pagRightOne = document.querySelector('.button-paginator-rigth-one');
      pagRightOne.addEventListener('click',RightOne);
const pagLeftOne = document.querySelector('.button-paginator-inactive-left-one');
      pagLeftOne.addEventListener('click',LeftOne);
const pagLast = document.querySelector('.button-paginator-rigth-two');
      pagLast.addEventListener('click', LastPage);
const pagFirst = document.querySelector('.button-paginator-inactive-left-two');
      pagFirst.addEventListener('click', FirstPage);

let body = document.querySelector('body');
let previousSize=body.clientWidth;
let currentSize;

  window.addEventListener('resize',()=>{
  
    currentSize=document.querySelector('body').clientWidth;
      if (currentSize!=previousSize){
          previousSize=currentSize;
        let pagNum=document.querySelector('.paginator-number');
            pagNum.innerHTML='';
            pagNum.innerHTML=1;
            activeRight();
            setPages();
            showPets(fillPetsList,0);
      }
    });

  document.querySelector('.menu__btn').addEventListener('click',()=>{
  
    if (document.querySelector('.header').style.marginLeft != "90px" && document.querySelector('body').clientWidth==320){
        document.querySelector('.header').style.marginLeft = "90px";
    }
    else {
      document.querySelector('.header').style.marginLeft = "";
    }
  });

