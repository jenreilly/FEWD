//Define prototypical Slider function
Element.prototype.nav = function(){


  var nav = this,
      navBtn = document.createElement('div'),
      container = document.getElementById('container');

  // Create buttons for sliding the Slider left and right

  this.createButtons = function(){

    // add classes to buttons for styling

    navBtn.classList.add('nav');

    // add EventListeners to buttons, activating the CSS transition

    navBtn.addEventListener('mousedown',function(){
      //if()
        container.classList.toggle('open');

    });


    // append the buttons to the Slider

    nav.appendChild(navBtn);


  };



  this.init = function(){

    nav.createButtons();



  };


  this.init(); // do tasks on initialization.


};
/* end Slider */
