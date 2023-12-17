// const form = document.getElementById('form');
       
function sendMail(){
    var namein = document.getElementById('name').value;
    var telin = document.getElementById('tel').value;
    var check = document.getElementById('check');
    let regexTel = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
	var tempParams= {
		name:  namein,
		tel:  telin
	};
    
    if(namein!='' && telin!='' && regexTel.test(telin) && check.checked==true){
        emailjs.init("FnSvVtK_KzxGICsHs");
	emailjs.send('service_93vs6in', 'template_jcq97tk', tempParams)
    
	.then(function(res){
        var mod = document.querySelector('.mod-w');
  mod.classList.toggle('d-n');
  mod.style.transition = "all .2s ease-in-out";
  var joke = document.querySelector('.hey');
  joke.classList.toggle('www');
  var close = document.querySelector('.close');
  close.addEventListener('click', ()=>{
    mod.classList.add('d-n');
    joke.classList.remove('www');
  })
  form.reset();
		console.log('success', res.status);
	})} else console.log('non-fixed')
}



        
            var body = 'Як звуть: ' + name + '<br/> Номер телефону:' + tel + '<br>' + 'Хоче отримати консультацію.';
            const publicKey = 'FnSvVtK_KzxGICsHs';
            const serviceID = 'service_93vs6in';
            const tamplateID = 'template_jcq97tk';
        var btn = document.getElementById('sub');
        // function sendEmail(){
        //     btn.addEventListener('click', e=>{
        //         emailjs.init(publicKey);
        //         e.preventDefault();
        //         const inputFields = {
        //             name: namein,
        //             tel: telin
        //         }
                
  