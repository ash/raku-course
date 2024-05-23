---
title: Citante ĉenajn tabelojn
---

{% include menu.html %}

Por ĉenaj tabeloj, kie la eroj estas mallongaj ĉenoj sen spacoj, Raku ofertas belan sintakson por ilia inicialigo.

```raku
my @digits = <zero one two three four five six seven eight nine>;
```

Estas via elekto aldoni pliajn spacojn ĉirkaŭ la angulaj krampoj aŭ ne. La kompililo akceptas ambaŭ opciojn.

```raku
my @digits = < zero one two three four five six seven eight nine >;
```

Ambaŭ konstruoj estas ekvivalentaj al rekta varianto:

```raku
my @digits = 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine';
```

%%tipblock
## Tabelo vs Listo

Notu ke en la supraj ekzemploj, la citaĵo `< . . . >` kreas `List`, ne `Array`. Vi povas konfirmi tion per vokado de la metodo `WHAT`:

```raku
say <a b c>.WHAT; # (List)
```

Tamen, kiam vi asignas ĝin al tabelo, vi ricevas tabelon kun la elementoj el la listo.

```raku
my @a = <a b c>;
say @a.WHAT; # (Array)
```

%%/tipblock

{% include nav.html %}