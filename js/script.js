const main = () => {
    
    var form = document.getElementById('form');

    form.addEventListener('submit', function(e){
        
        for (let i = 0; i < 4; i++) {
            if(form.elements[i].value == 0){
                e.preventDefault(alert('Por favor completar TODO el formulario.'));
                break;
            }else{
                console.log(form.elements[i].value);
            }
        }



        /* if(form.elements[0].value =="" || form.elements[1].value =="" ||
            form.elements[2].value =="" || form.elements[3].value ==""){
                e.preventDefault(alert('Por favor completar TODO el formulario.'));
        }else {
            console.log(form.elements[0].value);
            console.log(form.elements[1].value);
            console.log(form.elements[2].value);
            console.log(form.elements[3].value);
        } */
    })
    
     
}