---
title: 'Risinājums: Trīskāršošana kā metode'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
class Number {
    has $.n;

    method triple {
        $.n * 3;
    }
}

say Number.new(n => 7).triple;
```

🦋 Atrodiet programmu failā [triple-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/subs-vs-methods/triple-method.raku).

## Izvade

```
21
```

## Komentāri

1. Kā metode `triple` pieder objektam un strādā ar objekta paša `n` — nekas netiek padots iekšā.

1. Salīdzinājumā ar apakšprogrammas versiju dati dzīvo objektā, nevis pienāk kā arguments. Abas dod `21`.

{% include nav.html %}
