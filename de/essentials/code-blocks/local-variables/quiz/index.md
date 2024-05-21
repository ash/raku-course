---
title: Quiz — Lokale Variablen
---

{% include menu.html %}

## 1

Was gibt dieses Programm aus?

```raku
my $value = 100;

{
    my $value = 1;
    $value *= 2;
    say $value;
}
```

{:.quiz-select}
2 | Antwort: (: 1, 2, 100, 200 :) | Eine lokale Variable wird verwendet und ausgegeben.

## 2

Was gibt dieses Programm aus?

```raku
my $value = 100;

{
    my $value = 1;
    $value *= 2;
}

say $value;
```

{:.quiz-select}
100 | Antwort: (: 1, 2, 100, 200 :) | Eine lokale Variable wird verändert, aber die globale Variable wird ausgegeben.

{% include quiz.html %}

{% include nav.html %}