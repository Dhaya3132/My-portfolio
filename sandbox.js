const RandomTxt = document.getElementById('RandomText');

const DataArray = ['Web Developer', 'Web Designer'];

function randomnumbers(max)
{
    return Math.floor(Math.random()*max);
}

function changeText(){
    RandomTxt.innerText = DataArray[randomnumbers(2)];
}

changeText();

setInterval(changeText, 2 * 1000); 

const Sidebar = document.getElementById('sidebaricon');
const Slide = document.getElementById('Sidebar');
const Close = document.getElementById('close');


Sidebar.addEventListener('click',()=>{
   Slide.style.display = 'block';
})

Close.addEventListener('click', ()=>
{
    Slide.style.display = 'none';
})

