---
title: Quiz — Ternary operator
---

{% include menu.html %}

Plenigu la mankojn en la programo:

{:.quiz-code}
. | my $color = prompt &apos;Kia koloro ĝi estas? &apos;;
?? | say $color eq &apos;blua&apos; ␣␣
!! | &nbsp;&nbsp;&nbsp;&nbsp;&apos;Ĉi tio estas ĉielo!&apos; ␣␣ 
. | &nbsp;&nbsp;&nbsp;&nbsp;&apos;Mi bezonas pli da informo.&apos;;

{% include quiz.html %}

## Komento

La Rakudo-kompililo havas specialan erarmesagon por la plej ofta eraro, kiun vi povas fari uzante la ternaran operatoron en Raku.

    ===PARDONU!=== Eraro dum kompilado de /Users/ash/raku-course/t.raku
    Neaprobita uzo de ? kaj : por la ternara kondiĉa operatoro. En
    Raku bonvolu uzi: ?? kaj !!.
    ĉe /Users/ash/raku-course/t.raku:2
    ------> say $color eq 'blua' ?⏏ 'Ĉi tio estas ĉielo!' : 'Mi bezonas pli da informa

{% include nav.html %}