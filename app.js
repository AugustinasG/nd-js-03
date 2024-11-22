console.log(`veikia`)



const A = [
    'Bebras',
    'Zebras',
    'Vilkas',
    'Lapė',
    'Barsukas',
    'Voverė',
    'Laukinis katinas',
    'Šuo',
    'Naminis katinas',
];


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



//1 Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A nuskaitytais gyvūnais.

const bodyE = document.querySelector('body');

const ulCreation = document.createElement('ul');
bodyE.appendChild(ulCreation);

for (let i=0; i<A.length;i++) {
const li = document.createElement('li');
const text = document.createTextNode(A[i]);

li.appendChild(text);
ulCreation.appendChild(li);

}





//2  Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A nuskaitytais gyvūnais išdėliotais abėcėline tvarka.


A.sort((a, b) => a.localeCompare(b, 'lt'));


const ulCreation2 = document.createElement('ul');
bodyE.appendChild(ulCreation2);

for (let i=0; i<A.length;i++) {

const li2 = document.createElement('li');
const text2 = document.createTextNode(A[i]);

li2.appendChild(text2);
ulCreation2.appendChild(li2);


}



const B = [
    'Kalakutas',
    'Višta',
    'Antis',
    'Žąsis',
    'Ančiasnapis'
];


//3  Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvų A ir B nuskaitytais gyvūnais išdėliotais abėcėline tvarka (Rūšiavimas turi būti bendras tarp abiejų masyvų, NE kiekvieno atskirai).#pamastykKaip

const AB = [...A,...B]
AB.sort((a, b) => a.localeCompare(b, 'lt'));

const ulCreation3 = document.createElement('ul');
bodyE.appendChild(ulCreation3);



for (let i=0;i<AB.length;i++) {

const li3 = document.createElement('li');
const text3 = document.createTextNode(AB[i]);




li3.appendChild(text3);

ulCreation3.appendChild(li3);




}

4// Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra mėlyni apskritimai su centre užrašytais iš masyvo A nuskaitytais gyvūnais.

const section1 = document.createElement('section');
section1.className = 'section1';
bodyE.appendChild(section1);

for (let i=0;i<A.length;i++) {
const div1 = document.createElement('div');
div1.className = 'div1';
const p1 = document.createElement('p');
p1.className = 'div1Text1';
const div1Text1 = document.createTextNode(A[i]);


p1.appendChild(div1Text1);
div1.appendChild(p1);
section1.appendChild(div1);



}


5// Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra raudoni apskritimai su centre centre užrašytais iš masyvo B nuskaitytais gyvūnais ir tų gyvūnų raidžių skaičiumi.


const section2 = document.createElement('section2');
section2.className = 'section2';
bodyE.appendChild(section2);


for (let i=0;i<B.length;i++) {

const word = B[i];
const wordLength = B[i].length

const div2 = document.createElement('div');
div2.className = 'div2';
const p2 = document.createElement('p');
p2.className = 'div1Text2';
const div1Text2 = document.createTextNode(`${word} (${wordLength})`);

p2.appendChild(div1Text2);
div2.appendChild(p2);
section2.appendChild(div2);

}


6// Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra žali apskritimai su centre užrašytais gyvūnais, nuskaityto iš masyvo A. Dėkite tik tuos gyvūnus, kurie savo pavadinime turi tik vieną žodį.


const section3 = document.createElement('section');
section3.className = 'section3';
bodyE.appendChild(section3);

const oneWordItems = A.filter(word => word.includes(' ') === false);

for (let i=0; i<oneWordItems.length; i++) {

const div3 = document.createElement('div');
div3.className = 'div3';
const p3 = document.createElement('p');
p3.className = 'div3Text';
const div3Text = document.createTextNode(oneWordItems[i]);

p3.appendChild(div3Text);
div3.appendChild(p3);
section3.appendChild(div3);


}

7// Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite span tagus, kurie yra geltoni apskritimai su centre užrašytais iš masyvo B nuskaitytų gyvūnų pavadinimų raidėm. Kiekvienas span tagas- atskira raidė. (visų gyvūnų visos raidės atskiruose span taguose).#ciklasCikle

const section4 = document.createElement('section');
section4.className = 'section4';
bodyE.appendChild(section4);

for (let i = 0; i < B.length; i++) {
    let element = B[i]; 
    let nElement = element.split(''); 

    
    const wordContainer = document.createElement('div');
    wordContainer.className = 'word-container'; 

    for (let j = 0; j < nElement.length; j++) {
        const span4 = document.createElement('span');
        span4.className = 'span4';

        const span4Text = document.createTextNode(nElement[j]);
        span4.appendChild(span4Text);

        wordContainer.appendChild(span4);
    }

   
    section4.appendChild(wordContainer);
}


8//Html faile sukurkite du ul tagus (tiesiogiai). Į  vieną sukurtą tagą, su JS, sudėkite li tagus su iš masyvo C nuskaitytais gyvūnais, kurių pavadinimas ne ilgesnis kaip 6 raidės, į kitą likusius.




const smallerUl = document.createElement('ul');
const biggerUl = document.createElement('ul');
bodyE.appendChild(smallerUl);
bodyE.appendChild(biggerUl);

for (let i=0;i<C.length;i++) {
if (C[i].length <= 6) {
const smallLi = document.createElement('li');
const smallText = document.createTextNode(C[i]);

smallLi.appendChild(smallText);
smallerUl.appendChild(smallLi);



} else {

const bigLi = document.createElement('li');
const bigText = document.createTextNode(C[i]);

bigLi.appendChild(bigText);
biggerUl.appendChild(bigLi);


}


}

//9 Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo C nuskaitytais gyvūnais. Išfiltruokite ir nedėkite šunų.


const filterDog = C.filter(word => word.includes('Šuo') === false);

const ulDog = document.createElement('ul');
bodyE.appendChild(ulDog);


for (let i=0;i<filterDog.length;i++) {

const dogLi = document.createElement('li');
const dogLiText = document.createTextNode(filterDog[i]);


dogLi.appendChild(dogLiText);
ulDog.appendChild(dogLi);


}