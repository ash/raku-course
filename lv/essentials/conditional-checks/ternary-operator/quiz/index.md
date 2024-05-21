---
title: Viktorīna — Ternārais operators
---

{% include menu.html %}

Aizpildiet programmas tukšās vietas:

{:.quiz-code}
. | my $color = prompt &apos;Kāda krāsa tā ir? &apos;;
?? | say $color eq &apos;zila&apos; ␣␣
!! | &nbsp;&nbsp;&nbsp;&nbsp;&apos;Tā ir debesis!&apos; ␣␣ 
. | &nbsp;&nbsp;&nbsp;&nbsp;&apos;Man vajag vairāk informācijas.&apos;;

{% include quiz.html %}

## Komentārs

Rakudo kompilatoram ir īpaša kļūdas ziņa visbiežākajai kļūdai, ko varat pieļaut, izmantojot ternāro operatoru Raku valodā.

    ===SORRY!=== Kļūda kompilējot /Users/ash/raku-course/t.raku
    Neatbalstīta ? un : izmantošana ternārajam nosacījuma operatoram. Raku valodā, lūdzu, izmantojiet: ?? un !!.
    pie /Users/ash/raku-course/t.raku:2
    ------> say $color eq 'blue' ?⏏ 'Tā ir debesis!' : 'Man vajag vairāk informa

{% include nav.html %}