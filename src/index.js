import ajax from './getAjax'

ajax({ url:'/src/tableData.json'})
.then(result=>{
    $('#table').bootstrapTable({
        data: result
    });
    $('tbody').sortable();

}); 

$.getScript( "/src/editTableData.js");
$.getScript( "/src/setMarkers.js");
