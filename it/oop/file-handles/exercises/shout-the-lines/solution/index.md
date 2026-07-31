---
title: 'Soluzione: Numerate le righe'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
spurt 'words.txt', "apple\nbanana\ncherry\n";

my $n = 0;
for 'words.txt'.IO.lines -> $line {
    $n++;
    say "$n: $line";
}
```

🦋 Trova il programma nel file [shout-the-lines.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/shout-the-lines.raku).

## Output

```
1: apple
2: banana
3: cherry
```

## Commenti

1. `spurt` scrive le tre parole nel file, separate da ritorni a capo.

1. `.IO.lines` restituisce le righe una a una, senza i loro ritorni a capo finali. Teniamo un contatore `$n` che incrementiamo a ogni passaggio, così ogni riga viene stampata insieme alla sua posizione nel file.

{% include nav.html %}
