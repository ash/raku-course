---
title: Gruppi senza cattura
translations_gpt:
---

{% include menu.html %}

Le parentesi tonde `( )` fanno due lavori insieme: _raggruppano_ una parte dello schema e la _catturano_ in `$0`, `$1` e così via. A volte vuoi solo il primo lavoro — trattare più atomi come un'unica unità — senza sprecarci un numero di cattura. Per questo usa le parentesi quadre `[ ]`, che raggruppano **senza** catturare.

Il raggruppamento conta non appena attacchi un quantificatore. Un quantificatore si lega solo all'atomo che lo precede immediatamente, quindi lo schema qui sotto ripete solo l'ultima lettera:

```raku
say 'abccc' ~~ / abc ** 3 /; # ｢abccc｣
```

Solo la `c` è stata ripetuta tre volte. Avvolgi tutto il pezzo in `[ ]` per ripeterlo per intero:

```raku
say 'abcabcabc' ~~ / [ abc ] ** 3 /; # ｢abcabcabc｣
```

Ora `[ abc ]` è un'unica unità, e `** 3` si applica al gruppo.

Poiché `[ ]` non occupa alcun posto di cattura, i numeri restano riservati alle parti che ti interessano davvero. Confronta una semplice corrispondenza chiave-valore:

```raku
if 'foo=42' ~~ / (\w+) '=' (\d+) / {
    say $0; # ｢foo｣
    say $1; # ｢42｣
}
```

Supponi che la chiave possa essere preceduta da una parola che vuoi saltare. Raggruppa quel prefisso con `[ ]` così che non disturbi la numerazione:

```raku
if 'the foo=42' ~~ / [ \w+ \s ]? (\w+) '=' (\d+) / {
    say $0; # ｢foo｣
    say $1; # ｢42｣
}
```

L'opzionale `[ \w+ \s ]?` ha riconosciuto `the ` ma non ha richiesto alcuna cattura, quindi `$0` è ancora la chiave e `$1` è ancora il valore. Se avessi scritto quel prefisso con `( )`, tutto si sarebbe spostato: il prefisso sarebbe diventato `$0`, la chiave `$1` e il valore `$2`.

La regola è breve: usa `( )` quando vuoi conservare il testo riconosciuto e `[ ]` quando vuoi solo raggruppare. Entrambi i generi accettano quantificatori e alternative, ed è per questo che la precedente alternativa `[ cat | dog ] house` usava le parentesi quadre: le serviva il raggruppamento ma non un'altra cattura.

{% include nav.html %}
