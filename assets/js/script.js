      // ==================================
// 1. Toggle humbugger menu;
// By default, the .link tag should 
// display none.
// ==================================

const linkmenu = document.getElementsByClassName('link')[0]
const hammenu = document.querySelector('.hamburger')
linkmenu.style.display = 'none'

hammenu.addEventListener('click', () => {
   
  var links = document.getElementsByClassName("link");

  Array.from(links).forEach((x) => {
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  })
})



// ==================================
// 2. Display products based on 
// All, Men or Female categories.
// ==================================
filter("all");

function filter(c) {
  var x, i;
  x = document.getElementsByClassName('tag')
  if (c == "all") c = ""
  for(i = 0; i < x.length; i++){
    removeClass(x[i], "show");
    if(x[i].className.imdexOf(c) > -1) addClass(x[i], "show");
    
  }
  
}





// ==================================
// 2. Display products based on 
// search keywords in the input fields.
// ==================================
