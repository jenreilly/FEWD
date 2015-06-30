Element.prototype.Contact = function() {

  var contact = this,
    form = document.getElementById('c_form'),
    submit = document.getElementById('contact-submit'),
    wrapper = document.getElementById('form-wrapper');

    this.send = function(){
      var link = 'mailto:jreilly.edit@gmail.com?subject=Message from '+
                  form.children[0].value+
                  '&body='+
                  form.children[3].value;

      window.location.href = link;
      wrapper.innerHTML = '<div class="center"><h2>Thanks!</h2></div>';
  };

    this.init = function(){

    submit.addEventListener('click',function(ev){
      ev.preventDefault();
      contact.send();

    });

  };

  this.init();

};
