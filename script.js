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

sear.addEventListener('input', () => {
    if (sear.value !== ''){
    res.style.zIndex= '20';
    res.style.opacity = '1';
    res.style.height= '400px';
    }else{
    res.style.Zindex= '-1';
    res.style.opacity = '0';
    res.style.height= '0';
    }
})

sear.onclick = () => {
  if (window.innerWidth < 600){
    sear.style.width = '300px';
  }else{
    sear.style.width = '500px';
  }
}
document.querySelector('.fa-search').onclick = () => {
  if (window.innerWidth < 600){
    sear.style.width = '300px';
  }else{
    sear.style.width = '500px';
  }
}

window.onclick = e => {
  if(e.target === sear || e.target === document.querySelector('.fa-search')){
    console.log("closed")
    return;
  }
  if (window.innerWidth < 600){
  sear.style.width = '0px';
  res.style.Zindex= '-1';
  res.style.opacity = '0';
  res.style.height= '0';
  }else{
  sear.style.width = '300px';
  res.style.Zindex= '-1';
  res.style.opacity = '0';
  res.style.height= '0';
  }
}

hbtn.onclick = () => {
  hbtn.classList.toggle('active');
  mmenu.classList.toggle('menu_open');
}

drop.onclick = () => {
  dropmenu.classList.toggle('open');
  gm.classList.toggle('open');
}

  nl.forEach(it => {
    it.addEventListener('click', e => {
      if(window.getComputedStyle( e.target , null).getPropertyValue( 'color' ) === 'rgb(255, 0, 0)'){
        if(e.target.classList.contains('fa-hand-middle-finger')){
          e.target.parentElement.style.color = '#000';
        }
        else{
          e.target.style.color = '#000';
        }
        return;
      }
      if(e.target.classList.contains('fa-hand-middle-finger')){
        e.target.parentElement.style.color = 'red';
        e.target.parentElement.previousElementSibling.style.color = '#000';
      }else{
        e.target.style.color = 'red';
        e.target.previousElementSibling.style.color = '#000';
      }
      
    })
  })


  l.forEach(it => {
    it.addEventListener('click', e => {
      if(window.getComputedStyle( e.target , null).getPropertyValue( 'color' ) === 'rgb(0, 255, 255)'){
        if(e.target.classList.contains('fa-thumbs-up')){
          e.target.parentElement.style.color = '#000';
        }
        else{
          e.target.style.color = '#000';
        }
        return;
      }
      if(e.target.classList.contains('fa-thumbs-up')){
        e.target.parentElement.style.color = 'cyan';
        e.target.parentElement.nextElementSibling.style.color = '#000';
      }else{
        e.target.style.color = 'cyan';
        e.target.nextElementSibling.style.color = '#000';
      }
    })
  })

