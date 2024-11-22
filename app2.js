console.log('veikia');



const C = [
  'Višta',
  'Gaidys',
  'Šernas',
  'Lapė',
  'Vilkas',
  'Šuo dingo',
  'Barsukas',
  'Voverė',
  'Šuo',
  'Naminis katinas',
  'Laukinis katinas',
  'Šuo atsirado',
  'Bebras',
  'Ožys'
];



//Uždavinį atlikite atskirame html faile. Visame ekrane atsitiktine tvarka “išmėtykite“ iš masyvo C nuskaitytus gyvūnus. Kad būtų daugiau gyvūnų, tą patį masyvą nuskaitykite 10 kartų. Gyvūnų pavadinimų raidžių dydis- atsitiktinis nuo 10px iki 100px. Gyvūnų pavadinimų raidžių spalva atsitiktinė. Pavadinimai turi tolygiai (pagal funkciją rand()) dengti visą ekraną (funkcijos duotos 02. DOM ir Cycles (one & four edition)).#fun

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}

const bodyE = document.querySelector('body');
const randomDiv = document.createElement('div');
randomDiv.className = 'randomDiv'
bodyE.appendChild(randomDiv);


const newC = [...C,...C,...C,...C,...C,...C,...C,...C,...C,...C]



for (let i=0;i<newC.length;i++) {
  const size = rand(10, 100);
  const color = randomColor();
    
   
      const maxWidth = window.innerWidth - size;
      const maxHeight = window.innerHeight - size;
      const posX = rand(0, maxWidth);
      const posY = rand(0, maxHeight);



const divChild = document.createElement('div');

const p = document.createElement('p');
const text = document.createTextNode(newC[i]);

p.appendChild(text);

p.style.position = 'absolute';
p.style.fontSize = `${size}px`;
p.style.color = `${color}`;
p.style.top =`${posY}px`;
p.style.left = `${posX}px`;
p.style.overflow = 'hidden';
p.style.boxSizing = 'border-box';


divChild.appendChild(p);
randomDiv.appendChild(divChild);

    







}

