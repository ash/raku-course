---
title: Solutio ad ’Salve, Interpolatio!‘
---

{% include menu.html %}

## Codex

Hic est possibile solutio huic problema:

```raku
my $name = prompt 'Quod est nomen tuum? ';
say "Salve, $name!";
```

🦋 Invenire potes codicem fontis in archivo [hello-interpolation.raku](https://github.com/ash/raku-course/blob/master/exercises/strings/hello-interpolation.raku).

## Output

Programma currite, et intrabit modum cum exspectat pro tuo input. Postquam nomen typis et premas Enter, programma continuat et imprimit salutationem:

```console
$ raku exercises/strings/hello-concatenation.raku
Quod est nomen tuum? Raku
Salve, Raku!
```

## Commentarii

Nota quod hoc tempore, stringa est dupliciter-quotata. In duplicibus quotationibus, variabiles interpolantur, ita eorum contenta in stringa ponuntur.

{% include nav.html %}