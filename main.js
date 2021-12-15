//alert('I love Cris');


//EX.1--QUERY SELECTORS--//
// const para = document.querySelector('div.error'); //<--CSS class Selector-->('.error');

// console.log(para);


// const title = document.querySelector('body > h1'); //<--CSS class Selector-->('.error');

// console.log(title);


//EX.2--GRAB MULTIPLE QUERY SELECTORS--//


// const paras = document.querySelectorAll('p'); //<--Select a collection of query selectors
//console.log(paras);//<--select all the class elements

// const errors = document.querySelectorAll('.error'); //<--print the nodelist on the console
// console.log(errors);

// paras.forEach(paras => {
//     console.log(paras);
// });

//console.log(paras[3]); //select element with squared notation

//--GET ELEMENT BY ID--//
// const title = document.getElementById('page-title');
// console.log(title);



//--GET ELEMENT BY THEIR CLASS NAME--//
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);



//--GET ELEMENT BY TAG NAME--//

// const paras = document.getElementsByTagName('p');
// console.log(paras[2]);


// const para = document.querySelector('p');
//console.log(para.innerText) //<-- this is a property not a method
//para.innerText = 'Ninja are awesome!'; //<--set/change a new text
//para.innerText += ' ' + 'Ninja are awesome!'; //<--append a new text


//--PRINT INSIDE HTML-->inner.HTML--//
//const content = document.querySelector('.content');

//console.log(content.innerHTML);

//content.innerHTML += '<h2>THIS IS A NEW CONTENT</h2>';

// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`
// });


//get the reference and retrieve the element from the HTML

const link = document.querySelector('a'); //<--store reference to retrieve the anchor tag

console.log(link.getAttribute('href')); //<--print on console the attribute of the link

//--SET AND CHANGE ATTRIBUTE IN JAVASCRIPT--//

// link.setAttribute('href', 'https://www.biser-dept.com');
// link.innerText = 'TheNet Ninja Website'; //<-- change the link inside HTML/update attribute to the browser


// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style', 'color: green;');


const title = document.querySelector('h1');
//title.setAttribute('style', 'margin: 50px;'); //<--overwrite the CSS attribute

// console.log(title.style);

// console.log(title.style.color);

// title.style.margin = '50px'; //<--add the margin manteining the color css class
// title.style.color = 'crimson'; //<--change color of the h1 (have a look above to the title const =document.querySelector('h1'));
// title.style.fontSize = '60px';
// title.style.margin = ''; //<--empty string removes the margin of '50px' above

// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');


const paras = document.querySelectorAll('p');

paras.forEach(p => {
    if (p.textContent.includes('error')) {
        p.classList.add('error'); //<-- add a CSS class as classList
    }

    if (p.innerText.includes('success')) {
        p.classList.add('success');
    }
});

const title = document.querySelector('.title');

title.classList.toggle('test');