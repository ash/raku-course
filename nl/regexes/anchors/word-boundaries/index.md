---
title: Woordgrenzen
translations_gpt:
---

{% include menu.html %}

`cat` matchen slaagt binnen `category`, omdat de drie letters daar werkelijk staan. Vaak is dat niet wat je wilt — je bedoelt het hele woord `cat`. Een anker voor een _woordgrens_ lost dit op.

* `<<` matcht aan de **linker**rand van een woord (het begin van een woord)
* `>>` matcht aan de **rechter**rand van een woord (het einde van een woord)

Wikkel een woord in deze ankers om het alleen als volledig woord te matchen:

```raku
say 'the cat sat' ~~ /<< cat >>/;    # ｢cat｣
say so 'category'  ~~ /<< cat >>/;   # False
```

In `category` staat vlak achter `cat` geen woordgrens, dus mislukt het verankerde patroon — precies het gedrag dat we wilden.

Een woordgrens ligt tussen een woordteken (`\w`) en een niet-woordteken, dus verbruikt hij zelf niets; net als `^` en `$` beweert hij alleen een positie.

De twee ankers kunnen ook met de guillemettekens `«` en `»` geschreven worden als je die liever hebt. Ze gedragen zich precies als `<<` en `>>`:

```raku
say 'the cat sat' ~~ /« cat »/;  # ｢cat｣
say so 'category'  ~~ /« cat »/;  # False
```

{% include nav.html %}
