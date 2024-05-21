---
title: Quiz — Globale Variablen
---

{% include menu.html %}

## 1

Was gibt dieses Programm aus?

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
200 | Antwort: (: 200 :)

## 2

Was gibt dieses Programm aus?

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
None | Antwort: (: Sun, Moon, None :) | Auf dieselbe globale Variable wird in allen Blöcken verwiesen.

{% include quiz.html %}

{% include nav.html %}