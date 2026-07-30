---
title: Closures
translations_gpt:
---

{% include menu.html %}

Een _closure_ is een subroutine die variabelen vastlegt uit het bereik waarin ze gedefinieerd is, en die in leven houdt zelfs nadat dat bereik geëindigd is. Zo krijgt de subroutine haar eigen private, blijvende toestand.

Het klassieke voorbeeld is een teller:

```raku
sub make-counter {
    my $n = 0;
    return sub { ++$n };
}

my &count = make-counter;
say count(); # 1
say count(); # 2
say count(); # 3
```

De variabele `$n` is binnen `make-counter` gedeclareerd. De teruggegeven subroutine verwijst naar `$n` en sluit er dus omheen: elke aanroep van `count` verhoogt en geeft **dezelfde** `$n` terug, hoewel `make-counter` zelf allang klaar is.

Elke aanroep van `make-counter` maakt een verse `$n`, dus aparte tellers zijn onafhankelijk:

```raku
my &a = make-counter;
my &b = make-counter;
say a(); # 1
say a(); # 2
say b(); # 1
```

Closures laten een functie toestand meedragen zonder globale variabele en zonder object. Het is de functioneel-programmeerwijze om iets tussen aanroepen te onthouden.

{% include nav.html %}
