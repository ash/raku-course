---
title: Quiz — if, elsif, else
---

{% include menu.html %}

Complete the following program. Here is a password check procedure. Fill in the missing parts. (Consider it an exercise only.)

{:.quiz-code}
. | my $password = prompt &apos;Enter your password: &apos;;
if | ␣␣␣␣␣ $password eq &apos;12345&apos; {
. | &nbsp;&nbsp;&nbsp;&nbsp;say &apos;Really?&apos;;
. | }
elsif | ␣␣␣␣␣ $password.chars &lt; 3 {
. | &nbsp;&nbsp;&nbsp;&nbsp;say &apos;Too short&apos;;
. | }
elsif | ␣␣␣␣␣ $password eq &apos;*&(#&$#Y&apos; {
. | &nbsp;&nbsp;&nbsp;&nbsp;say &apos;Correct password&apos;;
. | }
else | ␣␣␣␣␣ {
. | &nbsp;&nbsp;&nbsp;&nbsp;say &apos;Password is wrong&apos;;
. | }

{% include quiz.html %}

{% include nav.html %}
