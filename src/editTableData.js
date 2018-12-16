var table = $('tr td:not(.identify,.links,.act)');
var editingTd;

[].forEach.call(table,function(el){
  el.addEventListener("click",function(event) {
    var target = event.target;
    while (target != table) {
      if (target.className == 'edit-cancel btn-danger') {
        finishTdEdit(editingTd.elem, false);
        return;
      }
      if (target.className == 'edit-ok btn-success') {
        finishTdEdit(editingTd.elem, true);
        return;
      }
      if (target.nodeName == 'TD') {
        if (editingTd) return;
        makeTdEditable(target);
        return;
      }
      target = target.parentNode;
    }
  })
})

function makeTdEditable(td) {
  editingTd = {
    elem: td,
    data: td.innerHTML
  };

  td.classList.add('edit-td');

  var textArea = document.createElement('textarea');
  textArea.className = 'edit-area';
  textArea.value = td.innerHTML;
  td.innerHTML = '';
  td.appendChild(textArea);
  textArea.focus();
  td.insertAdjacentHTML("beforeEnd",
    '<div class="edit-controls"><button type="button" class="edit-ok btn-success">OK</button><button class="edit-cancel btn-danger">CANCEL</button></div>'
  );
}

function finishTdEdit(td, isOk) {
  if (isOk) {
    td.innerHTML = td.firstChild.value;
  } else {
    td.innerHTML = editingTd.data;
  }
  td.classList.remove('edit-td');
  editingTd = null;
}

$('.delete').hover(function() {
  $(this).css('cursor','pointer');
});

$(document).on("click", ".delete", function(){
  $(this).parents("tr").remove();
});
