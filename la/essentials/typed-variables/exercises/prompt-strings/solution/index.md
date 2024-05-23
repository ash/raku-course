---
title: Solutio ‘Examinandi exitum prompti — Chordae’
---

{% include menu.html %}

## Codex

Hic est completus programmatum quod opus facit et imprimit tam chorda ingressa quam eius genus.

```raku
my $name = prompt 'Quod est nomen tuum? ';
say $name;
say $name.WHAT;
```

🦋 Codicem fontis invenire potes in fasciculo [prompt-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/typed-variables/prompt-strings.raku).

## Probationes

Programma bis exsequere et diversa nomina ingere. Programma ingressum resonat et etiam refert variabilem continere chordam, id est, obiectum generis `Str`.

```console
$ raku exercises/data-types/prompt-strings.raku
Quod est nomen tuum? Andrey
Andrey
(Str)
```

Nunc, programma iterum exsequere, paucos spatia pro nomine typum, et preme Enter.

```console
$ raku exercises/data-types/prompt-strings.raku
Quod est nomen tuum?    

(Str)
```

Non videmus exitum, sed videmus quod genus variabilis adhuc `Str` est.

{% include nav.html %}