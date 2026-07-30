---
title: Reductie-meta-operatoren
translations_gpt: Reductie-meta-operatoren
---

{% include menu.html %}

Een reductie-meta-operator wordt geschreven als een gewone operator tussen vierkante haken, zoals `[+]` of `[*]`. Hij neemt een lijst waarden en plaatst de operator tussen elk paar, waardoor de hele lijst tot een enkele waarde wordt gereduceerd.

Bijvoorbeeld, `[+]` telt alle elementen van een lijst op:

```raku
my @data = 3, 5, 7, 9, 11;
say [+] @data; # 35
```

De constructie `[+] @data` is gelijkwaardig aan het met de hand uitschrijven van de operator:

```raku
say 3 + 5 + 7 + 9 + 11; # 35
```

Elke geschikte infix-operator werkt op dezelfde manier. Met `[*]` krijg je het product van de lijst, dus het toepassen ervan op het bereik `1..$n` is een handige manier om een faculteit te berekenen:

```raku
my $n = 5;
say [*] 1..$n; # 120
```

Hier produceert het bereik `1..$n` de getallen van 1 tot 5, en `[*]` vermenigvuldigt ze: `1 * 2 * 3 * 4 * 5`, wat _5!_ is.

Tekenreeksconcatenatie werkt ook. De `[~]`-reductie voegt een lijst tekenreeksen samen tot een:

```raku
my @strings = <neun hundert fünf und zwanzig>;
say [~] @strings; # neunhundertfünfundzwanzig
```

Zelfs vergelijkingsoperatoren kunnen worden gereduceerd. `[<]` geeft aan of de waarden in strikt oplopende volgorde staan:

```raku
say [<] 1, 2, 3; # True
```

## Driehoeksreductie

Als je een backslash binnen de haken plaatst, krijg je een _driehoeks_reductie, die alle tussenresultaten bewaart in plaats van alleen het eindresultaat:

```raku
say [\+] 1..5; # (1 3 6 10 15)
```

Elk element van het resultaat is een gedeeltelijke som: `1`, dan `1+2`, dan `1+2+3`, enzovoort tot aan de som van de hele lijst.

{% include nav.html %}
