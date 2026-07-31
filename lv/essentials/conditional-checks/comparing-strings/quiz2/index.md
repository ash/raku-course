---
title: 'Tests 2 — nosacījums `if`'
---

{% include menu.html %}

Izlabojiet programmu un atbildiet uz jautājumu.

{:.quiz-code .fill}
. | my $password = prompt 'Enter your password: ';
. | 
eq = | if $password ␣␣ '*&(#&$#Y' {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'Correct';
. | }
. | else {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'Incorrect';
. | }


Ar `=` pārbaudē — ko šī programma dara?

{:.quiz-select}
Vienmēr izdrukā ‘Correct’ | Jūsu atbilde:&nbsp; (: Vienmēr izdrukā ‘Correct’, Vienmēr izdrukā ’Incorrect’, Izdrukā ’Correct’ pareizām parolēm un ‘Incorrect’ nepareizām, Izdrukā ’Incorrect’ pareizām parolēm un ’Correct’ nepareizām :)

<div class="extended-explanation">Programma vienmēr izdrukā ’Correct’, jo <code>$password = '*&(#&$#Y'</code> ir piešķīrums, kas mainīgajam <code>$password</code> uzstāda jaunu vērtību. Tā kā vērtība nav ne nulle, ne tukša virkne, tā tiek uzskatīta par <code>True</code>. Parole, ko ievada lietotājs, šajā gadījumā netiek pārbaudīta nemaz.<br/><br/>Ja ierakstīsiet <code>==</code>, programma salūzīs, jo mēģinās virknes (lietotāja paroli un pareizo paroli) pārvērst skaitļos un neizdosies.</div>

{% include quiz.html %}

{% include nav.html %}