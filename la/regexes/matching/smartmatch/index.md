---
title: Operator congruentiae sagacis
translations_gpt:
---

{% include menu.html %}

Operator qui regex catenae applicat est congruentia sagax `~~`:

```raku
say 'the cat sat' ~~ /cat/; # ｢cat｣
```

Exemplar inter lineolas obliquas scriptum forma frequentissima est, sed duae aliae sunt quae idem significant et interdum clariores sunt:

```raku
say 'the cat sat' ~~ m/cat/;  # ｢cat｣
say 'the cat sat' ~~ rx/cat/; # ｢cat｣
```

Forma `m/.../` premit te _congruere_, et utilis est cum optiones congruentiae addere vis (illis optionibus, quae [_adverbia_](/la/regexes/adverbs) appellantur, postea occurres). Forma `rx/.../` valorem regex construit sine eo quod illum iam congruat.

Saepissime solum curas utrum catena congruerit, non quid exacte inventum sit. Quia congruentia felix valor verus est et congruentia deficiens falsa, effectu directe in contextu Booleano uti potes. Mundissimus modus simplex `True` vel `False` accipiendi est functio `so`:

```raku
say so 'the cat sat' ~~ /cat/; # True
say so 'the cat sat' ~~ /dog/; # False
```

Hoc regex condicionem naturalem pro `if` reddit:

```raku
if 'the cat sat' ~~ /cat/ {
    say 'found it';   # found it
}
```

{% include nav.html %}
