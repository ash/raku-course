---
title: Quantificator numeri
translations_gpt:
---

{% include menu.html %}

Cum numero exacto repetitionum vel intervallo eges, utere quantificatore `**` quem numerus sequitur:

```raku
say '2025' ~~ / \d ** 4 /; # ｢2025｣
```

`\d ** 4` exacte quattuor cifras deinceps congruit.

Intervallum duobus punctis numerum variabilem permittit. Exempli gratia, `\d ** 2..3` duas vel tres cifras congruit — quot praesto sunt, usque ad tres:

```raku
say '12345' ~~ / \d ** 2..3 /; # ｢123｣
```

Exemplar tres cifras cepit, quia tres sunt plurimae quas in intervallo `2..3` capere licet.

Finem superiorem etiam apertum relinquere potes. `\d ** 2..*` significat «duas vel plures cifras», et `\d ** 1..*` idem significat quod `\d+`.

Quantificator `**` forma generalis est; `*`, `+` et `?` mera compendia commoda sunt pro casibus frequentibus `0..*`, `1..*` et `0..1`.

{% include nav.html %}
