---
title: Transliteratie
translations_gpt:
---

{% include menu.html %}

Wanneer je afzonderlijke **tekens** wilt vervangen in plaats van een heel patroon, gebruik je de transliteratieoperator `tr///`. Hij koppelt elk teken in de eerste verzameling aan het teken op dezelfde positie in de tweede verzameling:

```raku
my $s = 'hello';
$s ~~ tr/a..z/A..Z/;
say $s; # HELLO
```

Elke kleine letter wordt vervangen door de hoofdletter op de overeenkomstige positie in het tweede bereik, dus wordt het hele woord in hoofdletters gezet.

De twee verzamelingen worden teken voor teken op elkaar afgestemd. Een klein voorbeeld dat drie letters verschuift:

```raku
my $s = 'abcabc';
$s ~~ tr/abc/xyz/;
say $s; # xyzxyz
```

Hier wordt elke `a` een `x`, elke `b` een `y` en elke `c` een `z`.

Transliteratie is het juiste gereedschap voor koppelingen op tekenniveau — hoofdlettergebruik veranderen, een klein alfabet omwisselen of coderen. Voor alles wat van een patroon afhangt in plaats van van afzonderlijke tekens gebruik je `s///`.

{% include nav.html %}
