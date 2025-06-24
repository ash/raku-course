let replacements = [];

function prepare_quiz() {
    document.querySelectorAll('table.quiz tr').forEach(function(item) {
        item.innerHTML = '<td><span class="yesno">&nbsp;</span></td>' + item.innerHTML;

        let cells = item.querySelectorAll('td');

        if (cells[1].innerHTML == '1') {
            cells[1].innerHTML = '<input type="checkbox" data-ok="1">';
        }
        else if (cells[1].innerHTML == '0') {
            cells[1].innerHTML = '<input type="checkbox" data-ok="0">';
        }

        cells[2].className = 'code';

        if (cells.length > 3) {
            cells[3].style.display = 'none';
            cells[3].className = 'comment';
        }
    });

    document.querySelectorAll('table.quiz-code.fill').forEach(function(table) {
        table.querySelectorAll('tr').forEach(function(tr) {
            tr.className = 'fill';
        });
    });
    
    document.querySelectorAll('table.quiz-code tr').forEach(function(item) {
        let is_fill = item.className == 'fill';
    
        item.innerHTML = '<td><span class="yesno">&nbsp;</span></td>' + item.innerHTML;
    
        let cells = item.querySelectorAll('td');
        let answer = cells[1].innerHTML;
        cells[1].style.display = 'none';
        
        cells[2].className = 'code';
        if (cells.length > 3) {
            cells[3].style.display = 'none';
            cells[3].className = 'comment';
        }
    
        let raw_answers = cells[1].innerHTML.split(' ');
        for (let c = 0; c != raw_answers.length; c++) {
            raw_answers[c] = raw_answers[c].replace(/␣/g, ' ');
        }
    
        let answers = [];
        let fills = [];
        if (!is_fill) {
            answers = raw_answers;            
        }
        else {
            for (let c = 0; c < raw_answers.length; c += 2) {
                console.log('c=', c);
                answers.push(raw_answers[c]);
                fills.push(raw_answers[c + 1]);
            }
        }
    
        if (cells[2].innerHTML.indexOf('␣') != -1) {
            let c = 0;
            cells[2].innerHTML = cells[2].innerHTML.replace(/␣+/g, function(a, b) {
                let length = a.length * 1.2;
                let ret = '<input type="text" class="mono" style="width: ' + length + 'em;" data-ok="' + answers[c] + '"';
                if (is_fill) {
                    ret += ' value="' + fills[c] + '"';
                }
                ret += '/>';
                c++;
    
                return ret;
            });            
        }
    });
    
    document.querySelectorAll('table.quiz-select tr').forEach(function(item) {
        item.innerHTML = '<td><span class="yesno">&nbsp;</span></td>' + item.innerHTML;
    
        let cells = item.querySelectorAll('td');
        let answer = cells[1].innerHTML.trim();
        cells[1].style.display = 'none';
        
        // cells[2].className = 'code';
        if (cells.length > 3) {
            cells[3].style.display = 'none';
            cells[3].className = 'comment';
        }
    
        let question = cells[2].innerHTML;
        let q_from = question.indexOf('(:');
        let q_to = question.indexOf(':)');
        if (q_from != -1 && q_to != -1) {
            let values = question.substring(q_from + 2, q_to).trim();
            let values_items = values.split(',');
            let select = '<select data-ok="' + answer + '"><option value=""></option>';
            for (let c = 0; c != values_items.length; c++) {
                let value = values_items[c].trim();
                select += '<option value="' + value + '">' + value + '</option>';
            }
            select += '</select>';
            cells[2].innerHTML = question.substring(0, q_from) + select + question.substring(q_to + 2);
        }
    });
}

function checkquiz() {
    document.getElementById('ShowAnswers').style.display = 'none';

    document.querySelectorAll('table.quiz input[type="checkbox"]').forEach(function(item) {
        let is_correct = (item.checked && item.dataset.ok == 1) || (!item.checked && item.dataset.ok == 0);
        let row = item.parentElement.parentElement;
        row.querySelector('td').innerHTML = is_correct ? '<span class="yes">✓</span>' : '<span class="no">✘</span>';
    });
    document.querySelectorAll('table.quiz tr td').forEach(function(item) {
        item.style.display = '';
    });

    let show_correct_button = false;

    document.querySelectorAll('table.quiz-code tr').forEach(function(item) {            
        let inputs = item.querySelectorAll('input');
        if (!inputs.length) return;

        let correct = 0;
        for (let c = 0; c != inputs.length; c++) {
            let curr_value = inputs[c].value.trim();
            for (var ir = 0; ir != replacements.length; ir++) {
                curr_value = curr_value.replace(replacements[ir][0], replacements[ir][1]); // once only
            }

            if (curr_value == inputs[c].dataset.ok) {
                correct++;
            }
            else {
                show_correct_button = true;
                break;
            }
        }

        let is_correct = correct == inputs.length;

        let tds = item.querySelectorAll('td');            
        tds[0].innerHTML = is_correct ? '<span class="yes">✓</span>' : '<span class="no">✘</span>';
        if (tds.length > 3) {
            tds[3].style.display = '';
        }
    });

    document.querySelectorAll('table.quiz-select tr').forEach(function(item) {
        let selects = item.querySelectorAll('select');
        if (!selects.length) return;

        let correct = 0;
        for (let c = 0; c != selects.length; c++) {
            if (selects[c].value == selects[c].dataset.ok) {
                correct++;
            }
            else {
                show_correct_button = true;
                break;
            }
        }

        let is_correct = correct == selects.length;
        let tds = item.querySelectorAll('td');            
        tds[0].innerHTML = is_correct ? '<span class="yes">✓</span>' : '<span class="no">✘</span>';
        if (tds.length > 3) {
            tds[3].style.display = '';
        }
    });

    if (show_correct_button) {
        document.getElementById('ShowAnswers').style.display = '';
    }

    show_extended_explanation();
}

function showanswers() {
    document.querySelectorAll('table.quiz tr').forEach(function(item) {
        let cells = item.querySelectorAll('td');
        console.log(cells);
        if (!cells.length) return;

        let input = cells[1].querySelector('input');
        if (!input) return;
        input.checked = input.dataset.ok == '1';
    });

    document.querySelectorAll('table.quiz-code tr').forEach(function(item) {
        let inputs = item.querySelectorAll('input');
        if (!inputs.length) return;

        for (let c = 0; c != inputs.length; c++) {
            inputs[c].value = inputs[c].dataset.ok;
        }
    });

    document.querySelectorAll('table.quiz-select tr').forEach(function(item) {
        let selects = item.querySelectorAll('select');
        if (!selects.length) return;

        for (let c = 0; c != selects.length; c++) {
            selects[c].value = selects[c].dataset.ok;
        }
    });

    show_extended_explanation();
}

function show_extended_explanation() {
    document.querySelectorAll('.extended-explanation').forEach(function(item) {
        item.className = 'comment';
    });
}
