---
title: 'Oplossing: Bestaat het?'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say 'test.txt'.IO.e;
spurt 'test.txt', 'x';
say 'test.txt'.IO.e;
```

🦋 Je kunt de broncode vinden in het bestand [does-it-exist.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/does-it-exist.raku).

## Uitvoer

```
False
True
```

## Opmerkingen

1. `.e` test of een pad bestaat. De eerste controle draait voordat het bestand aangemaakt is, dus geeft ze `False` terug.

1. `spurt` maakt daarna `test.txt` aan, en de tweede controle op *hetzelfde* pad geeft nu `True` terug. Het padobject opnieuw bevragen weerspiegelt de huidige toestand van het bestandssysteem.

{% include nav.html %}
