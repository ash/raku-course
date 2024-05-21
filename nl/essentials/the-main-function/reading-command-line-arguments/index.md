---
title: Lezen van commandoregelargumenten
---

{% include menu.html %}

De `MAIN` functie is handig niet alleen om expliciet het begin van het programma te lokaliseren, maar ook vanwege zijn argumenten, die de waarden krijgen die in de commandoregel worden doorgegeven.

Er zijn twee manieren om commandoregelargumenten te lezen. Een daarvan is via de [`@*ARGS` array](/nl/essentials/positionals/args-array), die we al hebben gebruikt. Laten we nu de tweede methode onderzoeken.

Beschouw een programma dat twee getallen optelt.

```raku
sub MAIN($a, $b) {
    say $a + $b;
}
```

Je kunt het programma op de volgende manier uitvoeren. Het programma drukt de som van zijn twee argumenten af:

```console
$ raku t.raku 123 45
168
```

Net als elke andere functie kan de `MAIN` functie standaardwaarden hebben voor sommige (of zelfs alle) van zijn argumenten. Bijvoorbeeld:

```raku
sub MAIN($a, $b = 100) {
    say $a + $b;
}
```

Als het tweede argument niet wordt opgegeven, wordt de standaardwaarde gebruikt:

```console
$ raku t.raku 15
115
```

{% include nav.html %}