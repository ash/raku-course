---
title: Тест 2 — умова в `if`*
---

{% include menu.html %}

Виправте програму й дайте відповідь на запитання.

{:.quiz-code .fill}
. | my $password = prompt 'Enter your password: ';
. | 
eq = | if $password ␣␣ '*&(#&$#Y' {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'Correct';
. | }
. | else {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'Incorrect';
. | }


Що робить ця програма, якщо в перевірці стоїть `=`?

{:.quiz-select}
Завжди виводить ‘Correct’ | Ваша відповідь:&nbsp; (: Завжди виводить ‘Correct’, Завжди виводить ’Incorrect’, Виводить ’Correct’ для правильних паролів і ‘Incorrect’ для неправильних, Виводить ’Incorrect’ для правильних паролів і ’Correct’ для неправильних :)

<div class="extended-explanation">Програма завжди виводить ’Correct’, бо <code>$password = '*&(#&$#Y'</code> — це присвоєння, яке встановлює нове значення змінної <code>$password</code>. Оскільки це значення не є ані нулем, ані порожнім рядком, воно вважається <code>True</code>. Пароль, який вводить користувач, у цьому разі не перевіряється взагалі.<br/><br/>Якщо ж набрати <code>==</code>, програма зламається, бо намагатиметься перетворити рядки (пароль користувача та правильний пароль) на числа й зазнає невдачі.</div>

{% include quiz.html %}

{% include nav.html %}
