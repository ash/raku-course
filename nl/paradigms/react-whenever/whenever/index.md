---
title: whenever
translations_gpt:
---

{% include menu.html %}

Eén `react`-blok kan **meerdere** `whenever`-blokken bevatten, die elk een andere supply bekijken. Het blok reageert op de supply die als volgende uitzendt en draait de bijbehorende body:

```raku
my $sum = 0;

react {
    whenever Supply.from-list(1, 2, 3) {
        $sum += $_;
    }
    whenever Supply.from-list(10, 20) {
        $sum += $_;
    }
}

say $sum; # 36
```

Beide supplies worden tegelijk bekeken. Hun waarden — `1, 2, 3` en `10, 20` — stromen allemaal in `$sum`, dat op `36` eindigt. Het `react`-blok is pas klaar wanneer **beide** supplies klaar zijn.

Elke `whenever` reageert onafhankelijk, en zo combineer je stromen: één `whenever` per bron, allemaal binnen hetzelfde `react`. Een echt programma zou in de ene `whenever` een netwerkverbinding kunnen bekijken en in de andere een timer, en op elk reageren zodra de gebeurtenissen binnenkomen.

Binnen een `whenever`-body heb je de uitgezonden waarde (als `$_` of als benoemde parameter) en kun je er van alles mee doen — toestand bijwerken, naar een andere supply uitzenden, of het react-blok zelfs vroegtijdig sluiten met `done`.

{% include nav.html %}
