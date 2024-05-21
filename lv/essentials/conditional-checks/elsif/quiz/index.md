---
title: Viktorīna — if, elsif, else
---

{% include menu.html %}

Pabeidziet sekojošo programmu. Šeit ir paroles pārbaudes procedūra. Aizpildiet trūkstošās daļas. (Uzskatiet to tikai par vingrinājumu.)

{:.quiz-code}
. | my $password = prompt 'Ievadiet savu paroli: ';
if | ␣␣␣␣␣ $password eq '12345' {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'Tiešām?';
. | }
elsif | ␣␣␣␣␣ $password.chars < 3 {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'Par īsu';
. | }
elsif | ␣␣␣␣␣ $password eq '*&(#&$#Y' {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'Pareiza parole';
. | }
else | ␣␣␣␣␣ {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'Parole ir nepareiza';
. | }

{% include quiz.html %}

{% include nav.html %}