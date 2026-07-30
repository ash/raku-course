---
title: Betekenisvolle witruimte
translations_gpt:
---

{% include menu.html %}

Binnen een regex worden spaties normaal genegeerd — ze staan er alleen om het patroon leesbaar te maken. Daarom matcht `/foo bar/` de tekst `foobar`. Soms wil je echter werkelijk dat een spatie in het patroon "hier staat witruimte" betekent. Het bijwoord `:s` (kort voor `:sigspace`, "significant space") doet precies dat:

```raku
say so 'foo    bar' ~~ /:s foo bar/; # True
say so 'foobar'     ~~ /:s foo bar/; # False
```

Met `:s` eist de spatie tussen `foo` en `bar` in het patroon witruimte tussen de twee woorden in de string. Een of meer spaties (of tabs) tellen allemaal mee, dus de reeks spaties in `'foo    bar'` matcht.

Betekenisvolle witruimte wordt vooral belangrijk bij grammatica's, waar ze je patronen laat schrijven die lezen als de taal die je aan het ontleden bent. Je komt haar weer tegen als het verschil tussen een `token` en een `rule`.

{% include nav.html %}
