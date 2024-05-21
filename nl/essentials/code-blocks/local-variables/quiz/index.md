---
title: Quiz — Lokale variabelen
---

{% include menu.html %}

## 1

Wat print dit programma?

```raku
my $value = 100;

{
    my $value = 1;
    $value *= 2;
    say $value;
}
```

{:.quiz-select}
2 | Antwoord: (: 1, 2, 100, 200 :) | Een lokale variabele wordt gebruikt en afgedrukt.

## 2

Wat print dit programma?

```raku
my $value = 100;

{
    my $value = 1;
    $value *= 2;
}

say $value;
```

{:.quiz-select}
100 | Antwoord: (: 1, 2, 100, 200 :) | Een lokale variabele wordt gewijzigd, maar de globale variabele wordt afgedrukt.

{% include quiz.html %}

{% include nav.html %}