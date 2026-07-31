---
title: 'Solutio: Sursum numerare'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio.

## Codex

```raku
my $n = 9;

say $n++;
say $n;
```

🦋 Inveni codicem fontem in archivo [count-up.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operator-types/count-up.raku).

## Exitus

```
9
10
```

## Commentarii

1. `++` est operator postfixus: post operandum suum venit. Ut expressio adhibitus, `$n++` *veterem* valorem `9` primum reddit — quod est id quod `say` imprimit — et tunc demum variabilem incrementat.

1. Secunda linea ostendit `$n` revera `10` factum esse. (Forma praefixa `++$n` potius primum incrementaret et `10` redderet.)

{% include nav.html %}
