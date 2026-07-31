---
title: 'Solutio: Lineas numera'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
spurt 'words.txt', "apple\nbanana\ncherry\n";

my $n = 0;
for 'words.txt'.IO.lines -> $line {
    $n++;
    say "$n: $line";
}
```

🦋 Inveni codicem fontem in archivo [shout-the-lines.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/shout-the-lines.raku).

## Exitus

```
1: apple
2: banana
3: cherry
```

## Commentarii

1. `spurt` tria verba in archivum scribit, novis lineis separata.

1. `.IO.lines` lineas unam post alteram dat, sine novis lineis sequentibus. Numeratorem `$n` servamus quem in unoquoque transitu augemus, itaque unaquaeque linea una cum loco suo in archivo imprimitur.

{% include nav.html %}
