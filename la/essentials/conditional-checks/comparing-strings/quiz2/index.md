---
title: Quiz 2 — the conditition in if
---

{% include menu.html %}

Correct the program and answer the question.

{:.quiz-code .fill}
. | my $password = prompt &apos;Enter your password: &apos;;
. | 
eq = | if $password ␣␣ &apos;*&(#&$#Y&apos; {
. | &nbsp;&nbsp;&nbsp;&nbsp;say &apos;Correct&apos;;
. | }
. | else {
. | &nbsp;&nbsp;&nbsp;&nbsp;say &apos;Incorrect&apos;;
. | }


With the `=` in the test, what does this program do?

{:.quiz-select}
Always prints ‘Correct’ | Your answer:&nbsp; (: Always prints ‘Correct’, Always prints ’Incorrect’, Prints ’Correct’ for correct passwords and ‘Incorrect’ for incorrect ones, Prints ’Incorrect’ for correct passwords and ’Correct’ for incorrect ones :)

<div class="extended-explanation">The program always prints ’Correct’ because <code>$password = '*&(#&$#Y'</code> is an assignment that sets the new value of the <code>$password</code> variable. As the value is neither zero nor an empty string, it is considered <code>True</code>. The password that the user enters is never checked in this case.<br/><br/>If you type <code>==</code>, then the program will break as it tries to convert the strings (the user password and the correct password) to numbers and fails.</div>

{% include quiz.html %}

{% include nav.html %}