---
title: Quiz — await e sleep
translations_gpt:
---

{% include menu.html %}

Che cosa fa il programma seguente?

```raku
my $p = start { sleep 2; 42 };
say 'waiting';
say await $p;
```

{:.quiz}
1 | Stampa subito `waiting`, poi stampa `42` circa due secondi dopo
0 | Si ferma per due secondi, poi stampa `waiting` e `42` insieme
0 | Stampa `waiting` e `42` subito — lo sleep avviene in secondo piano
0 | Stampa `waiting`, poi `Promise` — non puoi attendere una promise che dorme

{% include quiz.html %}

<div class="extended-explanation">

`start` restituisce **subito** una promise: il blocco, con il suo `sleep`, gira su un thread in secondo piano. Quindi `say 'waiting'` viene eseguito immediatamente. È `await` a bloccare: il programma si mette in pausa lì finché il blocco in secondo piano non finisce il suo pisolino di due secondi e produce `42`, che viene poi stampato. La pausa appartiene alla riga dell'`await`, non a quella dello `start`.

</div>

{% include nav.html %}
