const scenes = Array.from(document.querySelectorAll('.scene'));
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const stepText = document.getElementById('stepText');
const dots = document.getElementById('dots');
const addNote = document.getElementById('addNote');
const noteResult = document.getElementById('noteResult');
let current = 0;

scenes.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.className = 'dot';
  dot.setAttribute('aria-hidden', 'true');
  dots.appendChild(dot);
});

function render() {
  scenes.forEach((scene, index) => scene.classList.toggle('active', index === current));
  Array.from(dots.children).forEach((dot, index) => dot.classList.toggle('active', index === current));
  stepText.textContent = `${current + 1} / ${scenes.length}`;
  prevBtn.disabled = current === 0;
  nextBtn.textContent = current === scenes.length - 1 ? '最初に戻る' : '次へ';
}

function goNext() {
  current = current === scenes.length - 1 ? 0 : current + 1;
  render();
}

function goPrev() {
  if (current > 0) {
    current -= 1;
    render();
  }
}

prevBtn.addEventListener('click', goPrev);
nextBtn.addEventListener('click', goNext);
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') goNext();
  if (event.key === 'ArrowLeft') goPrev();
});

addNote.addEventListener('click', () => {
  noteResult.hidden = false;
});

render();
