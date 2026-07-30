---
title: Opruimen bij verlaten
translations_gpt: Oefening 'Opruimen bij verlaten'
---

{% include menu.html %}

## Probleem

De echte kracht van `LEAVE` is dat het wordt uitgevoerd *hoe* het blok ook verlaten wordt -- inclusief een vroegtijdige `return`.

Schrijf een subroutine `work` waarvan de body begint met een `LEAVE`-phaser die `Cleanup` afdrukt. Druk vervolgens, nog steeds binnen de subroutine, `Working` af, gebruik `return` om onmiddellijk terug te keren, en zet een `say 'never reached'`-regel na de `return`. Roep de subroutine aan. De vroegtijdige `return` slaat die laatste regel over, maar `Cleanup` wordt nog steeds afgedrukt.

## Voorbeeld

Het programma drukt af:

```
Working
Cleanup
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
