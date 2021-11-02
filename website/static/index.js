$(function()
{
    $("#addfield").click(function () {
        var index = 0;
        $('#field').clone().attr({'id': 'field' + index}).appendTo('#fields');
        index++;
    });

});



$(function()
{ var T = 1;
    $("#addtable").click(function () {
    var div = document.createElement('form');
    div.setAttribute('class', 'Table block');
    div.setAttribute('id', 'Table Block'+T);
    div.setAttribute('value', T);
    div.setAttribute('style','padding-top: 30px');
    div.innerHTML = '    <div class="container" >\n' +
        '      <div class="row" style="padding: 2px">\n' +
        '        <div class="col-2"  align="right" style="line-height: 38px" >Input Table Name:</div>\n' +
        '        <div class="col-2" >\n' +
        '          <input type="text" class="form-control" name="Table" placeholder="Table Name"/>\n' +
        '        </div>\n' +
        '      </div>\n' +
        '\n' +
        '      <div class="row" style="padding: 2px">\n' +
        '        <div class="col-2" align="right" style="line-height: 38px"  >Records Expected:</div>\n' +
        '        <div class="col-2" >\n' +
        '          <input type="text" class="form-control" id="Records" name="Records" placeholder="Records"/>\n' +
        '        </div>\n' +
        '      </div>\n' +
        '      <div class="row" style="padding: 10px"></div>\n' +
        '      <div class="row" style="padding: 2px">\n' +
        '        <div class="col-2" style="line-height: 38px"  >Field Name</div>\n' +
        '        <div class="col-2" style="line-height: 38px"  >Datatype</div>\n' +
        '        <div class="col-2" style="line-height: 38px"  >n-value</div>\n' +
        '        <div class="col-2" style="line-height: 38px"  >Minimum Bytes</div>\n' +
        '        <div class="col-2" style="line-height: 38px"  >Maximum Bytes</div>\n' +
        '      </div>\n' +
        '      <div id="fields">\n' +
        '        <div class="row" id = "field" style="padding: 2px">\n' +
        '          <div class="col-2" >\n' +
        '            <input type="text" class="form-control" id="Field Name" name="Field Name" placeholder="Field Name"/>\n' +
        '          </div>\n' +
        '          <div class="col-2" >\n' +
        '            <div class="dropdown">\n' +
        '              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"  data-toggle="dropdown" aria-expanded="false">\n' +
        '                Dropdown button\n' +
        '              </button>\n' +
        '              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">\n' +
        '                <li><a class="dropdown-item" value={"min-max":["0","1"]}>char(n)</a></li>\n' +
        '                <li><a class="dropdown-item" value={"min-max":["0","1"]}>varchar(n)</a></li>\n' +
        '                <li><a class="dropdown-item" value={"min-max":["0","1"]}>varchar(max)</a></li>\n' +
        '              </ul>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="col-2" >\n' +
        '          <input type="text" class="form-control" name="n-value" placeholder="n/a"/>\n' +
        '        </div>\n' +
        '          <div class="col-2" >100</div>\n' +
        '          <div class="col-2" >1000</div>\n' +
        '        </div>\n' +

        '      </div>\n' +
        '      <div class="row" style="padding: 2px">\n' +
        '        <div class="col-2" style="line-height: 38px"  ></div>\n' +
        '        <div class="col-2" style="line-height: 38px" align="right"  >Total Bytes:</div>\n' +
        '        <div class="col-2" style="line-height: 38px" value="0" ></div>\n' +
        '        <div class="col-2" style="line-height: 38px" value="0" ></div>\n' +
        '      </div>\n' +

        '\n' +
        '\n' +
        '      <div class="row" style="padding: 2px">\n' +
        '        <button type="button" class="btn btn-primary col-1" id="addfield" style="padding: 2px">Add Field</button>\n' +
        '      </div>\n' +
        '    </div>' +
        '<hr/>';

    document.getElementById('wrapper').appendChild(div);
    T++;
    });
});
$(function() {
    function DropDown() {
        document.getElementsByClassName("btn btn-secondary dropdown-toggle").classList.toggle("show");
    }
});



