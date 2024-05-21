---
title: Quiz — if, elsif, else
---

{% include menu.html %}

Complete the following program. Here is a password check procedure. Fill in the missing parts. (Consider it an exercise only.)

{:.quiz-code}
. | my $password = prompt 'Enter your password: ';
if | ␣␣␣␣␣ $password eq '12345' {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'Really?';
. | }
elsif | ␣␣␣␣␣ $password.chars < 3 {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'Too short';
. | }
elsif | ␣␣␣␣␣ $password eq '*&(#&$#Y' {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'Correct password';
. | }
else | ␣␣␣␣␣ {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'Password is wrong';
. | }

{% include quiz.html %}

{% include nav.html %}