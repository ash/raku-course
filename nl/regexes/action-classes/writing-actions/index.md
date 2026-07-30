---
title: Een actieklasse schrijven
translations_gpt:
---

{% include menu.html %}

Een actieklasse is een gewone klasse met één methode per grammaticatoken. Elke methode ontvangt de match voor dat token als `$/` en roept `make` aan om er een waarde aan te hangen — precies wat het inline blok deed, maar apart van het patroon gehouden:

```raku
grammar Sum {
    token TOP { <a> '+' <b> }
    token a   { \d+ }
    token b   { \d+ }
}

class SumActions {
    method TOP($/) { make $<a>.made + $<b>.made }
    method a($/)   { make $/.Int }
    method b($/)   { make $/.Int }
}
```

De grammatica bevat nu alleen het patroon; alle betekenis leeft in `SumActions`. Merk op hoe de methoden samenwerken: `a` en `b` `make`-en elk een geheel getal, en `TOP` leest die met `$<a>.made` en `$<b>.made` en maakt hun som.

Om de actieklasse te gebruiken, geef je met het benoemde argument `actions` een instantie aan `.parse` mee en lees je daarna het bovenste resultaat met `.made`:

```raku
say Sum.parse('2+3', actions => SumActions.new).made; # 5
```

Terwijl de grammatica ontleedt, draait de methode van elk token automatisch en wordt de waarde van onderaf opgebouwd. Het resultaat op de bovenste match is de waarde die je wilt — hier het getal `5`.

{% include nav.html %}
