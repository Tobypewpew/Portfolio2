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
        '                <li><a class="dropdown-item" value=1  >Char          </a></li>\n' +
        '                <li><a class="dropdown-item" value=2  >Varchar       </a></li>\n' +
        '                <li><a class="dropdown-item" value=3  >Nchar         </a></li>\n' +
        '                <li><a class="dropdown-item" value=4  >NvarChar      </a></li>\n' +
        '                <li><a class="dropdown-item" value=5  >Bit           </a></li>\n' +
        '                <li><a class="dropdown-item" value=6  >Tinybit       </a></li>\n' +
        '                <li><a class="dropdown-item" value=7  >Smallint      </a></li>\n' +
        '                <li><a class="dropdown-item" value=8  >Int           </a></li>\n' +
        '                <li><a class="dropdown-item" value=9 >Bigint        </a></li>\n' +
        '                <li><a class="dropdown-item" value=10 >Decimal       </a></li>\n' +
        '                <li><a class="dropdown-item" value=11 >Numeric       </a></li>\n' +
        '                <li><a class="dropdown-item" value=12 >Smallmoney    </a></li>\n' +
        '                <li><a class="dropdown-item" value=13 >Money         </a></li>\n' +
        '                <li><a class="dropdown-item" value=14 >Real          </a></li>\n' +
        '                <li><a class="dropdown-item" value=15 >Float         </a></li>\n' +
        '                <li><a class="dropdown-item" value=16 >Date          </a></li>\n' +
        '                <li><a class="dropdown-item" value=17 >Datetime      </a></li>\n' +
        '                <li><a class="dropdown-item" value=18 >Datetime2     </a></li>\n' +
        '                <li><a class="dropdown-item" value=19 >Datetimeoffset</a></li>\n' +
        '                <li><a class="dropdown-item" value=20 >Smalldatetime </a></li>\n' +
        '                <li><a class="dropdown-item" value=21 >Time          </a></li>\n' +
        '                <li><a class="dropdown-item" value=22 >Binary        </a></li>\n' +
        '                <li><a class="dropdown-item" value=23 >Varbinary     </a></li>\n' +
        '              </ul>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="col-2" >\n' +
        '            <input type="number" class="form-control variable" name="variables" placeholder="n/a" value="">\n' +
        '          </div>\n' +
        '          <div class="col-2" >100</div>\n' +
        '          <div class="col-2" >1000</div>\n';
    document.getElementById('fields'+T).appendChild(div);
});

$(document).on('click', '.dropdown-menu li a', function () {
    $(this).parents(".dropdown").find('.btn').html($(this).text());
    var sel = $(this).attr("value");
    var variable = ['n/a','n','n','n','n','n/a','n/a','n/a','n/a','n/a','p','p','n/a','n/a','n/a','n','n/a','n/a','p','p','n/a','n/a','n','n'];
    $(this).parents(".row").find('.variable').attr('placeholder',variable[sel]);
    $(this).parents(".row").find('.variable').val('');


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



