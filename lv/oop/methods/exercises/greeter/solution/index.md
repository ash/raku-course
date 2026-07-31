---
title: 'Risinājums: Apgriezts vārds'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
class Word {
    has $.text;

    method reversed {
        $.text.flip;
    }
}

say Word.new(text => 'Raku').reversed;
```

🦋 Atrodiet programmu failā [greeter.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/greeter.raku).

## Izvade

```
ukaR
```

## Komentāri

1. Metode `reversed` sasniedz objekta paša `text` caur tā piekļuves metodi `$.text` un izsauc uz tā iebūvēto `flip`, kas atgriež apgrieztu virkni.

1. Metode tiek izsaukta tieši uz svaigi izveidotā `Word` objekta. Nekas netiek ierakstīts atpakaļ — `reversed` vienkārši aprēķina un atgriež jaunu vērtību no atribūta.

1. Ievērojiet, ka klases iekšienē mainīgo var nolasīt tieši, neizmantojot piekļuves metodi:

```raku
    method reversed {
        $!text.flip;
    }
```

{% include nav.html %}
