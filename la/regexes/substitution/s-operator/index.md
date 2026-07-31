---
title: Operator substitutionis
translations_gpt:
---

{% include menu.html %}

Operator substitutionis est `s///`. Similis congruentiae cum secundo loco videtur: exemplar inter duas primas lineolas obliquas it et textus permutationis inter duas ultimas:

```raku
my $s = 'hello world';
$s ~~ s/world/Raku/;
say $s; # hello Raku
```

Substitutio variabilem **in loco** mutat, itaque ipsa `$s` renovatur. Textus in parte permutationis litteralis est — eum in virgulas non ponis.

Sicut congruentia, substitutio ex more solam **primam** occurrentiam tangit. Adde adverbium `:g` ut omnem occurrentiam permutes:

```raku
my $s = 'a-b-c';
$s ~~ s:g/'-'/_/;
say $s; # a_b_c
```

Si originale servare vis et **exemplum** mutatum producere loco eius quod in loco mutes, utere operatore **maiusculo** `S///`: substitutionem agit et catenam mutatam reddit, originali intacto relicto. Quia variabilem in loco non renovat, illud per `given` potius quam per `~~` dirige:

```raku
my $orig = 'color';
say S:g/o/0/ given $orig; # c0l0r
say $orig;                # color
```

(`$orig ~~ S///` scribere te monet ut `given` loco eius adhibeas — cum `S///` nihil est quod in loco mutetur.)

Eadem agendi ratio non destruens etiam ut methodus praesto est, `.subst`, quae novam catenam reddit:

```raku
my $orig = 'color';
say $orig.subst('o', '0', :g); # c0l0r
say $orig;                     # color
```

{% include nav.html %}
