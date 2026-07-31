---
title: Kongruigi laŭliteran tekston
translations_gpt:
---

{% include menu.html %}

La plej simpla ŝablono estas sekvenco de literoj kaj ciferoj. Tia ŝablono kongruas ekzakte kun tiuj signoj, en tiu ordo, ie ajn en la ĉeno:

```raku
say 'the cat sat' ~~ /cat/; # ｢cat｣
say 'Hello'       ~~ /ell/; # ｢ell｣
```

La kongruo ne devas komenciĝi ĉe la komenco de la ĉeno — la regulesprima motoro serĉas la ŝablonon ĉe ĉiu pozicio, ĝis ĝi trovas ĝin.

Sukcesa kongruo produktas objekton `Match`. Tiu `｢cat｣` en la unua ekzemplo estas, kiel tia objekto aspektas presita: `say` montras `Match` kiel la tekston, kun kiu ĝi kongruis, envolvitan en la angulaj krampoj `｢ ｣`. Se la ŝablono ne ĉeestas, la kongruo anstataŭe malsukcesas: la sagaca kongruigo produktas `Nil`, nedifinitan valoron, kiu kalkuliĝas kiel malvera en Boolea testo:

```raku
say ('the cat sat' ~~ /dog/);       # Nil
say ('the cat sat' ~~ /dog/).Bool;  # False
```

Ene de regulesprimo, spacoj **ne** estas signifaj defaŭlte — ili estas tie nur por fari la ŝablonon legebla. Do `/ ell /` kongruas ekzakte kun tio, kun kio `/ell/` kongruus; la ĉirkaŭaj spacoj estas simple ignorataj:

```raku
say 'Hello' ~~ / ell /; # ｢ell｣
```

Ĉar spaco en la ŝablono estas ignorata, kongruigi *efektivan* spacon postulas **citilojn**: kion ajn vi metas en citilojn estas kongruigata laŭvorte. Tiu sama citado estas la maniero kongruigi interpunkcian signon, kiu alie havus specialan signifon en regulesprimo:

```raku
say 'a b'       ~~ / 'a b' /; # ｢a b｣
say 'price: $5' ~~ / '$' /;   # ｢$｣
```

(Por blankspaco vi ankaŭ povas uzi la klason `\s`, kiun vi baldaŭ renkontos.)

{% include nav.html %}
