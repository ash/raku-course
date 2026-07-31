---
title: Nosauktie tvērumi
translations_gpt:
---

{% include menu.html %}

Numurēti tvērumi ir ērti, taču, raksturam augot, nosaukumi ir skaidrāki nekā numuri. Lai tvērumam dotu nosaukumu, rakstiet `$<nosaukums>=( … )`:

```raku
if 'Anna:30' ~~ / $<name>=(\w+) ':' $<age>=(\d+) / {
    say $<name>; # ｢Anna｣
    say $<age>;  # ｢30｣
}
```

Satvertie gabali tagad ir sasniedzami pēc nosaukuma caur `$<name>` un `$<age>`, nevis `$0` un `$1`. Tas ir tas pats, kas rakstīt `$/<name>`, jo nosaukumi dzīvo sakritības mainīgā `$/` iekšienē.

Nosauktie tvērumi padara raksturu gandrīz par datu aprakstu:

```raku
if 'x=5' ~~ / $<key>=(\w+) '=' $<value>=(\w+) / {
    say "key is $<key>, value is $<value>"; # key is x, value is 5
}
```

Tāpat kā pozicionālie tvērumi, arī katrs nosauktais tvērums ir sakritības objekts, tāpēc `$<age>.Str` dod vienkāršu tekstu, bet `$<age>.from` — tā pozīciju.

{% include nav.html %}
