import menu from './menuPage';
import contact from './contactPage';

function Homebtn(btn) {
  btn.addEventListener('click', () => {
    window.location.reload(true);
  });
}

function mainListener(btn, target1, target2, div, contactButton) {
  btn.addEventListener('click', (e) => {
    if (e.target === contactButton) {
      contact();
    } else if (e.target === target1 || e.target === target2) {
      menu();
    }
  });
}

export { Homebtn, mainListener };
