---
title: 'Quiz — `try`'
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
my $r = try {
    die 'Boom!';
    say 'inside';
};

say 'outside';
```

{:.quiz}
1 | outside
0 | inside
0 | inside e poi outside
0 | Boom!
0 | un errore

{% include quiz.html %}

<div class="extended-explanation">

Qui succedono due cose. Primo, `die` interrompe subito il resto del blocco `try`, quindi la riga `say 'inside'` non viene mai raggiunta: dal blocco non viene stampato nulla. Secondo, poiché `try` intercetta l'eccezione, il programma stesso non si ferma: l'esecuzione prosegue oltre il blocco e `say 'outside'` gira normalmente. L'unica riga stampata è quindi `outside`. (`$r` sarebbe non definito, e il messaggio `Boom!` starebbe ad aspettare in `$!` se lo guardassi.)

</div>

{% include nav.html %}
