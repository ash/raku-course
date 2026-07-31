---
title: 'Solvo: Salutu personon'
---

{% include menu.html %}

Jen ebla solvo al la tasko.

## Kodo

```raku
my $name = prompt 'What is your name? ';
say 'Hello, ', $name, '!';
```

🦋 Vi povas trovi la fontkodon en la dosiero [greet-a-person.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/scalar-variables/greet-a-person.raku).

## Eligo

Rulu la programon kaj enigu nomon kiam vi ricevas la peton:

```console
$ raku exercises/scalar-variables/greet-a-person.raku 
What is your name? Inge
Hello, Inge!
```

## Komentoj

1. Ĉi tiu programo uzas skalaran variablon `$name` por teni ĉenon, kiu estis enmetita de la uzanto responde al la peto. Kiam la variablo estas uzata en la listo, kiun vi pasas al la `say` rutino, vi ricevas la nomon en mesaĝo.

1. Estas pli bona maniero solvi ĉi tiun problemon uzante ĉeninterpoladon. Ni revenos al ĉi tiu problemo baldaŭ.

{% include nav.html %}