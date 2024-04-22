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

const CVButton = document.getElementById('CV');

CVButton.addEventListener('click',()=>{

    let Pdf = 'https://drive.google.com/file/d/1nCDcFxYKDIxcwqKpv0Nr1tzFEU2CvfZ9/view?usp=drive_link';
    window.open(Pdf, '_blank');
})

const Contacts = document.getElementById('MyContact');

Contacts.addEventListener('click',()=>{
    const Contact = document.getElementById('Contacts');

    Contact.scrollIntoView({ behavior: 'smooth' });
})

const Abouts = document.getElementById('Aboutmee');

Abouts.addEventListener('click',()=>{
    const about = document.getElementById('AboutMe');

    about.scrollIntoView({behavior:'smooth'});
})

const Projects = document.getElementById('Myprojectss');

Projects.addEventListener('click',()=>{
    const proj = document.getElementById('MyProjects');

    proj.scrollIntoView({behavior:'smooth'});
})

const aboutsidebar = document.getElementById('AboutmeSidebar');

aboutsidebar.addEventListener('click',()=>{
    const about = document.getElementById('AboutMe');

    about.scrollIntoView({behavior:'smooth'});
})

const Projectsidebar = document.getElementById('MyprojectsSidebar');

Projectsidebar.addEventListener('click',()=>{
    const proj = document.getElementById('MyProjects');

    proj.scrollIntoView({behavior:'smooth'});
})