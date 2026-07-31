---
title: 'Solutio: Nomen longitudo'
---

{% include menu.html %}

## Codex

Hic est solutio ad munus:

```raku
my $name = prompt 'Quod est nomen tuum? ';
say $name.chars;
```

🦋 Codicem fontis invenire potes in fasciculo [name-length.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/name-length.raku).

## Exitus

Programma curre et nomen inserere.

```console
$ raku exercises/strings/name-length.raku 
Quod est nomen tuum? Alexandra
9
```

## Commentarii

In hoc programmate, longitudinem chordae accipimus vocando methodum `chars` in variabili `$name`. Cum variabilis chordam contineat, methodus longitudinem eius reddit.

{% include nav.html %}