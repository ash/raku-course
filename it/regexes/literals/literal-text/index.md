---
title: Riconoscere testo letterale
translations_gpt:
---

{% include menu.html %}

Lo schema più semplice è una sequenza di lettere e cifre. Uno schema simile riconosce esattamente quei caratteri, in quell'ordine, in qualunque punto della stringa:

```raku
say 'the cat sat' ~~ /cat/; # ｢cat｣
say 'Hello'       ~~ /ell/; # ｢ell｣
```

La corrispondenza non deve per forza cominciare all'inizio della stringa: il motore dei regex cerca lo schema in ogni posizione finché non lo trova.

Una corrispondenza riuscita produce un oggetto `Match`. Quel `｢cat｣` del primo esempio è l'aspetto che un oggetto simile ha quando viene stampato: `say` mostra un `Match` come il testo che ha riconosciuto, avvolto nelle parentesi angolari `｢ ｣`. Se lo schema non è presente, la corrispondenza fallisce: lo smartmatch produce `Nil`, un valore non definito che vale come falso in una prova booleana:

```raku
say ('the cat sat' ~~ /dog/);       # Nil
say ('the cat sat' ~~ /dog/).Bool;  # False
```

Dentro un regex gli spazi **non** sono significativi per impostazione predefinita: sono lì solo per rendere leggibile lo schema. Quindi `/ ell /` riconosce esattamente ciò che riconoscerebbe `/ell/`; gli spazi attorno vengono semplicemente ignorati:

```raku
say 'Hello' ~~ / ell /; # ｢ell｣
```

Poiché uno spazio nello schema viene ignorato, riconoscere uno spazio *vero* richiede le **virgolette**: tutto ciò che metti fra virgolette viene riconosciuto alla lettera. Quelle stesse virgolette servono anche a riconoscere un segno di punteggiatura che altrimenti avrebbe un significato speciale in un regex:

```raku
say 'a b'       ~~ / 'a b' /; # ｢a b｣
say 'price: $5' ~~ / '$' /;   # ｢$｣
```

(Per gli spazi bianchi puoi anche usare la classe `\s`, che incontrerai fra poco.)

{% include nav.html %}
