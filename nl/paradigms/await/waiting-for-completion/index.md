---
title: Wachten op voltooiing
translations_gpt:
---

{% include menu.html %}

`await` is de expliciete manier om te wachten, maar reactieve code wacht ook — alleen impliciet. Een `react`-blok is pas klaar wanneer alle supplies die het bekijkt klaar zijn, wat je dezelfde garantie "alles is voltooid" geeft:

```raku
my @values;

react {
    whenever Supply.from-list(2, 4, 6) {
        @values.push($_);
    }
}

say [+] @values; # 12
```

De `say` draait pas **nadat** het react-blok klaar is, dus bevat `@values` al elke uitgezonden waarde. In feite heeft het `react`-blok de stroom voor je afgewacht.

Dit is een nuttig patroon: gebruik een `react`-blok om alles wat een supply uitzendt te verzamelen, en werk daarna op de volgende regel met het verzamelde resultaat, in de wetenschap dat de stroom compleet is. Of je nu met `await` op een promise wacht of met `react` op een stroom, het principe is hetzelfde — pauzeer tot het gelijktijdige werk klaar is en ga daarna verder met de resultaten.

{% include nav.html %}
