---
title: Konstrui URL-on
translations_gpt:
---

{% include menu.html %}

## Problemo

URL estis dividita en pecojn kaj konservita en tabelo. Rekunigu la pecojn en unu ĉenon per redukta meta-operatoro, presi la rezultan URL-on, kaj sur la sekva linio presi kiom da signoj longaj ĝi estas.

## Ekzemplo

Por la eniga tabelo:

```raku
my @parts = <http :// example .com>;
```

la programo presas:

```
http://example.com
18
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}
