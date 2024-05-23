---
title: Quiz — if, elsif, else
---

{% include menu.html %}

Complete the following program. Here is a password check procedure. Fill in the missing parts. (Consider it an exercise only.)

{:.quiz-code}
. | my $password = prompt 'Enter your password: ';
if | ␣␣␣␣␣ $password aequum est '12345' {
. | &nbsp;&nbsp;&nbsp;&nbsp;dic 'Serio?';
. | }
elsif | ␣␣␣␣␣ $password.characteres minus quam 3 {
. | &nbsp;&nbsp;&nbsp;&nbsp;dic 'Nimis brevis';
. | }
elsif | ␣␣␣␣␣ $password aequum est '*&(#&$#Y' {
. | &nbsp;&nbsp;&nbsp;&nbsp;dic 'Recta tessera';
. | }
else | ␣␣␣␣␣ {
. | &nbsp;&nbsp;&nbsp;&nbsp;dic 'Tessera falsa est';
. | }

{% include quiz.html %}

{% include nav.html %}