---
title: do kaj la valoro de bloko
translations_gpt:
---

{% include menu.html %}

Bloko sole estas deklaro, ne esprimo, do vi normale ne povas atribui ĝin al variablo. La prefikso `do` transformas blokon en esprimon, kies valoro estas la valoro de ĝia **lasta** deklaro:

```raku
my $x = do {
    my $a = 3;
    $a + 4;
};

say $x; # 7
```

Ene de la bloko vi povas deklari variablojn, plenumi plurajn deklarojn kaj komputi rezulton; `do` redonas tion, kion la bloko taksas. Tio estas oportuna kiam por produkti valoron necesas pli ol unu sola esprimo.

`do` ankaŭ funkcias antaŭ kontrolfluaj deklaroj, ebligante al ili ankaŭ redoni valoron:

```raku
my $sign = do given 5 {
    when * > 0 { 'positive' }
    when * < 0 { 'negative' }
    default    { 'zero' }
};

say $sign; # positive
```

Ĉi tie `do given` transformas la tutan `given`/`when` en esprimon kiu donas `positive`. Same funkcias `do if` kaj `do for`. Resume, `do` estas la maniero uzi blokon, aŭ kontrolstrukturon, en loko kiu atendas valoron.

{% include nav.html %}
