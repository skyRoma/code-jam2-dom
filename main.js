let array=[
    'Lorem ipsum dolor sit amet consectetur adipisicing elit laborum sunt consequatur cupiditate perspiciatis obcaecati atqu optio voluptate reiciendis vel accusamus nam cum doloremque consectetur cupiditate ipsam delectusendi  nulla tempore dolores, tempora, cum eum aliquam nam odio mollitia repellat.'
    ,
    'Sit amet consectetur adipisicing elit laborum sunt consequatur cupiditate perspiciatis obcaecati atqu optio voluptate reiciendis vel accusamus nam cum.Dicta nobis illo quo quasi nisi minus atque aperiam, tempora natus eos voluptas accusantium quiatiae ap, plaempora, cum eum aliquam nam a repellat.'
    ,
    'Adipisicing elit laborum sunt consequatur cupiditate perspiciatis obcaecati atqu optio voluptate reiciendis vel accusamus.Dicta icia quasi qui molestias commodi veritatis repellendus ad cum aliquid at quis fugiat deleniti molestiae.  Nam cum dro odio aperiam Sapiente distinctio accusamus libero.'
    ,
    'Facilis nulla tempore dolores, tempora, cum eum aliquam nam odio mollitia repellat. Fuga tempore sapiente, quisquam doloribus mciatis obcaecati atqu optio voluptate reiciendis vel accusamus nam cum doloremque consectetur cupiditate ipsam delectus molestias debitis nisi maxime vero odio apnctio accusamus libero.'
    ,
    'Nisi minus atque aperiam, tempora natus eos voluptas accusantium quia id facere. Ducimus molestiae aperiam elige officia quas dolor sit amet consectetur adipisicing elit laborum sunt consequatur cupiditate perspiciatis obcaecati atqu optio voluptate reiciendis vel accusamus nam delectus .'
    ,
    'Dicta nobis illo quo quasi nisi minus atque aperiam, tempora natus eos voluptas accusantium quia id facere. Ducimus molesti Reiciendis eveniet tempora magnam fugit ratione aperiam, consequuntur rerum nostrum iure placeat tenetur odit officia quasi qui molestiquis fugiat.'
    ,
    'Reiciendis eveniet tempora magnam fugit ratione aperiam, consequuntur rerum nostrum iure placeat tenetur odit officia quasi qui molestias commodi veritatis repellendus ad cum aliquid at quis fugiat deleniti molestiae. e reiciendis ate perspiciatate reiciendis vel accusamus nam cum doloremque.'
    ,
    'Cupiditate ipsam delectus molestias debitis nisi maxime vero odio aperiam Sapiente distinctio accusamus libero.Ipsum dolor sit amet consectetur adipisicing elit laborum sunt consequatur cupiditate perspiciatis obcaecati atqu optio voluptate reiciendis vel accusamus nam maxime vero odiobero.'
    ,
]

let tip = document.querySelector('.tip');

window.onload=function(){
    if(!localStorage.getItem('disabled'))
    setTimeout(()=>{
        for(let i = 0; i < array.length; i++ ){
        let radioItem = document.createElement('i');
        radioItem.classList.add('radio-item');
        radioItem.setAttribute('name', i+1);
        document.querySelector('.radio-wrapper').appendChild(radioItem);
        document.querySelector('.radio-item:first-child').classList.add('current');
        }
        tip.innerHTML=array[0];
        document.querySelector('.notification').classList.remove('close');
    },5000)
}
    
let closer = document.querySelector('.icon-cancel');
function close(){
    document.querySelector('.notification').classList.add('close');
}
closer.addEventListener('click',close);    


let checkbox = document.querySelector('input[type=checkbox]');
function toStorage(){
    if (checkbox.checked)
    localStorage.setItem('disabled', true);
    else localStorage.removeItem('disabled', true);
}
checkbox.addEventListener('click',toStorage);    


let leftArrow = document.querySelector('.icon-left-circled');
leftArrow.addEventListener('click', ()=>{move('toLeft')});

let rightArrow = document.querySelector('.icon-right-circled');
rightArrow.addEventListener('click', ()=>{move('toRight')});

let radioWrapper = document.querySelector('.radio-wrapper');
function navigate(){
    let target = event.target; 
    if (target.tagName != 'I') return;
    let current = document.querySelector('.current');
    current.classList.remove('current');
    target.classList.add('current');
    let targetIndex=target.getAttribute('name');
    tip.innerHTML=array[targetIndex-1];
}
radioWrapper.addEventListener('click', navigate);

document.addEventListener("keydown", e =>{
    if (e.keyCode === 27) close();
    if (e.keyCode === 39) move('toRight');
    if (e.keyCode === 37) move('toLeft');
    return;
});

function move(){
    let current = document.querySelector('.current');
    let currentIndex=current.getAttribute('name');
    current.classList.remove('current');
    if(arguments[0]=='toRight'){
        if (currentIndex == array.length) currentIndex=0;
        document.querySelector(`.radio-item:nth-child(${++currentIndex})`).classList.add('current');
    }
    if(arguments[0]=='toLeft'){
        if (currentIndex == 1) currentIndex=array.length+1; 
        document.querySelector(`.radio-item:nth-child(${--currentIndex})`).classList.add('current');
    }   
    tip.innerHTML=array[currentIndex-1];
}