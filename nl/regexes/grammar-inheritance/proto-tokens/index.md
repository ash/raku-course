---
title: Prototokens en alternatie
translations_gpt:
---

{% include menu.html %}

Soms heeft één begrip meerdere vormen — een getal kan een geheel getal of een decimaal getal zijn. Je zou een alternatie met `|` kunnen schrijven, maar grammatica's bieden een nettere manier: een _prototoken_ met benoemde varianten.

Declareer het overkoepelende token als `proto token` en schrijf daarna elke variant als `token naam:sym<label>`:

```raku
grammar Number {
    token TOP { <number> }

    proto token number {*}
    token number:sym<int>   { \d+ }
    token number:sym<float> { \d+ '.' \d+ }
}

say Number.parse('42').defined;   # True
say Number.parse('3.14').defined; # True
```

De regel `proto token number {*}` zegt "een `number` is een van de onderstaande varianten". Elke variant draagt een label `:sym<…>` dat haar een naam geeft. Wanneer de grammatica een `<number>` nodig heeft, probeert ze de varianten en kiest ze via longest-token matching degene die past — `int` voor `42`, `float` voor `3.14`.

Prototokens lezen beter dan een lange keten `|`-alternatieven, en de labels `:sym<…>` geven elk geval een naam waarop je later kunt inspelen wanneer je betekenis aan de parse hangt. Ze zijn de idiomatische manier om "een van deze soorten" in een grammatica uit te drukken.

{% include nav.html %}
