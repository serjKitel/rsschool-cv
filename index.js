function cv() {

    document.querySelector('.education__block').addEventListener('mouseenter', backlightEducation);
    document.querySelector('.education__block').addEventListener('mouseleave', blackoutEducation);
    document.querySelector('.skills').addEventListener('mouseenter', backlightSkills);
    document.querySelector('.skills').addEventListener('mouseleave', blackoutSkills);
    document.querySelector('.contacts').addEventListener('mouseenter', backlightContacts);
    document.querySelector('.contacts').addEventListener('mouseleave', blackoutContacts);
    document.querySelector('.languages').addEventListener('mouseenter', languagesFocus);
    document.querySelector('.languages').addEventListener('mouseleave', languagesBlur);


    function backlightEducation() {
        document.querySelector('.education__underline').style.left = 0;
        document.querySelector('.education__underline').style.backgroundColor = '#0e5c30';
        document.querySelector('.education__title').style.color = '#000';
        document.querySelector('.education__describe').style.color = '#000';
        document.querySelector('.education__RS').style.color = '#000';
        document.querySelector('.education__stage').style.color = '#000';
        document.querySelector('.education__title').style.borderBottomColor = '#0e5c30';
        document.querySelector('.education__RS').style.borderBottomColor = '#0e5c30';
        document.querySelector('.education__block').style.textShadow = '2px 2px 2px #fff';
    }

    function blackoutEducation() {
        document.querySelector('.education__underline').style.left = '-380px';
        document.querySelector('.education__underline').style.backgroundColor = '#b1cc51';
        document.querySelector('.education__title').style.color = '#b1cc51';
        document.querySelector('.education__describe').style.color = '#b1cc51';
        document.querySelector('.education__RS').style.color = '#b1cc51';
        document.querySelector('.education__stage').style.color = '#b1cc51';
        document.querySelector('.education__title').style.borderBottomColor = '#b1cc51';
        document.querySelector('.education__RS').style.borderBottomColor = '#b1cc51';
        document.querySelector('.education__block').style.textShadow = 'none';

    }

    function backlightSkills() {
        document.querySelector('.skills__underline').style.left = 0;
        document.querySelector('.skills__underline').style.backgroundColor = '#0e5c30';
        document.querySelector('.skills__list').style.color = '#000';
        document.querySelector('.skills__list').style.fontWeight = 'bold';
        document.querySelector('.skills__list').style.textShadow = '2px 2px 2px #fff';
    }
    function blackoutSkills() {
        document.querySelector('.skills__underline').style.left = '-380px';
        document.querySelector('.skills__underline').style.backgroundColor = '#b1cc51';
        document.querySelector('.skills__list').style.color = '#b1cc51';
        document.querySelector('.skills__list').style.fontWeight = '400';
        document.querySelector('.skills__list').style.textShadow = 'none';
    }
    function backlightContacts() {
        document.querySelector('.contacts__underline').style.left = 0;
        document.querySelector('.contacts__underline').style.backgroundColor = '#0e5c30';
        document.querySelector('.contacts__list').style.color = '#fff';
        document.querySelector('.link__linkedin').style.color = '#fff';
        document.querySelector('.contacts__list').style.fontWeight = 'bold';
        document.querySelector('.link__linkedin').style.fontWeight = 'bold';
        document.querySelector('.link__discord').style.fontWeight = 'bold';
        document.querySelector('.link__discord').style.color = '#fff';
        document.querySelector('.link__gmail').style.color = '#fff';
        document.querySelector('.link__gmail').style.fontWeight = 'bold';
        document.querySelector('.link__telegram').style.color = '#fff';
        document.querySelector('.link__telegram').style.fontWeight = 'bold';
        document.querySelector('.link__call-number').style.color = '#fff';
        document.querySelector('.link__call-number').style.fontWeight = 'bold';
        document.querySelector('.link__location').style.color = '#fff';
        document.querySelector('.link__location').style.fontWeight = 'bold';
        document.querySelector('.contacts__list').style.textShadow = '2px 2px 2px #000';
    }
    function blackoutContacts() {
        document.querySelector('.contacts__underline').style.left = '-380px';
        document.querySelector('.contacts__underline').style.backgroundColor = '#b1cc51';
        document.querySelector('.contacts__list').style.color = '#0e5c30';
        document.querySelector('.link__linkedin').style.color = '#0e5c30';
        document.querySelector('.contacts__list').style.fontWeight = '400';
        document.querySelector('.link__linkedin').style.fontWeight = '400';
        document.querySelector('.link__discord').style.fontWeight = '400';
        document.querySelector('.link__discord').style.color = '#0e5c30';
        document.querySelector('.link__gmail').style.color = '#0e5c30';
        document.querySelector('.link__gmail').style.fontWeight = '400';
        document.querySelector('.link__telegram').style.color = '#0e5c30';
        document.querySelector('.link__telegram').style.fontWeight = '400';
        document.querySelector('.link__call-number').style.color = '#0e5c30';
        document.querySelector('.link__call-number').style.fontWeight = '400';
        document.querySelector('.link__location').style.color = '#0e5c30';
        document.querySelector('.link__location').style.fontWeight = '400';
        document.querySelector('.contacts__list').style.textShadow = 'none';
    }

    document.querySelector('.languages').style.filter = 'blur(3px)';

    function languagesFocus() {
        document.querySelector('.languages').style.filter = 'blur(0)';
    }

    function languagesBlur() {
        document.querySelector('.languages').style.filter = 'blur(3px)';
    }

}

const div = document.querySelector('.main__aboutMe');
const text = div.textContent;
const chars = text.split('');
div.textContent = '';
for (let i = 0; i < chars.length; i++) {
    const span = document.createElement('span');
    span.textContent = chars[i];
    span.style.animationDelay = `${i * 0.1}s`;
    div.appendChild(span);
}

div.addEventListener('mouseenter', function () {
    div.classList.add('active');
});

div.addEventListener('mouseleave', function () {
    div.classList.remove('active');
});

cv();