
var ul = document.getElementById('list');

firebase.database().ref('todos').on('child_added',function(data){
    
var li = document.createElement('li');
var li_txt = document.createTextNode(data.val().value);
li.setAttribute('class','todo_li')
li.appendChild(li_txt);

// todo.value = "";


 //delete button

var del_btn = document.createElement('button');
var del_txt = document.createTextNode('Delete')
del_btn.setAttribute('class','btns');
del_btn.setAttribute('id' ,data.val().key)
del_btn.setAttribute('onclick','del(this)')

del_btn.appendChild( del_txt );
li.appendChild(del_btn);
 //Edit Button

 var edit_btn = document.createElement('button');
 var edit_txt = document.createTextNode('Edit');
 edit_btn.setAttribute('class','btns');
 edit_btn.setAttribute('id' ,data.val().key)
 edit_btn.setAttribute('onclick','edt(this)')

 edit_btn.appendChild(edit_txt);
 li.appendChild(edit_btn);
 ul.appendChild(li);

})
function todo(){
var todo = document.getElementById('formGroupExampleInput');
var database = firebase.database().ref('todos')
var key = database.push().key;
var todof = {
    value: todo.value,
    key: key,
}

    database.child(key).set(todof);
   todo.value = " ";
}




function del(e){
   firebase.database().ref('todos').child(e.id).remove();
    e.parentNode.append.remove();
    
}

function edt(e){
    var edit_value = prompt('Enter Edit Value',e.parentNode.firstChild.nodeValue);
    var editTodo = {
        value : val,
        key : e.id,
    }
    firebase.database().ref('todos').child(e.id).set(editTodo)
   
  


     e.parentNode.firstChild.nodeValue = val;

}


function del_all(){

    ul.innerHTML ="";
}
