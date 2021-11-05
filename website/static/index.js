$(document).on('click', '.addfield', function () {
    var T = $(this).val();
    var div = document.createElement('div');
    div.setAttribute('class', 'row');
    div.innerHTML =
        '          <div class="col-2" >\n' +
        '            <input type="text" class="form-control" id="Field Name" name="Field Name" placeholder="Field Name"/>\n' +
        '          </div>\n' +
        '          <div class="col-2" >\n' +
        '            <div class="dropdown">\n' +
        '              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
        '                Dropdown button\n' +
        '              </button>\n' +
        '              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">\n' +
        '                <li><a class="dropdown-item" value={"min-max":["0","1"]} data-value = "char(n)" >char(n)</a></li>\n' +
        '                <li><a class="dropdown-item" value={"min-max":["0","1"]} data-value = "varchar(n)" >varchar(n)</a></li>\n' +
        '                <li><a class="dropdown-item" value={"min-max":["0","1"]} data-value = "varchar(n)" >varchar(max)</a></li>\n' +
        '              </ul>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="col-2" >\n' +
        '            <input type="text" class="form-control" name="n-value" placeholder="n/a"/>\n' +
        '          </div>\n' +
        '          <div class="col-2" >100</div>\n' +
        '          <div class="col-2" >1000</div>\n';
    document.getElementById('fields'+T).appendChild(div);

});

$(document).on('click', '.dropdown-menu li a', function () {
    $(this).parents(".dropdown").find('.btn').html($(this).text());
    $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});


$(function()
{ var T = 1;
    $("#addtable").click(function () {
    var div = document.createElement('form');
    div.setAttribute('class', 'Table-block');
    div.setAttribute('id', 'Table Block'+T);
    div.setAttribute('value', T);
    div.innerHTML = '    <div class="container" >\n' +
        '      <div class="row">\n' +
        '        <div class="textonly col-2"  align="right">Input Table Name:</div>\n' +
        '        <div class="col-2" >\n' +
        '          <input type="text" class="form-control" name="Table" placeholder="Table Name"/>\n' +
        '        </div>\n' +
        '      </div>\n' +
        '\n' +
        '      <div class="row">\n' +
        '        <div class="textonly col-2" align="right" >Records Expected:</div>\n' +
        '        <div class="col-2" >\n' +
        '          <input type="text" class="form-control" id="Records" name="Records" placeholder="Records"/>\n' +
        '        </div>\n' +
        '      </div>\n' +
        '      <div class="row">\n' +
        '        <div class="textonly col-2" >Field Name</div>\n' +
        '        <div class="textonly col-2" >Datatype</div>\n' +
        '        <div class="textonly col-2" >n-value</div>\n' +
        '        <div class="textonly col-2" >Minimum Bytes</div>\n' +
        '        <div class="textonly col-2" >Maximum Bytes</div>\n' +
        '      </div>\n' +
        '      <div id="fields'+T+'">\n' +
        '      </div>\n' +
        '      <div class="row">\n' +
        '        <div class="textonly col-2"  ></div>\n' +
        '        <div class="textonly col-2"  ></div>\n' +
        '        <div class="textonly col-2" align="right"  >Total Bytes:</div>\n' +
        '        <div class="textonly col-2" value=0 >0</div>\n' +
        '        <div class="textonly col-2" value=0 >0</div>\n' +
        '      </div>\n' +
        '\n' +
        '\n' +
        '      <div class="row">\n' +
        '        <button type="button" class="btn btn-primary col-1 addfield" id="addfield"' +T+ ' value='+T+' >Add Field</button>\n' +
        '      </div>\n' +
        '    </div>' +
        '<hr/>';

    document.getElementById('wrapper').appendChild(div);
    T++;
    });
});



