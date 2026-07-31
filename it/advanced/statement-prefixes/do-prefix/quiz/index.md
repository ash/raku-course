---
title: Quiz — do
translations_gpt:
---

{% include menu.html %}

Cosa stampa il seguente programma?

```raku
my $s = do given -3 {
    when $_ < 0 { 'neg' }
    default     { 'nonneg' }
};
say $s;
```

{:.quiz}
1 | neg
0 | nonneg
0 | -3
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`do` funziona davanti alle strutture di controllo, non solo ai blocchi semplici. Qui `do given` trasforma l'intero `given`/`when` in un'espressione. Il topic `-3` corrisponde a `$_ < 0`, quindi l'espressione produce `'neg'`, che viene memorizzato in `$s`.

</div>

{% include nav.html %}
