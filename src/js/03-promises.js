import Notiflix from 'notiflix';
import { firstDelay, delayStep, amount, Btn } from './myVariables';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      return Promise.resolve(
        `Fulfilled promise ${position} in ${delay}ms`
      ).then(text => {
        Notiflix.Notify.success(text);
        console.log(text);
      });
      // Fulfill
    } else {
      return Promise.reject(`Rejected promise ${position} in ${delay}ms`).catch(
        error => {
          Notiflix.Notify.failure(error);
          console.log(error);
        }
      );
      // Reject
    }
  }, delay);
}

Btn.addEventListener('click', e => {
  e.preventDefault();
  for (let i = 1; i <= amount.value; i++) {
    createPromise(i, Number(firstDelay.value) + (i - 1) * delayStep.value);
  }
});