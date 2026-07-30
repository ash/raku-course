---
title: Threads samenvoegen
translations_gpt:
---

{% include menu.html %}

Om op de voltooiing van een thread te wachten, roep je er `.finish` op aan (ook geschreven als `.join`). Het hoofdprogramma pauzeert daar tot de thread klaar is:

```raku
my $t = Thread.start({ say 'in the thread' });
$t.finish;
say 'done';
```

Dit drukt af:

```
in the thread
done
```

Omdat `.finish` wacht, verschijnt de melding van de thread gegarandeerd vóór `done`. Zonder de `.finish` zou de volgorde onvoorspelbaar zijn, en zou het programma zelfs kunnen eindigen voordat de thread de kans had om af te drukken.

Wanneer je meerdere threads start, voeg je ze elk samen om er zeker van te zijn dat ze allemaal klaar zijn:

```raku
my $a = Thread.start({ 1 + 1 });
my $b = Thread.start({ 2 + 2 });
$a.finish;
$b.finish;
say 'both finished';
```

De twee threads lopen gelijktijdig, en beide samenvoegen vóór de afsluitende `say` garandeert dat `both finished` pas afgedrukt wordt zodra ze werkelijk klaar zijn. Samenvoegen is hoe je gelijktijdig werk weer op een voorspelbaar punt in je programma bijeenbrengt.

Omdat een methodeaanroep op een [junctie](/nl/paradigms/junctions) zich over elke waarde erin verspreidt, kun je meerdere threads in één uitdrukking samenvoegen. Combineer ze met de `all`-operator `&` en roep `.finish` op de junctie aan:

```raku
my $a = Thread.start({ 1 + 1 });
my $b = Thread.start({ 2 + 2 });

($a & $b).finish;
say 'both finished';
```

`.finish` op `$a & $b` aanroepen draait die op beide threads, dus wacht het programma tot geen van beide nog loopt — hetzelfde resultaat als ze een voor een samenvoegen, maar het leest als "maak deze allebei af" en werkt voor elk aantal threads dat met `&` samengevoegd is.

{% include nav.html %}
