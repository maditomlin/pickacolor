var cardContainer = $('.card-container');
var submit = $('.submit-btn');
submit.on("click",createNewUser);

function createNewUser() {
 var name = $('.name').val();

 appendNewToDo(name);
 $('name').val("");
}

function appendNewToDo (name) {
 cardContainer.append (`
<div class="to-do-card">
<p>${name}</p>
<input type="checkbox">
</div>
`);

var checkbox = $('.checkbox');

checkbox.on("click",remove);
}
function remove() {
  event.target.parentNode.remove();
}
