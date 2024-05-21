---
title: Quiz — Global variables
---

{% include menu.html %}

## 1

Wat print dit programma?

```raku
my $value = 100;

{
    $value *= 2;
}

say $value;

{
    $value = 300;
}
```

{:.quiz-select}
200 | Antwoord: (: 200 :)

## 2

Wat print dit programma?

```raku
my $visible = 'Sun';

{
    $visible = 'Moon';

    {
        $visible = 'None';
    }

    say $visible;
}
```

{:.quiz-select}
None | Antwoord: (: Sun, Moon, None :) | Dezelfde globale variabele wordt in alle blokken gebruikt.

{% include quiz.html %}

{% include nav.html %}