$(function()
{
    $("#addtable").click(function () {
        var index = 1;
        $('#tableCollection0').clone().attr({'id': 'tableCollection' + index}).appendTo('#wrapper');
        index++;
    });
    $("#addfield").click(function () {
        var index = 0;
        $('#field').clone().attr({'id': 'field' + index}).appendTo('#fields');
        index++;
    });

});



