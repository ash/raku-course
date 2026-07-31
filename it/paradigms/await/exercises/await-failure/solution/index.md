---
title: 'Soluzione: Attendete un guasto'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $p = start { die 'boom' };

try {
    await $p;
    CATCH {
        default { say "caught: {.message}" }
    }
}
```

🦋 Trova il programma nel file [await-failure.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-failure.raku).

## Output

```
caught: boom
```

## Commenti

1. Il blocco della promise solleva un'eccezione, quindi la promise è *rotta*. L'eccezione non va perduta: viene trattenuta finché qualcuno non attende la promise.

1. `await $p` la rilancia proprio lì, dove il phaser `CATCH` la gestisce come qualunque eccezione ordinaria. È così che gli errori del lavoro in secondo piano emergono là dove aspetti il risultato.

{% include nav.html %}
