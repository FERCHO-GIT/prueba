window.onload = function() {
    document.getElementById('cal').addEventListener('click', function(e) {
        e.preventDefault();
        var result = 0.0;
        var ls = parseFloat(document.getElementById('ls').value);
        var li = parseFloat(document.getElementById('li').value);
        var obj = parseFloat(document.getElementById('obj').value);
        var error = parseFloat(document.getElementById('error').value);
        var p = obj - error;

        result = (ls + li) / 2;

        var display = '<table>';
        display += '<tr>';
        display += '<th>Limite superior</th>';
        display += '<th>Limite inferior</th>';
        display += '<th>Resultado</th>';
        display += '</tr>';
        display += '<tr>';
        display += '<td>' + ls.toFixed(2) + '</td>';
        display += '<td>' + li.toFixed(2) + '</td>';
        display += '<td>' + result.toFixed(2) + '</td>';
        display += '</tr>';

        var i = 0;
        while (result != obj || result != p) {
            if (obj < result || p < result) {
                ls = result;
                result = (ls + li) / 2;
                display += '<tr>';
                display += '<td>' + ls.toFixed(2) + '</td>';
                display += '<td>' + li.toFixed(2) + '</td>';
                display += '<td>' + result.toFixed(2) + '</td>';
                display += '</tr>';
            }

            if (obj > result || p > result) {
                li = result;
                result = (ls + li) / 2;
                display += '<tr>';
                display += '<td>' + ls.toFixed(2) + '</td>';
                display += '<td>' + li.toFixed(2) + '</td>';
                display += '<td>' + result.toFixed(2) + '</td>';
                display += '</tr>';
            }
            
            if (i == 10 || result == obj || result == p) {
                break;
            }

            i++;
        }

        display += '</tr>';
        display += '</table>';

        document.getElementById('display').innerHTML = display;
    }, false);
}