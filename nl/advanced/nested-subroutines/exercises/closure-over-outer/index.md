---
title: Afsluiten over de buitenste
translations_gpt:
---

{% include menu.html %}

## Probleem

Een geneste subroutine is een *closure*: ze kan de variabelen zien van de subroutine die haar bevat. Schrijf een subroutine `greet($name)` die een geneste hulpfunctie `message` definieert die **geen** argumenten aanneemt. De hulpfunctie retourneert `"Hello, $name!"`, waarbij `$name` rechtstreeks uit de omsluitende `greet` wordt gelezen. Druk binnen `greet` af wat `message` retourneert, en roep `greet('Anna')` aan.

## Voorbeeld

Het programma drukt af:

```
Hello, Anna!
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
