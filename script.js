const sear = document.querySelector('input');
const bar = document.querySelector('.search-bar');
const res = document.querySelector('.results');
const hbtn = document.querySelector('button');
const drop = document.querySelector('.dropdown');
const dropmenu = document.querySelector('.dropdown_menu');
const mmenu = document.querySelector('.mob_menu');
const gm = document.querySelector('.goto');
const nl = document.querySelectorAll('.dis-like');
const l = document.querySelectorAll('.like');
const ic = document.querySelectorAll('i');

sear.addEventListener('input', () => {
  if (sear.value !== '') {
    res.style.zIndex = '20';
    res.style.opacity = '1';
    res.style.height = '400px';
  } else {
    res.style.Zindex = '-1';
    res.style.opacity = '0';
    res.style.height = '0';
  }
  if (window.innerWidth > 600) {
    sear.style.width = '500px';
  }
  if (sear.value === '') {
    sear.style.width = '300px';
  }
});

sear.onclick = () => {
  if (window.innerWidth < 600) {
    sear.style.width = '300px';
  }
};
document.querySelector('.fa-search').onclick = () => {
  if (window.innerWidth < 600) {
    sear.style.width = '300px';
  } else {
    sear.style.width = '500px';
  }
};

window.onclick = (e) => {
  if (e.target === sear || e.target === document.querySelector('.fa-search')) {
    console.log('closed');
    return;
  }
  if (window.innerWidth < 600) {
    sear.style.width = '0px';
    res.style.Zindex = '-1';
    res.style.opacity = '0';
    res.style.height = '0';
  } else {
    sear.style.width = '300px';
    res.style.Zindex = '-1';
    res.style.opacity = '0';
    res.style.height = '0';
  }
};

hbtn.onclick = () => {
  hbtn.classList.toggle('active');
  mmenu.classList.toggle('menu_open');
};

drop.onclick = () => {
  dropmenu.classList.toggle('open');
  gm.classList.toggle('open');
};

l.forEach((it) => {
  it.addEventListener('click', (e) => {
    if (getComputedStyle(it).getPropertyValue('color') === 'rgb(0, 0, 255)') {
      it.style.color = '#000';
      return;
    }
    it.style.color = 'blue';
    it.nextElementSibling.style.color = '#000';
  });
});

nl.forEach((it) => {
  it.addEventListener('click', (e) => {
    if (getComputedStyle(it).getPropertyValue('color') === 'rgb(255, 0, 0)') {
      it.style.color = '#000';
      return;
    }
    it.style.color = 'red';
    it.previousElementSibling.style.color = '#000';
  });
});

ic.forEach((it) => {
  it.addEventListener('click', (e) => {});
});
