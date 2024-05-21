---
title: Quiz — Ternary operator
---

{% include menu.html %}

Vul de ontbrekende delen in het programma in:

{:.quiz-code}
. | my $color = prompt 'Welke kleur is het? ';
?? | say $color eq 'blauw' ␣␣
!! | &nbsp;&nbsp;&nbsp;&nbsp;'Dit is een lucht!' ␣␣ 
. | &nbsp;&nbsp;&nbsp;&nbsp;'Ik heb meer informatie nodig.';

{% include quiz.html %}

## Opmerking

De Rakudo-compiler heeft een speciale foutmelding voor de meest voorkomende fout die je kunt maken bij het gebruik van de ternaire operator in Raku.

    ===SORRY!=== Fout tijdens het compileren van /Users/ash/raku-course/t.raku
    Niet-ondersteund gebruik van ?  en : voor de ternaire voorwaardelijke operator. In
    Raku gebruik alstublieft: ??  en !!.
    bij /Users/ash/raku-course/t.raku:2
    ------> say $color eq 'blauw' ?⏏ 'Dit is een lucht!' : 'Ik heb meer informa

{% include nav.html %}