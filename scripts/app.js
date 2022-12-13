VANTA.BIRDS({
  el: "#birds",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0x0,
  color1: 0xffffff,
  color2: 0x0
})

function cv() {

  document.querySelector('.education').onmouseover = backlightEducation;
  document.querySelector('.education').onmouseout = blackoutEducation;
  document.querySelector('.skills').onmouseover = backlightSkills;
  document.querySelector('.skills').onmouseout = blackoutSkills;
  document.querySelector('.contacts').onmouseover = backlightContacts;
  document.querySelector('.contacts').onmouseout = blackoutContacts;
  
 

 function backlightEducation() {
    document.querySelector('.education__underline').style.left = 0;
    document.querySelector('.education__underline').style.backgroundColor = '#fff'
    document.querySelector('.side__header').style.color = '#fff';
    document.querySelector('.education__title').style.color = '#fff';
    document.querySelector('.education__describe').style.color = '#fff';
    document.querySelector('.education__RS').style.color = '#fff';
    document.querySelector('.education__stage').style.color = '#fff';
  }
  function blackoutEducation() {
    document.querySelector('.education__underline').style.left = '-380px';
    document.querySelector('.education__underline').style.backgroundColor = '#333';
    document.querySelector('.side__header').style.color = '#333';
    document.querySelector('.education__title').style.color = '#333';
    document.querySelector('.education__describe').style.color = '#333';
    document.querySelector('.education__RS').style.color = '#333';
    document.querySelector('.education__stage').style.color = '#333'
  }
  function backlightSkills() {
    document.querySelector('.skills__underline').style.left = 0;
    document.querySelector('.skills__underline').style.backgroundColor = '#fff'
    document.querySelector('.side__header2').style.color = '#fff';
    document.querySelector('.skills__list').style.color = '#fff';
  }
  function blackoutSkills() {
    document.querySelector('.skills__underline').style.left = '-380px';
    document.querySelector('.skills__underline').style.backgroundColor = '#333';
    document.querySelector('.side__header2').style.color = '#333';
    document.querySelector('.skills__list').style.color = '#333';
  }
  function backlightContacts() {
    document.querySelector('.contacts__underline').style.left = 0;
    document.querySelector('.contacts__underline').style.backgroundColor = '#fff'
    document.querySelector('.side__header3').style.color = '#fff';
    document.querySelector('.contacts__list').style.color = '#fff';
  }
  function blackoutContacts() {
    document.querySelector('.contacts__underline').style.left = '-380px';
    document.querySelector('.contacts__underline').style.backgroundColor = '#333';
    document.querySelector('.side__header3').style.color = '#333';
    document.querySelector('.contacts__list').style.color = '#333';
  }
}

function textShow() {
  document.querySelector('.main__about').onmouseover = textShow;

  document.querySelector('.main__header').style.color = '#333';
  document.querySelector('.main__aboutMe').style.color = '#333';
  document.querySelector('.main__header2').style.color = '#333';
  document.querySelector('.main__header3').style.color = '#333';
  document.querySelector('.main__header4').style.color = '#333';
  document.querySelector('.cv__link').style.color = '#333';
  document.querySelector('.lang__list').style.color = '#333';
}
function textHide() {
  document.querySelector('.main__about').onmouseout = textHide;

  document.querySelector('.main__header').style.color = '#808080';
  document.querySelector('.main__aboutMe').style.color = '#808080';
  document.querySelector('.main__header2').style.color = '#808080';
  document.querySelector('.main__header3').style.color = '#808080';
  document.querySelector('.main__header4').style.color = '#808080';
  document.querySelector('.cv__link').style.color = '#808080';
  document.querySelector('.lang__list').style.color = '#808080';
}

textShow();
textHide(); 
cv();

const winter = () => {
  let precipitation = 'snow';
  let snowflakes = 'fall';
  console.log(precipitation + snowflakes);
}

winter();