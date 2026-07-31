---
title: 'Solutio: Salve personam'
---

{% include menu.html %}

Hic est possibile solutio ad munus.

## Codex

```raku
my $name = prompt 'Quod est nomen tuum? ';
say 'Salve, ', $name, '!';
```

🦋 Codicem fontem invenire potes in fasciculo [saluta-hominem.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/scalar-variables/greet-a-person.raku).

## Exitus

Programma curre et nomen intra cum rogationem accipis:

```console
$ raku exercises/scalar-variables/greet-a-person.raku 
Quod est nomen tuum? Inge
Salve, Inge!
```

## Commentarii

1. Hoc programma utitur variabili scalari `$name` ad continendum filum quod a usore responsum ad rogationem intratum est. Cum variabilis in indice utitur quem ad `say` functionem transmittis, nomen in nuntio accipis.

1. Est melior modus ad hanc quaestionem solvendi utens interpolatione filorum. Ad hanc quaestionem mox revertamur.

{% include nav.html %}