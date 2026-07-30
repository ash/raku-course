---
title: Een array aliassen
translations_gpt:
---

{% include menu.html %}

## Probleem

Je hebt een array:

```raku
my @original = 10, 20, 30;
```

Maak een tweede naam, `@alias`, die verwijst naar _hetzelfde_ array (kopieer het niet). Gebruik deze keer `push` om een nieuw element aan `@original` toe te voegen, en print vervolgens `@alias` om te laten zien dat de alias niet alleen waardewijzigingen ziet, maar ook structurele.

## Voorbeeld

Het programma print:

```
[10 20 30 40]
```

## Oplossing

✅ [Zie de oplossing](solution)

{% include nav.html %}
