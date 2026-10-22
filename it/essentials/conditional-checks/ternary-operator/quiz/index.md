---
title: Quiz — Operatore ternario
---

{% include menu.html %}

Riempi gli spazi nel programma:

{:.quiz-code}
. | my $color = prompt &apos;Di che colore è? &apos;;
?? | say $color eq &apos;blu&apos; ␣␣
!! | &nbsp;&nbsp;&nbsp;&nbsp;&apos;Questo è un cielo!&apos; ␣␣ 
. | &nbsp;&nbsp;&nbsp;&nbsp;&apos;Ho bisogno di più informazioni.&apos;;

{% include quiz.html %}

## Commento

Il compilatore Rakudo ha un messaggio di errore speciale per l'errore più comune che puoi fare quando usi l'operatore ternario in Raku.

    ===SORRY!=== Errore durante la compilazione di t.raku
    Uso non supportato di ? e : per l'operatore condizionale ternario. In
    Raku per favore usa: ?? e !!.
    a t.raku:2
    ------> say $color eq 'blu' ?⏏ 'Questo è un cielo!' : 'Ho bisogno di più informa

{% include nav.html %}