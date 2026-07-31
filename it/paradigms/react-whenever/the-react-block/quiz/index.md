---
title: Quiz — react
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
my @got;

react {
    whenever Supply.from-list(1, 2, 3, 4, 5) {
        @got.push($_);
        done if $_ == 3;
    }
}

say @got;
```

{:.quiz}
1 | [1 2 3]
0 | [1 2 3 4 5]
0 | [3]
0 | [4 5]

{% include quiz.html %}

<div class="extended-explanation">

Il corpo del `whenever` raccoglie ogni valore, ma chiama `done` non appena vede `3`. `done` chiude il blocco `react`, quindi il supply viene abbandonato e `4` e `5` non vengono mai elaborati, lasciando `[1 2 3]`.

</div>

{% include nav.html %}
