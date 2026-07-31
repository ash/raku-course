---
title: Operatores ab usore definiti
---

{% include menu.html %}

Operatores in Raku revera tantum subroutinae nominibus specialibus sunt. Hoc significat te tuos proprios definire posse, utens nominibus categoriarum quae in pagina [Types of Raku operators](/la/advanced/operator-types) invenisti: `prefix`, `infix`, `postfix`, et cetera.

Ut operatorem declares, scribe `sub` cuius nomen est categoria, colon, et symbolum operatoris in uncis angularibus. Hic est novus operator infixus nomine `plus`:

```raku
sub infix:<plus>($a, $b) {
    $a + $b
}

say 3 plus 4; # 7
```

Semel definitus, `plus` inter duos operandos suos adhibetur, exacte sicut quilibet operator infixus praeconstruitus.

Operator postfixus operandum suum sequitur. Factorialis classicum exemplum est — hic est ut operator postfixus `!`, super [meta-operatore reductionis](/la/advanced/metaoperators/reduction) quem antea invenisti constructus:

```raku
sub postfix:<!>(Int $n) {
    [*] 1..$n
}

say 5!; # 120
```

Non limitaris ad litteras et interpunctionem ASCII; symbolum operatoris quilibet character esse potest. Hic operator praefixus signum sectionis adhibet ad numerum duplicandum:

```raku
sub prefix:<§>($x) {
    $x * 2
}

say §5; # 10
```

Operatores definire instrumentum potens est, ergo cum gustu utere: operator bene electus codicem ut dominium problematis legere facere potest, dum obscurus tantum proximum lectorem confundit.

{% include nav.html %}
