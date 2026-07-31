---
title: Konstrui kunligojn
translations_gpt:
---

{% include menu.html %}

La plej simpla maniero konstrui kunligon estas per la kunligaj operatoroj. La operatoro `|` faras _any_-kunligon:

```raku
my $j = 1 | 2 | 3;
say $j; # any(1, 2, 3)
```

La valoro `$j` reprezentas «1 aŭ 2 aŭ 3». Ekzistas kvar specoj de kunligo, ĉiu kun operatoro kaj responda funkcio:

* `any( … )` aŭ `a | b` — vera, se **iu ajn** valoro kongruas
* `all( … )` aŭ `a & b` — vera, se **ĉiuj** valoroj kongruas
* `one( … )` aŭ `a ^ b` — vera, se **precize unu** valoro kongruas
* `none( … )` — vera, se **neniu** valoro kongruas (ĉi tio estas la sola speco sen operatora formo — uzu la funkcion)

La funkciaj formoj estas oportunaj kun listo:

```raku
say all(3, 7, 2);  # all(3, 7, 2)
say none(1, 2, 3); # none(1, 2, 3)
```

Kunligo estas plej utila en komparo. Demandi, ĉu nombro egalas _any_-kunligon, testas ĝin kontraŭ ĉiu valoro samtempe:

```raku
say so 2 == any(1, 2, 3); # True
say so 5 == any(1, 2, 3); # False
```

La operatora formo legiĝas same nature — `1 | 2 | 3` estas precize la sama _any_-kunligo:

```raku
say so 2 == 1 | 2 | 3; # True
say so 5 == 1 | 2 | 3; # False
```

La `so` transformas la kunligan rezulton en simplan bulean valoron. La sekva temo rigardas, kio okazas malantaŭ la kulisoj, kiam vi faras tion.

{% include nav.html %}
