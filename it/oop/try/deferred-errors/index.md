---
title: Non ogni errore è immediato
translations_gpt:
---

{% include menu.html %}

Per impostazione predefinita un'eccezione sollevata ferma subito il programma, e `try` è il modo di intercettarla. Ma non tutto ciò che sembra un errore fatale ferma davvero il programma nel momento in cui accade. Raku ha fallimenti che restano silenziosi — rimandano la propria reazione a quando usi il risultato, oppure ti lasciano ispezionarli e proseguire. Un paio di questi sono già comparsi in questa parte, e vale la pena raccoglierli in un unico posto.

**Una divisione per zero.** Dividere per zero non esplode dove è scritto. Il valore cattivo viene prodotto e tenuto in silenzio; solleva un'eccezione solo quando lo *usi* — stampandolo o convertendolo, per esempio:

```raku
my $x = 1 / 0;    # no error here
say 'still running';
say $x;           # only now does it throw
```

Questo comportamento differito, e gli oggetti `Failure` che vi stanno dietro, sono l'argomento di [Fallimenti morbidi](/it/oop/failures).

**Un programma esterno che fallisce.** Un `Proc` restituito da `run` o `shell` che è terminato senza successo non solleva un'eccezione quando viene prodotto. La solleva solo se lo *scarti* senza gestirlo; conservalo e leggine `.exitcode` (o mettilo alla prova come booleano) e il fallimento resta un valore semplice a cui puoi reagire. Lo hai visto in [L'oggetto Proc](/it/oop/external-programs/the-proc-object).

Il filo comune: un fallimento può essere *differito* — trasformato in un valore che esamini quando sei pronto, invece che in un crollo immediato. `try` e il phaser `CATCH` si occupano degli errori sollevati subito; questi meccanismi si occupano di quelli che non lo sono.

{% include nav.html %}
