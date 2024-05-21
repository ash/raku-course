---
title: Benoemde parameters
---

{% include menu.html %}

In tegenstelling tot [positionele parameters](../positional-parameters), worden _benoemde_ parameters aangeduid met hun namen.

De volgende functie neemt twee parameters genaamd `$from` en `$to`.

```raku
sub distance(:$from, :$to) { $from - $to }
```

Om de functie aan te roepen, moet je de argumenten benoemen:

```raku
say distance(from => 30, to => 10); # 20
```

Het is een fout om de argumenten door te geven alsof ze positioneel zijn. Bijvoorbeeld, een oproep `distance(30, 10)` genereert een fout:

    Too many positionals passed; expected 0 arguments but got 2
        in sub distance at t.raku line 1
        in block <unit> at t.raku line 2

Het goede nieuws is dat benoemde argumenten in willekeurige volgorde kunnen worden vermeld. De volgende twee oproepen zijn volledig equivalent:

```raku
say distance(from => 30, to => 10); # 20

say distance(to => 10, from => 30); # 20
```

## Variabelen doorgeven

Wanneer de waarde die je aan een functie wilt doorgeven in een variabele wordt bewaard, waarvan de naam overeenkomt met de naam van de parameter, kun je genieten van een speciale syntaxis die het typen vermindert:

```raku
my $from = 30;
my $to = 10;
say distance(:$from, :$to); # 20
```

Dit is vergelijkbaar met een omslachtige oproep:

```raku
say distance(from => $from, to => $to); # 20
```

Ook hier is de volgorde niet strikt:

```raku
say distance(:$to, :$from); # 20
```

Als de naam van de variabele verschilt van de naam van de parameter, gebruik dan een van de manieren om een paar door te geven:

```raku
my $a = 20;
my $b = 10;

say distance(from => $a, to => $b);

# of:

say distance(:from($a), :to($b));
```

{% include nav.html %}