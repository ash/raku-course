---
title: 'Soluzione: Mantenuta o infranta'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $p = start { 10 };
await $p;
say $p.status;
```

🦋 Trova il programma nel file [kept-or-broken.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/kept-or-broken.raku).

## Output

```
Kept
```

## Commenti

1. Dopo che il blocco è finito con successo, la promise è _mantenuta_.

1. `.status` lo riferisce come `Kept`. Se il blocco avesse sollevato un'eccezione, lo stato sarebbe stato invece `Broken`.

{% include nav.html %}
