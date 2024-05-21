---
title: 'Тест 2: Условие в `if`'
---

{% include menu.html %}

Исправьте программу и ответьте на вопросы.

{:.quiz-code .fill}
. | my $password = prompt &apos;Enter your password: &apos;;
. | 
eq = | if $password ␣␣ &apos;*&(#&$#Y&apos; {
. | &nbsp;&nbsp;&nbsp;&nbsp;say &apos;Correct&apos;;
. | }
. | else {
. | &nbsp;&nbsp;&nbsp;&nbsp;say &apos;Incorrect&apos;;
. | }

Что программа делает со знаком `=` в тесте?

{:.quiz-select}
Всегда выводит ‘Correct’ | Ваш ответ:&nbsp; (: Всегда выводит ‘Correct’, Всегда выводит ’Incorrect’, Выводит ’Correct’ для правильных паролей и ‘Incorrect’ для неправильных, Выводит ’Incorrect’ для правильных паролей ’Correct’ для неправильных :)

<div class="extended-explanation">Программа всегда выводит ’Correct’, потому что <code>$password = '*&(#&$#Y'</code> — это присвоение, устанавливающее новое значение в переменную <code>$password</code>. Так как значение не является нулем или пустой строкой, оно считается как <code>True</code>. Пароль, введенный пользователем, в этом случае никогда не проверяется.<br/><br/>Если вы напишите <code>==</code>, то программа не будет работать, так как она попытается привести строки (пароль пользователя и правильный пароль) к числам и потерпит неудачу.</div>

{% include quiz.html %}

{% assign human=1 %}
{% include nav.html %}
