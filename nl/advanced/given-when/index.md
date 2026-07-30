---
title: '`given` en `when`'
translations_gpt: true
---

{% include menu.html %}

Wanneer een programma moet kiezen uit meerdere alternatieven, kan een keten van `if`- en `elsif`-controles lang en repetitief worden. In die situatie is de `given`/`when`-constructie vaak duidelijker. Het lijkt op het `switch`-statement dat in andere talen voorkomt.

Het `given`-blok neemt een waarde en maakt deze het _topic_ — de speciale variabele `$_`. Elk `when`-blok wordt vervolgens vergeleken met dat topic, en het eerste dat overeenkomt wordt uitgevoerd:

```raku
my $n = 2;

given $n {
    when 1 { say 'one' }
    when 2 { say 'two' }
    when 3 { say 'three' }
}
```

Dit programma drukt af:

```
two
```

In tegenstelling tot een `switch` in sommige andere talen, is er geen doorval (fall-through): zodra een `when` overeenkomt, wordt het blok uitgevoerd en is het `given`-blok afgelopen. De overige `when`-blokken worden niet getest.

## Het `default`-blok

Een `default`-blok wordt uitgevoerd wanneer geen van de `when`-blokken overeenkomt. Het speelt dezelfde rol als de `else`-tak van een `if`-statement:

```raku
my $n = 5;

given $n {
    when 1 { say 'one' }
    when 2 { say 'two' }
    default { say 'many' }
}
```

Omdat `$n` noch `1` noch `2` is, drukt het programma af:

```
many
```

{% include nav.html %}
