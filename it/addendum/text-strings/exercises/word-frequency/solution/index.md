---
title: 'Soluzione: Frequenza delle parole'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $text = 'the cat sat on the mat the cat';

my %freq;
%freq{$_}++ for $text.words;

for %freq.sort({ -.value, .key }) -> $pair {
    say "{$pair.key}: {$pair.value}";
}
```

🦋 Trova il programma nel file [word-frequency.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/word-frequency.raku).

## Output

```
the: 3
cat: 2
mat: 1
on: 1
sat: 1
```

## Commenti

1. `$text.words` restituisce le parole; `%freq{$_}++` incrementa un contatore per
ciascuna, creando la chiave al primo incontro.

1. Ordinare per `-.value` mette per prime le più frequenti; aggiungere `.key` come secondo
criterio scioglie le parità in ordine alfabetico, così l'ordine è completamente
deterministico.

{% include nav.html %}
