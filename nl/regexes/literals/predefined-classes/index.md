---
title: Voorgedefinieerde tekenklassen
translations_gpt:
---

{% include menu.html %}

Sommige tekenklassen komen zo vaak voor dat Raku ze korte namen geeft. Je schrijft ze met een backslash:

* `\d` — een cijfer
* `\w` — een "woord"-teken: een letter, een cijfer of een underscore
* `\s` — een witruimteteken (spatie, tab, newline)

```raku
say 'order 66' ~~ /\d/; # ｢6｣
say 'a_b'      ~~ /\w/; # ｢a｣
say '  hi'     ~~ /\s/; # ｢ ｣
```

Elk daarvan heeft een partner met een hoofdletter die de **tegenovergestelde** verzameling matcht:

* `\D` — alles wat geen cijfer is
* `\W` — alles wat geen woordteken is
* `\S` — alles wat geen witruimte is

```raku
say '  hi' ~~ /\S/; # ｢h｣
```

Ten slotte matcht een enkele punt `.` **elk** teken:

```raku
say 'abc' ~~ /./; # ｢a｣
```

Deze voorgedefinieerde klassen schelen veel typewerk, en je zult ze in de rest van dit deel voortdurend gebruiken.

{% include nav.html %}
