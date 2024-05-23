---
title: Quiz — Variabiles locales
---

{% include menu.html %}

## 1

Quid hoc programma imprimit?

```raku
my $value = 100;

{
    my $value = 1;
    $value *= 2;
    say $value;
}
```

{:.quiz-select}
2 | Responsum: (: 1, 2, 100, 200 :) | Variabilis localis adhibetur et imprimitur.

## 2

Quid hoc programma imprimit?

```raku
my $value = 100;

{
    my $value = 1;
    $value *= 2;
}

say $value;
```

{:.quiz-select}
100 | Responsum: (: 1, 2, 100, 200 :) | Variabilis localis mutatur, sed variabilis globalis imprimitur.

{% include quiz.html %}

{% include nav.html %}