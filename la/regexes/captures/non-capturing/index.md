---
title: Greges sine captura
translations_gpt:
---

{% include menu.html %}

Unci rotundi `( )` duo munera simul agunt: partem exemplaris _gregant_ et eam in `$0`, `$1` et cetera _capiunt_. Interdum solum primum munus vis — plures atomos ut unam unitatem tractare — sine numero capturae in id impenso. Ad hoc utere uncis quadratis `[ ]`, qui **sine** captura gregant.

Gregatio refert simul ac quantificatorem adfigis. Quantificator solum ad atomum statim ante se adligatur, itaque exemplar infra solam ultimam litteram repetit:

```raku
say 'abccc' ~~ / abc ** 3 /; # ｢abccc｣
```

Sola `c` ter repetita est. Involve totam partem in `[ ]` ut totam repetas:

```raku
say 'abcabcabc' ~~ / [ abc ] ** 3 /; # ｢abcabcabc｣
```

Nunc `[ abc ]` una unitas est, et `** 3` ad gregationem pertinet.

Quia `[ ]` nullum locum capturae capit, numeri partibus quas revera curas reservati manent. Compara simplicem congruentiam clavis et valoris:

```raku
if 'foo=42' ~~ / (\w+) '=' (\d+) / {
    say $0; # ｢foo｣
    say $1; # ｢42｣
}
```

Fac clavem verbo praecedi posse quod praeterire vis. Grega illud praefixum per `[ ]` ne numerationem turbet:

```raku
if 'the foo=42' ~~ / [ \w+ \s ]? (\w+) '=' (\d+) / {
    say $0; # ｢foo｣
    say $1; # ｢42｣
}
```

Optionale `[ \w+ \s ]?` `the ` congruit sed nullam capturam vindicavit, itaque `$0` adhuc clavis est et `$1` adhuc valor. Si illud praefixum per `( )` scripsisses, omnia mota essent: praefixum `$0` fieret, clavis `$1`, et valor `$2`.

Regula brevis est: utere `( )` cum textum congruentem servare vis, et `[ ]` cum solum gregare vis. Utraque quantificatores et alternationes accipiunt, quapropter alternatio superior `[ cat | dog ] house` uncis quadratis usa est — gregatione egebat sed non alia captura.

{% include nav.html %}
