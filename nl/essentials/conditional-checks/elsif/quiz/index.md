---
title: Quiz — if, elsif, else
---

{% include menu.html %}

Voltooi het volgende programma. Hier is een wachtwoordcontroleprocedure. Vul de ontbrekende delen in. (Beschouw het alleen als een oefening.)

{:.quiz-code}
. | my $password = prompt 'Voer je wachtwoord in: ';
if | ␣␣␣␣␣ $password eq '12345' {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'Echt?';
. | }
elsif | ␣␣␣␣␣ $password.chars < 3 {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'Te kort';
. | }
elsif | ␣␣␣␣␣ $password eq '*&(#&$#Y' {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'Correct wachtwoord';
. | }
else | ␣␣␣␣␣ {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'Wachtwoord is fout';
. | }

{% include quiz.html %}

{% include nav.html %}