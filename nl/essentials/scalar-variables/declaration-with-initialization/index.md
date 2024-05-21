---
title: Declaratie met initialisatie
---

{% include menu.html %}

Als je de waarde weet die je in een variabele wilt plaatsen op het moment dat de variabele wordt aangemaakt, kun je een regel code besparen en het in één enkele instructie schrijven:

```raku
my $name = 'Anna';
say $name;
```

## Meerdere variabelen

Om meer dan één variabele te maken en toe te wijzen, gebruik je het volgende patroon:

```raku
my ($name, $age) = 'Carl', 36;
```

{% include nav.html %}