---
title: Aldoni al dosiero
translations_gpt:
---

{% include menu.html %}

Defaŭlte, `spurt` anstataŭigas kion ajn estis en la dosiero. Por aldoni al la fino de ekzistanta dosiero anstataŭe, transdonu la nomitan argumenton `:append`:

```raku
spurt 'log.txt', "line1\n";
spurt 'log.txt', "line2\n", :append;

print slurp 'log.txt';
```

La dua `spurt` konservas la ekzistantan enhavon kaj aldonas la novan linion post ĝi, do la dosiero fine havas ambaŭ liniojn:

```
line1
line2
```

Sen `:append`, la dua voko estus superskribinta la dosieron, lasante nur `line2`. Aldonado estas utila por aferoj kiel protokoldosieroj, kie ĉiu rulo de programo aldonas al kreskanta registro anstataŭ komenci denove.

{% include nav.html %}
