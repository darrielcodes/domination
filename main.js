//1.
function strikeThrough(){
    //let firstItem = document.querySelector('li');
    let firstItem = document.querySelector('#arguments li'); // <== still only grabs first li but a way to select specific item ('parent child')
    firstItem.style.textDecoration = 'line-through'
}
//2.
strikeThrough();

//3.
/* ----  notes  ----
function setImage(2 parameters){
id: string
url: string

}

*/
function setImage(id, url){
    let img = document.querySelector(`#${id}`);// <== works for any id
    img.src = url;
    img.style.height = '300px'
}
//4.
setImage("image-1", "https://images.unsplash.com/photo-1563467743682-704cc8ccb9c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJldHR5JTIwZmxvd2Vyc3xlbnwwfHwwfHw%3D&w=1000&q=80")
setImage('image-2', "https://i.pinimg.com/236x/60/e7/90/60e790c6fbe9ee83f88bfe52197f00fd.jpg")
setImage('image-3', "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg")

//5.
function removeListItem(){
    let firstItem = document.querySelector('li');
    firstItem.remove();
}
//6.
removeListItem();
removeListItem();


//7.
function fontIDSize(size, id){
    let fontID = document.querySelector(id); // <== works for any id, add # when calling function
    fontID.style.fontSize = size;
};
//8.
fontIDSize("50px", "#heading")
fontIDSize("30px", "#thing-2")

//////////////// PART TWO //////////////////////

//1. 

function addChild(element){
    let list = document.querySelector('#arguments')
    list.appendChild(element);
}

let newElement = document.createElement('li')
newElement.innerText = 'Woah, its a list item!';
addChild(newElement);

//2.
let newImg = document.createElement('img')
newImg.src = 'https://static9.depositphotos.com/1012083/1109/i/450/depositphotos_11092199-stock-photo-sunshine.jpg?forcejpeg=true'
addChild(newImg);

//3.
function changeHeight(img){
    img.style.height = '30px'
}

//4.
changeHeight(newImg)

//5.
function disappear(element){
    element.className = "invisible"
}

//6.
let heading = document.querySelector('h1')
disappear(heading);

//////////////// PART THREE //////////////////////
//1.
/*

textCreator()
1 parameter - text: string

create list item with text that is parameter of function

return li
*/

function textCreator(text){
    let listItem = document.createElement('li');
    listItem.innerText = text;
    return listItem;
}

//2.
let testItem = textCreator("Hello :)");
addChild(testItem)

//3.

function createHeader(hSize, text){
    let header = document.createElement(`h${hSize}`);
    header.innerText = text;
    return header
}

//4.
let headerTest = createHeader('6 ', 'some text');
addChild(headerTest)