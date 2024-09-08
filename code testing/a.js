const title_id = document.getElementById('title_id')
const btn_add = document.getElementById('btn_add')
const list = document.getElementById('list')

title_id.focus();

btn_add.addEventListener('click', addTitle)

title_id.addEventListener('keypress',(event)=>{
    if(event.key === 'Enter'){
        addTitle()
    }
})

function addTitle(){
    const input = title_id.value;
    
    if(input !== ''){
        const li = document.createElement('li');
        li.innerHTML = input;
        
        list.appendChild(li);

        title_id.value = '';
    }
}