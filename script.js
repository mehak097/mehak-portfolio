
const menuBtn = document.getElementById('menu');
const tabs = document.querySelector('.tabs');

menuBtn.addEventListener('click', () => {
    tabs.classList.toggle('active');
});

document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', () => {
        tabs.classList.remove('active');
    });
});


const codeLines = [
    "const developer = {",
    "  name: 'Mehak Khadwal',",
    "  role: 'Web Developer',",
    "  university: 'CGC University',",
    "  focus: 'APIs, Java, problem-solving',",
    "  status: 'open to opportunities',",
    "};",
    "",
    "developer.sayHi();"
];

const typedEl = document.getElementById('typed-code');
const gutterEl = document.getElementById('hero-gutter');

function buildGutter(lineCount){
    gutterEl.innerHTML = '';
    for(let i = 1; i <= lineCount; i++){
        const line = document.createElement('div');
        line.textContent = i;
        gutterEl.appendChild(line);
    }
}

function typeWriter(){
    const fullText = codeLines.join('\n');
    let i = 0;
    typedEl.textContent = '';

    function step(){
        if(i <= fullText.length){
            const partial = fullText.slice(0, i);
            typedEl.textContent = partial;
            const linesShown = partial.split('\n').length;
            buildGutter(linesShown);
            i++;
            setTimeout(step, 18);
        } else {
            buildGutter(codeLines.length);
        }
    }
    step();
}

window.addEventListener('DOMContentLoaded', typeWriter);


const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));


const sections = document.querySelectorAll('section[id]');
const tabLinks = document.querySelectorAll('.tab-link');

const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const id = entry.target.getAttribute('id');
            tabLinks.forEach(link => {
                link.classList.toggle('active', link.dataset.section === id);
            });
        }
    });
}, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

sections.forEach(sec => spyObserver.observe(sec));