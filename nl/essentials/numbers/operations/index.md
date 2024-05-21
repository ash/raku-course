---
title: Operaties met getallen
---

{% include menu.html %}

Er is geen twijfel dat je al enkele van de bewerkingen kent die je met Raku-getallen kunt doen. Om te vermelden dat het symbool van de _bewerking_ een _operator_ wordt genoemd. De objecten waarop we bewerkingen uitvoeren, worden _operanden_ genoemd.

## Rekenkunde

**Operator** | **Bewerking**
`+` | Optelling
`-` | Aftrekking
`*` | Vermenigvuldiging
`/` | Deling

Aangezien Raku [Unicode ondersteunt](/nl/essentials/on-unicode) echt goed, hebben sommige van deze operators niet-ASCII-equivalenten:

`×` | Vermenigvuldiging
`÷` | Deling

Om de volgorde van uitvoering te wijzigen, gebruik je haakjes:

```raku
say 3 * 4 + 5;   # 17
say 3 * (4 + 5); # 27
```

## Modulo

De modulo-operator is `%` zoals in veel andere talen.

`%` | Modulo

Het retourneert de rest van de gehele deling van twee getallen, dus `10 % 3` is `1`. Merk op dat `-10 % 3` `2` is omdat het resultaat van de bewerking wordt gedefinieerd als het verschil tussen het eerste getal en de naar beneden afgeronde deling vermenigvuldigd met het tweede getal. Dus, `$a % $b` is gelijk aan `$a - $b * floor($a / $b)`.

## Deelbaarheid

Raku voegt een nuttige operator toe om te testen of het getal deelbaar is door een ander getal.

`%%` | Deelbaarheid

Dit is een infix-operator die twee operanden nodig heeft: `10 %% 3`. Als de eerste operand deelbaar is door de tweede operand, is het resultaat een Booleaanse `True`. Anders `False`.

## Gehele getal bewerkingen

Er zijn speciale bewerkingen die gehele getal resultaten retourneren. Hun operators zijn woorden in plaats van symbolen.

`div` | Gehele deling
`mod` | Gehele modulo

De `div` operator rondt het resultaat naar beneden af, dus `10 div 3` is `3`, en `-10 div 3` is `-4`.

Zowel `div` als `mod` verwachten gehele operanden. Dus, het volgende programma zal niet werken als je de regels die gemarkeerd zijn als `Error` uitcommentarieert:

```raku
say 10.3 % 3;     # OK
# say 10.3 mod 3; # Error

say 10.3 / 3.3;     # OK
# say 10.3 div 3.3; # Error
```

## Macht

Er zijn twee manieren om het resultaat van _x_ tot de macht _y_ te krijgen. Ten eerste kun je de `**` operator gebruiken:

```raku
say 3 ** 4; # 81
```

Ten tweede kun je superscript cijfers gebruiken, bijvoorbeeld:

```raku
say 3⁴; # 81
```

Het is mogelijk om meer dan één superscript cijfer te plaatsen om de waarde van een macht groter dan 9 te krijgen. Bijvoorbeeld:

```raku
say 2¹⁵; # 32768
```

Negatieve machten zijn ook geen probleem:

```raku
say 2 ** (-2); ## 0.25
say 2⁻²; # 0.25
```

Merk op dat het resultaat van de laatste twee uitdrukkingen een `Rat` getal is.

## Operaties met toewijzing

Alle bewerkingen ondersteunen de snelkoppeling syntaxis wanneer je de variabele moet bijwerken. Laten we dit demonstreren aan de hand van het voorbeeld van `+`.

De volledige vorm

```raku
$a = $a + $b;
```

is gelijk aan:

```raku
$a += $b;
```

{% include nav.html %}