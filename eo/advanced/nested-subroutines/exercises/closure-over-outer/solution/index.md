---
title: 'Solvo: Fermi super la ekstera'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub greet($name) {
    sub message {
        "Hello, $name!";
    }

    say message;
}

greet('Anna');
```

🦋 Vi povas trovi la fontkodon en la dosiero [closure-over-outer.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/nested-subroutines/closure-over-outer.raku).

## Eligo

```
Hello, Anna!
```

## Komentoj

1. `message` prenas neniujn argumentojn, tamen ĝi povas uzi `$name`. Nestita subprogramo fermas super la leksikaj variabloj de la subprogramo, kiu enhavas ĝin, do la ekstera `$name` estas en la videbla amplekso.

1. Kiam `greet('Anna')` ruliĝas, `$name` estas `'Anna'`, do `message` redonas `Hello, Anna!`. Tiu kunhavigo de la enferma amplekso estas tio, kio faras nestitajn helpantojn pli ol nur kaŝitaj funkcioj.

{% include nav.html %}
