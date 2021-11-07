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
        '                Datatype\n' +
        '              </button>\n' +
        '              <ul class="dropdown-menu col-xs-12" aria-labelledby="dropdownMenuButton">\n' +
        '                <li><a class="dropdown-item" >Char          </a></li>\n' +
        '                <li><a class="dropdown-item" >Varchar       </a></li>\n' +
        '                <li><a class="dropdown-item" >Text          </a></li>\n' +
        '                <li><a class="dropdown-item" >Nchar         </a></li>\n' +
        '                <li><a class="dropdown-item" >NvarChar      </a></li>\n' +
        '                <li><a class="dropdown-item" >Bit           </a></li>\n' +
        '                <li><a class="dropdown-item" >Tinybit       </a></li>\n' +
        '                <li><a class="dropdown-item" >Smallint      </a></li>\n' +
        '                <li><a class="dropdown-item" >Int           </a></li>\n' +
        '                <li><a class="dropdown-item" >Bigint        </a></li>\n' +
        '                <li><a class="dropdown-item" >Decimal       </a></li>\n' +
        '                <li><a class="dropdown-item" >Numeric       </a></li>\n' +
        '                <li><a class="dropdown-item" >Smallmoney    </a></li>\n' +
        '                <li><a class="dropdown-item" >Money         </a></li>\n' +
        '                <li><a class="dropdown-item" >Real          </a></li>\n' +
        '                <li><a class="dropdown-item" >Float         </a></li>\n' +
        '                <li><a class="dropdown-item" >Date          </a></li>\n' +
        '                <li><a class="dropdown-item" >Datetime      </a></li>\n' +
        '                <li><a class="dropdown-item" >Datetime2     </a></li>\n' +
        '                <li><a class="dropdown-item" >Datetimeoffset</a></li>\n' +
        '                <li><a class="dropdown-item" >Smalldatetime </a></li>\n' +
        '                <li><a class="dropdown-item" >Time          </a></li>\n' +
        '                <li><a class="dropdown-item" >Binary        </a></li>\n' +
        '                <li><a class="dropdown-item" >Varbinary     </a></li>\n' +
        '              </ul>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="col-2" >\n' +
        '            <input type="text" class="form-control variable" name="variables" placeholder="n/a"/>\n' +
        '          </div>\n' +
        '          <div class="col-2" >100</div>\n' +
        '          <div class="col-2" >1000</div>\n';
    document.getElementById('fields'+T).appendChild(div);

});

$(document).on('click', '.dropdown-menu li a', function () {
    $(this).parents(".dropdown").find('.btn').html($(this).text());
    $(this).parents(".row").find('.variable').val('hi')

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
        '        <div class="textonly col-2" >Variables</div>\n' +
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



