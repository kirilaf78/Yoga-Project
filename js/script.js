window.addEventListener('DOMContentLoaded', function() {
	'use strict';
  let info = document.querySelector('.info-header'),
      tab = document.querySelectorAll('.info-header-tab'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }
  hideTabContent(1);
  
  function showTabContent (b) {
   if (tabContent[b].classList.contains('hide')) {
     tabContent[b].classList.remove('hide');
     tabContent[b].classList.add('show');
   }
  }

  info.addEventListener('click', (event) => {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
        }  
        
      }
    }
  });

  //timer

  let deadline = '2021-08-28';

  function getTimeRemaining (timeEnd) {
    let t = Date.parse(timeEnd) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/1000/60/60));

    return {
      'total' : t,
      'seconds' : seconds,
      'minutes' : minutes,
      'hours' : hours
    }
  }

  function setTimer (id, timeEnd) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateTimer, 1000);


        function updateTimer() {
          let a = getTimeRemaining(timeEnd);
          hours.textContent = a.hours;
          minutes.textContent = a.minutes;
          seconds.textContent = a.seconds;

          if (a.total <= 0) {
            clearInterval(timeInterval);
            
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
          }

         

          if (a.seconds < 10 && a.seconds >= 0 ) {
            seconds.textContent = '0' + a.seconds;
          }
          if (a.minutes < 10 && a.minutes >= 0) {
            minutes.textContent = '0' + a.minutes;
          }
          if (a.hours < 10 && a.hours >= 0) {
            hours.textContent = '0' + a.hours;
          }

           /* function makeTwoDigits(timeFrame) {
            if (a.timeFrame < 10) {
              timeFrame.textContent = '0' + a.timeFrame;
            }
          }
          makeTwoDigits(seconds); */
        }  

  }
  setTimer('timer', deadline);
  







})