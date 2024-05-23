---
title: Solutio ad 'Salve, Concatenatio!'
---

{% include menu.html %}

## Codex

Hic est possibile solutio ad hunc quaestionem:

```raku
my $name = prompt 'Quod est nomen tuum? ';
say 'Salve, ' ~ $name ~ '!';
```

🦋 Codicem fontis invenire potes in archivo [salve-concatenatio.raku](https://github.com/ash/raku-course/blob/master/exercises/strings/hello-concatenation.raku).

## Effectus

Programma curre, et intrabit modum cum exspectat tuum ingressum. Postquam nomen typis et premes Enter, programma pergere et salutem imprimere:

```console
$ raku exercises/strings/hello-concatenation.raku
Quod est nomen tuum? Ioannes
Salve, Ioannes!
```

## Commentarii

Compara programma cum [praeviam variantem](../../../../scalar-variables/exercises/greet-a-person/solution) ubi tres chordas ad `say` rutam tradidimus:

```raku
say 'Salve, ', $name, '!';
```

Hoc tempore, tres partes primum concatenantur et deinde traduntur ad `say` ut una chorda.

{% include nav.html %}