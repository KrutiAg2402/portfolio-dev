// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>
{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}
// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }

    });
    // sticky header
        let header = document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll

}


// Define the list of texts to cycle through
const texts = ["Software Developer", "Web Developer", "Game Developer"];

let index = 0;
let currentText = '';
let letterIndex = 0;

function type() {
    if (letterIndex < texts[index].length) {
        currentText += texts[index].charAt(letterIndex);
        document.getElementById('typing-text').textContent = currentText;
        letterIndex++;
        setTimeout(type, 100); // Adjust typing speed here (in milliseconds)
    } else {
        setTimeout(erase, 2000); // Wait for 2 seconds before erasing
    }
}

function erase() {
    if (letterIndex > 0) {
        currentText = texts[index].substring(0, letterIndex - 1);
        document.getElementById('typing-text').textContent = currentText;
        letterIndex--;
        setTimeout(erase, 50); // Adjust erasing speed here (in milliseconds)
    } else {
        index++;
        if (index >= texts.length) {
            index = 0;
        }
        setTimeout(type, 1000); // Wait for 1 second before typing the next text
    }
}

// Start the typing animation
type();
function toggleProgrammingSkills() {
    var programmingSkillsContent = document.getElementById("programming-skills-content");
    programmingSkillsContent.classList.toggle("show");
}

document.addEventListener('DOMContentLoaded', function() {
    var downloadButton = document.getElementById('downloadButton');
    
    downloadButton.addEventListener('click', function() {
        var filename = 'Resume-Kruti Agarwal.pdf'; // Change this to the filename of your resume
        var fileURL = 'Resume-Kruti Agarwal.pdf'; // Change this to the path of your resume file

        var a = document.createElement('a');
        a.href = fileURL;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});
