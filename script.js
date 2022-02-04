
let box1 =document.querySelector('.box1')
let box_choosen =document.querySelectorAll('.box_choosen')


let i=0
box1.addEventListener('click',()=>{
  box1.classList.toggle('active')
 box_choosen.forEach(item=> {
    //  console.log(`box${i}`);
    //  console.log("hello",item)
    //  item.style.display="block";
     item.classList.toggle('add_supp')
    //  i++;
 });
   
})


