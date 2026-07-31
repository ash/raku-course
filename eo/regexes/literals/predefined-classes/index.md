---
title: Antaŭdifinitaj signoklasoj
translations_gpt:
---

{% include menu.html %}

Kelkaj signoklasoj estas tiel oftaj, ke Raku donas al ili mallongajn nomojn. Vi skribas ilin per malantaŭa oblikvo:

* `\d` — cifero
* `\w` — «vorta» signo: litero, cifero aŭ substreko
* `\s` — blankspaca signo (spaco, tabo, linifino)

```raku
say 'order 66' ~~ /\d/; # ｢6｣
say 'a_b'      ~~ /\w/; # ｢a｣
say '  hi'     ~~ /\s/; # ｢ ｣
```

Ĉiu el ĉi tiuj havas majusklan partneron, kiu kongruas kun la **kontraŭa** aro:

* `\D` — io ajn, kio ne estas cifero
* `\W` — io ajn, kio ne estas vorta signo
* `\S` — io ajn, kio ne estas blankspaco

```raku
say '  hi' ~~ /\S/; # ｢h｣
```

Fine, unu punkto `.` kongruas kun **ajna** signo:

```raku
say 'abc' ~~ /./; # ｢a｣
```

Ĉi tiuj antaŭdifinitaj klasoj ŝparas multe da tajpado, kaj vi uzos ilin konstante en la resto de ĉi tiu parto.

{% include nav.html %}
