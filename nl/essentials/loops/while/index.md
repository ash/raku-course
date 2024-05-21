---
title: while
---

{% include menu.html %}

De `while` constructie heeft een Booleaanse voorwaarde en een codeblok. Raku voert het codeblok herhaaldelijk uit _terwijl_ de voorwaarde `True` is.

```raku
my $x = 0;
while $x <= 10 {
    $x = prompt 'Voer een getal in dat niet groter is dan 10: ';
    say "Je hebt $x ingevoerd.";
}
say "$x is groter dan 10.";
```

Het programma vraagt om een getal in te voeren, en als het getal niet groter is dan 10, herhaalt het lichaam van de lus. Zodra het ingevoerde getal de voorwaarde `$x <= 10` doorbreekt, eindigt de lus en wordt de volgende regel van het programma uitgevoerd.

```console
$ raku t.raku
Voer een getal in dat niet groter is dan 10: 10
Je hebt 10 ingevoerd.
Voer een getal in dat niet groter is dan 10: 4
Je hebt 4 ingevoerd.
Voer een getal in dat niet groter is dan 10: 1
Je hebt 1 ingevoerd.
Voer een getal in dat niet groter is dan 10: 20
Je hebt 20 ingevoerd.
20 is groter dan 10.
```

{% include nav.html %}