---
title: Het react-blok
translations_gpt:
---

{% include menu.html %}

Een `react`-blok is een plek waar reacties wonen. Daarbinnen zegt een `whenever`: "telkens wanneer deze supply een waarde uitzendt, draai deze body". Het `react`-blok wacht daarna tot elke supply die het bekijkt klaar is:

```raku
my $sum = 0;

react {
    whenever Supply.from-list(1, 2, 3) {
        $sum += $_;
    }
}

say $sum; # 6
```

De `whenever`-body draait één keer voor elke waarde — `1`, `2`, `3` — en telt haar bij `$sum` op. De onderwerpswaarde is beschikbaar als `$_` (je kunt haar ook met `-> $v` een naam geven).

Het kerngedrag is dat `react` **blokkeert** tot zijn supplies klaar zijn. Pas nadat de `Supply.from-list` al haar waarden uitgezonden heeft, is het `react`-blok klaar en gaat het programma naar de `say`. Daarom is `$sum` al `6` tegen de tijd dat het afgedrukt wordt: het react-blok wachtte op de hele stroom.

Dat maakt `react` een natuurlijke plek om resultaten uit een stroom bijeen te brengen: zet de reacties op, laat het tot voltooiing draaien, en gebruik daarna wat je verzameld hebt.

{% include nav.html %}
