---
title: Zelf gedefinieerde operatoren
translations_gpt:
---

{% include menu.html %}

Operatoren in Raku zijn eigenlijk gewoon subroutines met speciale namen. Dat betekent dat je je eigen operatoren kunt definiëren, met behulp van de categorienamen die je tegenkwam op de pagina [Typen Raku-operatoren](/nl/advanced/operator-types): `prefix`, `infix`, `postfix`, enzovoort.

Om een operator te declareren, schrijf je een `sub` waarvan de naam bestaat uit de categorie, een dubbele punt en het symbool van de operator tussen punthaken. Hier is een nieuwe infix-operator genaamd `plus`:

```raku
sub infix:<plus>($a, $b) {
    $a + $b
}

say 3 plus 4; # 7
```

Eenmaal gedefinieerd wordt `plus` tussen zijn twee operanden gebruikt, precies zoals elke ingebouwde infix-operator.

Een postfix-operator volgt na zijn operand. De faculteit is een klassiek voorbeeld — hier is het als de `!` postfix-operator, gebouwd op [de reductie-meta-operator](/nl/advanced/metaoperators/reduction) die je eerder tegenkwam:

```raku
sub postfix:<!>(Int $n) {
    [*] 1..$n
}

say 5!; # 120
```

Je bent niet beperkt tot letters en ASCII-leestekens; het symbool van een operator kan elk willekeurig teken zijn. Deze prefix-operator gebruikt het sectieteken om een getal te verdubbelen:

```raku
sub prefix:<§>($x) {
    $x * 2
}

say §5; # 10
```

Het definiëren van operatoren is een krachtig hulpmiddel, dus gebruik het met smaak: een goed gekozen operator kan code laten lezen als het probleemdomein, terwijl een obscure operator alleen maar de volgende lezer in verwarring brengt.

{% include nav.html %}
