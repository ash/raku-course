---
title: Scalaire variabelen
---

{% include menu.html %}

Variabelen moeten worden aangekondigd voordat je ze gebruikt. Raku heeft hiervoor speciale _declarators_. Om een variabele te declareren, gebruik `my` zoals hieronder getoond:

```raku
my $name;
```

Dat gezegd hebbende, heb je een nieuwe variabele geïntroduceerd, die tot nu toe geen inhoud heeft. Maar het is al bekend bij de compiler om het te identificeren wanneer het dezelfde naam later in het programma ziet.

## Meer dan één variabele

Je kunt twee of meer variabelen declareren met dezelfde `my` declarator:

```raku
my ($x, $y);
```

{% include nav.html %}