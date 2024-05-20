---
title: 'Тест: `if`, `elsif` и `else`'
---

{% include menu.html %}

Это процедура проверки пароля. Дополните отсутствующие части программы
(относитесь к этому только как к упражнению):

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
