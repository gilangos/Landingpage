const btn = document.querySelector('.btn-mob')
const moblist = document.querySelectorAll('#home header nav ul li')
const list = document.querySelectorAll('#home header nav ul li a')
const list_container = document.querySelector('#home header nav ul')
const header = document.querySelector('#home header')

const data_anime = document.querySelectorAll('[data-anime]')



const handleButton =()=>{
    list_container.classList.toggle('active')
    btn.classList.toggle('active')
}

moblist.forEach(element => {
  element.onclick = ()=>{
    btn.classList.toggle('active')
    list_container.classList.toggle('active')
  }
});

list.forEach(element=>{
    element.onclick = (e)=>{
       
        list.forEach(ele=> ele.classList.remove('active'))

        e.target.classList.add('active')
        setTimeout(()=> e.target.classList.remove('active'), 5000)
    }
}
)


window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 50){
        header.style = 'background: #0D1728; top: 0; padding: 20px 30px'
    }else{
        header.style = 'background: transparent; top: 62px;'
    }
})


window.addEventListener('scroll',()=>{
    data_anime.forEach((obj)=>{
        let range = obj.offsetTop;

        if(window.pageYOffset > range - (window.innerHeight * 3/4)){
            obj.classList.add('active')
           
        }else{
            obj.classList.remove('active')
        }
    }) 
})


const circles =  document.querySelectorAll('.circles span')

const btn1 = document.querySelector('.btn-fst')
const btn2 = document.querySelector('.btn-snd')

let currentPreview = 0;

btn2.onclick = ()=>{
    currentPreview++
    
    currentPreview > circles.length - 1 ? currentPreview = 0 : null;


    circles.forEach(elem=> elem.classList.remove('active'))
    
    circles[currentPreview].classList.add('active')
}

btn1.onclick = ()=>{
    currentPreview--
    
    currentPreview < 0 ? currentPreview = circles.length - 1  : null;


    circles.forEach(elem=> elem.classList.remove('active'))
    
    circles[currentPreview].classList.add('active')
}


