$(function()
{
    $("#addtable").click(function () {
        var index = 0;
        $('#tableCollection').clone().attr({'id': 'tableCollection' + index, hidden: false}).appendTo('#wrapper');
        index++;
    });
    $("#addfield").click(function () {
        var index = 0;
        $('#field').clone().attr({'id': 'field' + index}).appendTo('#fields');
        index++;
    });

});



