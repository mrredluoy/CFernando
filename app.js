const d=document
/*declarando elementos del dom*/
const $boxContent=document.getElementById('box-content'),
$collection=d.getElementById('collection'),
$marketplace=d.getElementById('marketplace'),
$information=d.getElementById('information'),
$social=d.getElementById('social'),
$profile=d.getElementById('profile'),
$btn=document.querySelectorAll('.btn'),
$contentNav=d.getElementById('section-nav'),
$btnR=d.getElementById('btn-r'),
$contentSection=d.getElementById('conten-section'),
$template=d.getElementById('template').content,
$contenPrueva=d.getElementById('content-prueva'),
$contentLarge=d.getElementById('content-large');
console.log($btn[0].classList.toggle('btn-butom'))
console.log($contentLarge)
 
/*creando un framen para el tamplate*/
const fragmen=document.createDocumentFragment()

/*dando evento al contenido principal*/
$boxContent.addEventListener('click',deslice)

function deslice(e){
  console.log(e.target.classList.contains('marketplace'))

if(e.target.classList.contains('collection')){
$btn[1].classList.toggle('btn-butom')
$collection.classList.toggle('none')

}
if(e.target.classList.contains('marketplace')){
  $marketplace.classList.toggle('none')
  $btn[2].classList.toggle('btn-butom')
}
if(e.target.classList.contains('information')){
  $information.classList.toggle('none')
  $btn[3].classList.toggle('btn-butom')
}
if(e.target.classList.contains('social')){
  $social.classList.toggle('none')
  $btn[4].classList.toggle('btn-butom')
}
if(e.target.classList.contains('profile')){


  if(window.outerWidth<880){
   
    $contentLarge.style.opacity=1
    $contentNav.classList.toggle('none')
    $btnR.classList.add('none')
    $contentLarge.innerHTML='<h2 class="color-white"> MI Perfil</h2> <img class="img-card profile" src="img/user1.svg" alt="usuario">'
    
  }else{
    $contentLarge.innerHTML='<h2 class="color-white"> MI Perfil</h2> <img class="img-card profile" src="img/user1.svg" alt="usuario">'
  }

       


}
if(e.target.classList.contains('menu')){
if(window.outerWidth<880){
  console.log('yes')
  $btnR.classList.remove('none')
  $contentSection.style.width=100+'%'
  $contentNav.classList.remove('none')
  $contentLarge.style.opacity=0
  
}else{
  $contentSection.style.width=75+'%'
$contentNav.classList.remove('none')
$btnR.classList.remove('none')
}
  

}
if(e.target.classList.contains('btn-r')){
  $btn[1].classList.add('btn-butom')
$collection.classList.add('none')
$marketplace.classList.add('none')
$information.classList.add('none')
$btn[3].classList.add('btn-butom')
  $btn[2].classList.add('btn-butom')
  $social.classList.add('none')
  $btn[4].classList.add('btn-butom')
  if(window.outerWidth<880){
   
    $contentLarge.style.opacity=1
    $contentNav.classList.toggle('none')
    $btnR.classList.add('none')
   
    
    
  }else{
    $btnR.classList.add('none')
  $contentNav.classList.toggle('none')
  $contentSection.style.width=100+'%'
  }
  
}

if(e.target.classList.contains('event')){   
   let padre=e.target.parentElement
  let texto= padre.querySelector('span').textContent
  console.log(texto)
  pintar(texto)
}


}

/*funcion para dibujar el elemto template*/
function pintar(texto){
  if(window.outerWidth<880){
    $contentLarge.style.opacity=1
    $contentNav.classList.toggle('none')
    $btnR.classList.toggle('none')
    $contentLarge.innerHTML=''
$template.querySelector('h2').textContent=texto
const clone=$template.cloneNode(true)
fragmen.appendChild(clone)
$contentLarge.appendChild(fragmen)
    
  }else{
    $contentLarge.innerHTML=''
$contenPrueva.classList.add('none')
$template.querySelector('h2').textContent=texto
const clone=$template.cloneNode(true)
fragmen.appendChild(clone)
$contentLarge.appendChild(fragmen)

  }

  
}




