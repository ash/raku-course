---
title: Quiz — Variabili globali
---

{% include menu.html %}

## 1

Cosa stampa questo programma?

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
200 | Risposta: (: 200 :)

## 2

Cosa stampa questo programma?

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
None | Risposta: (: Sun, Moon, None :) | La stessa variabile globale è riferita in tutti i blocchi.

{% include quiz.html %}

{% include nav.html %}