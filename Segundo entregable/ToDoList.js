window.onload = ini;

function ini(){
   
    let nomas = false;
    let contador = 0;
    document.getElementById('tarea').addEventListener('keyup',createJob);
    
    function createJob(e){
        
       if(e.which == 13){
        
        if(this.value !== ''){
            contador++;
        let elementP = document.createElement('p');
        let textP = document.createTextNode(this.value);

        let iconremove = document.createElement('i');
        iconremove.className = 'fas fa-trash-alt';
        iconremove.setAttribute('title','Remover tarea');
        elementP.appendChild(textP);
        elementP.appendChild(iconremove);    
            
        document.getElementById('lista').appendChild(elementP);
            
        nomas = false;
            
        this.value = '';
            
        if(document.getElementsByClassName('errorUF').length > 0){
             document.getElementsByClassName('errorUF')[0].remove();
        }
         
        for(var i = 0; i < document.getElementById('lista').getElementsByTagName('p').length;i++){
            document.getElementById('lista').getElementsByClassName('fa-trash-alt')[i].addEventListener('click',remover);
        }

             
        }
        else{
            
            let errorP = document.createElement('p');
            let textEP = document.createTextNode('No se ha ingresado una ');
            
            errorP.className = 'errorUF';
            errorP.appendChild(textEP);
            
            if(nomas == false){
                document.getElementsByClassName('info')[0].appendChild(errorP);
                nomas = true;
            }
         }
       }
    }
    
    for(var i = 0;i < localStorage.length;i++){
    contador = localStorage.length;
    let itemsv = document.createElement('p');
        
    let itemtextnode = document.createTextNode(localStorage.key(i));
    
        let iconr = document.createElement('i');
            
        iconr.className = 'fas fa-trash-alt';
        iconr.setAttribute('title','Remover tarea');
            
        itemsv.appendChild(iconr);         
        
        itemsv.appendChild(itemtextnode);

        document.getElementById('lista').appendChild(itemsv);
        document.getElementById('lista').getElementsByClassName('fa-trash-alt')[i].addEventListener('click',remover);   
        
    }
    
    function remover(){
         contador--;
            this.parentElement.remove();
        
        if(localStorage.length > 0){
            localStorage.removeItem(this.parentElement.textContent);
        }
        
    }

}
