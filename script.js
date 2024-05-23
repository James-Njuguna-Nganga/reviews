const reviews = [
  {
    id: 1,
    name: 'sara jones',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: 'experienced in node.js,angular and .net'
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'ui/ux designer.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'intern',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Director ',
  },
];

const img = document.getElementById('real-img');
const person = document.getElementById('person');
const position = document.getElementById('position');
const experience = document.getElementById('experience');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const random = document.querySelector('.random');

let currentItem = 0;

window.addEventListener('DOMContentLoaded',  () => {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  person.textContent = item.name;
  position.textContent = item.job;
  experience.textContent = item.text;
}

next.addEventListener('click',  () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prev.addEventListener('click',  () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

random.addEventListener('click',  () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});