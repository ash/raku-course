---
title: Iuncturas construere
translations_gpt:
---

{% include menu.html %}

Simplicissimus modus iuncturam construendi est per operatores iuncturales. Operator `|` iuncturam _any_ facit:

```raku
my $j = 1 | 2 | 3;
say $j; # any(1, 2, 3)
```

Valor `$j` «1 vel 2 vel 3» significat. Quattuor genera iuncturarum sunt, unumquodque cum operatore et functione conveniente:

* `any( … )` vel `a | b` — verum si **quilibet** valor congruit
* `all( … )` vel `a & b` — verum si **omnes** valores congruunt
* `one( … )` vel `a ^ b` — verum si **exacte unus** valor congruit
* `none( … )` — verum si **nullus** valor congruit (hoc solum genus est quod formam operatoris non habet — utere functione)

Formae functionum commodae sunt cum indice:

```raku
say all(3, 7, 2);  # all(3, 7, 2)
say none(1, 2, 3); # none(1, 2, 3)
```

Iunctura utilissima in comparatione est. Quaerere utrum numerus iuncturae _any_ aequet illum contra omnem valorem simul probat:

```raku
say so 2 == any(1, 2, 3); # True
say so 5 == any(1, 2, 3); # False
```

Forma operatoris tam naturaliter legitur — `1 | 2 | 3` est exacte eadem iunctura _any_:

```raku
say so 2 == 1 | 2 | 3; # True
say so 5 == 1 | 2 | 3; # False
```

`so` effectum iuncturalem in simplicem Booleanam vertit. Argumentum sequens inspicit quid post scaenam fiat cum hoc agis.

{% include nav.html %}
