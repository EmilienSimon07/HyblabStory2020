function initForm(){
  var rad = document.form.myRadios;
  var prev = document.getElementById("imageBouton1905");
  for (var i = 0; i < rad.length; i++) {
      rad[i].addEventListener('click', function() {
          fadeOut(prev.getAttribute("value"));
          if (this !== prev) {
              prev = this;
          }
          fadeIn(this.getAttribute("value"));
      });
  }
}

function fadeIn(id){
  //le bouton
  var bouton = document.getElementById("imageBouton" + id);
  bouton.src="img/boutonActif.svg";
  //l'image
  let image = document.getElementById("carte" + id);
  image.style.opacity = "1";
  if (id=="1957"){
    var suiteTexte = document.getElementById("next4-texte");
    var suiteImage = document.getElementById("next4-img");
    var suite = document.getElementById("next4");
    suiteTexte.style.visibility = "visible";
    suiteImage.style.visibility = "visible";
    suite.style.visibility = "visible";
  }
}

function fadeOut(id){
  //le bouton
  var bouton = document.getElementById("imageBouton" + id);
  bouton.src="img/boutonInactif.svg";
  //l'image
  let image = document.getElementById("carte" + id);
  image.style.opacity = "0";
}

let initSlide3 = function(){
  initForm();
  /*d3.select('#next4').on('click', function(){
    moveRight();
    initSlide4();
  });*/
  d3.select('#next4').on('click', function(){
    moveRight();
    initSlide4();
  });

  d3.select('#next4').on('mouseover', function(){
      anime({
          targets: '#next4-texte, #next4-img',
          scale: 1.2
      });
  });

  
  d3.select('#next4').on('mouseout', function(){
      anime({
          targets: '#next4-texte, #next4-img',
          scale: 1
      });
  });
}
