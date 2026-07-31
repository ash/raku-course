---
title: 'Solutio: Diarium construe'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
spurt 'log.txt', "start\n";

for 1..3 -> $i {
    spurt 'log.txt', "entry $i\n", :append;
}

print slurp 'log.txt';
```

🦋 Inveni codicem fontem in archivo [append-a-line.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/append-a-line.raku).

## Exitus

```
start
entry 1
entry 2
entry 3
```

## Commentarii

1. Primum `spurt` archivum recens cum linea `start` creat.

1. Unumquodque `spurt` intra anulum `:append` adhibet, itaque lineam suam post contentum exsistens addit potius quam archivum substituat. Sic exacte archivum annalium crescit: unaquaeque iteratio (vel unusquisque programmatis cursus) unam lineam amplius fini adfigit.

1. Sine `:append` unusquisque transitus archivum superscriberet, et sola ultima linea superesset.

{% include nav.html %}
