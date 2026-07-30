---
title: do en de waarde van een blok
translations_gpt:
---

{% include menu.html %}

Een blok op zichzelf is een statement, geen expressie, dus je kunt het normaal gesproken niet aan een variabele toewijzen. Het prefix `do` maakt van een blok een expressie waarvan de waarde de waarde van het **laatste** statement is:

```raku
my $x = do {
    my $a = 3;
    $a + 4;
};

say $x; # 7
```

Binnen het blok kun je variabelen declareren, meerdere statements uitvoeren en een resultaat berekenen; `do` geeft terug wat het blok oplevert. Dit is handig wanneer het produceren van een waarde meer vereist dan een enkele expressie.

`do` werkt ook voor control-flow-statements, waardoor ook die een waarde kunnen teruggeven:

```raku
my $sign = do given 5 {
    when * > 0 { 'positive' }
    when * < 0 { 'negative' }
    default    { 'zero' }
};

say $sign; # positive
```

Hier maakt `do given` van het hele `given`/`when`-construct een expressie die `positive` oplevert. Hetzelfde werkt met `do if` en `do for`. Kortom, `do` is de manier om een blok of een besturingsstructuur te gebruiken op een plek waar een waarde verwacht wordt.

{% include nav.html %}
