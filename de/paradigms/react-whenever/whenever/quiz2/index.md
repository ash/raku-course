---
title: 'Quiz — whenever und done'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
my @out;

react {
    whenever Supply.from-list(1, 2, 3) {
        @out.push($_);
        done if $_ == 2;
    }
    whenever Supply.from-list(10, 20) {
        @out.push($_);
    }
}

say @out;
```

{:.quiz}
1 | [1 2]
0 | [1 2 10 20]
0 | [1 2 3 10 20]
0 | [10 20]

{% include quiz.html %}

<div class="extended-explanation">

Das erste `whenever` legt `1` hinein, dann `2` — und bei `2` ruft es `done` auf. Entscheidend ist, dass `done` den **ganzen `react`-Block** beendet und nicht nur sein eigenes `whenever`: Der Rest des ersten Supply (`3`) und das *ganze zweite Supply* (`10, 20`) werden abgeschnitten, bevor sie geliefert werden. `@out` enthält also nur `[1 2]`. Würde `done` bloß seinen eigenen Strom stilllegen, hätten Sie `[1 2 10 20]` gesehen — doch ein `done` hält alle Reaktionen auf einmal an.

</div>

{% include nav.html %}
