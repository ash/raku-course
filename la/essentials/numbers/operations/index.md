---
title: Operations with numbers
---

{% include menu.html %}

Non est dubium quin iam scias quasdam operationes quas cum numeris Raku facere possis. Modo dicendum est symbolum _operationis_ vocari _operator_. Obiecta quibus operationes perficimus vocantur _operandum_.

## Arithmetic

**Operator** | **Operatio**
`+` | Additio
`-` | Subtractio
`*` | Multiplicatio
`/` | Divisio

Cum Raku [Unicode](/la/essentials/on-unicode) optime sustineat, nonnulli ex his operatoribus aequivalentes non-ASCII habent:

`×` | Multiplicatio
`÷` | Divisio

Ut ordinem executionis mutare possis, parenthesibus utere:

```raku
dic 3 * 4 + 5;   # 17
dic 3 * (4 + 5); # 27
```

## Modulo

Operator modulo est `%` ut in multis aliis linguis.

`%` | Modulo

Reddit reliquum divisionis integrae duorum numerorum, ita `10 % 3` est `1`. Nota quod `-10 % 3` est `2` quia exitus operationis definitur ut differentia inter primum numerum et divisionem rotundatam multiplicatam per secundum numerum. Ita, `$a % $b` aequivalet `$a - $b * floor($a / $b)`.

## Divisibilitas

Raku addit utilem operatorem ad probandum si numerus divisibilis est per alium numerum.

`%%` | Divisibilitas

Hic est operator infixus qui duos operandos requirit: `10 %% 3`. Si primus operandus divisibilis est per secundum operandum, exitus est Booleanus `Verum`. Alioquin, `Falsum`.

## Operationes Integrae

Sunt speciales operationes quae reddunt exitus integros. Eorum operatores sunt verba pro symbolis.

`div` | Divisio integra
`mod` | Modulo integer

Operator `div` rotundat exitum deorsum, ita `10 div 3` est `3`, et `-10 div 3` est `-4`.

Utrumque `div` et `mod` operandos integros expectant. Ita, sequens programma non operabitur si lineas notatas `Error` uncommentaveris:

```raku
dic 10.3 % 3;     # OK
# dic 10.3 mod 3; # Error

dic 10.3 / 3.3;     # OK
# dic 10.3 div 3.3; # Error
```

## Potentia

Sunt duo modi ad exitum _x_ ad potentiam _y_ obtinendum. Primum, potes uti operatore `**`:

```raku
dic 3 ** 4; # 81
```

Secundum, potes uti digitis superscriptis, exempli gratia:

```raku
dic 3⁴; # 81
```

Possibile est plures quam unum digitum superscriptum ponere ut valorem potentiae maiorem quam 9 obtineas. Exempli gratia:

```raku
dic 2¹⁵; # 32768
```

Potentia negativa non est problema quoque:

```raku
dic 2 ** (-2); ## 0.25
dic 2⁻²; # 0.25
```

Nota quod exitus duarum ultimarum expressionum est numerus `Rat`.

## Operationes cum assignatione

Omnes operationes sustinent compendiariam syntaxin cum variabilem renovare debes. Demonstramus id in exemplo `+`.

Forma plena

```raku
$a = $a + $b;
```

aequivalet:

```raku
$a += $b;
```

{% include nav.html %}