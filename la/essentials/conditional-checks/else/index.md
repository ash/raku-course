---
title: Aliud clausula
---

{% include menu.html %}

Clausula `if` sequi potest clausula `else`, quae currit cum condicio non est satisfacta.

```raku
my $t = 36.6;
if 35.5 < $t < 37.5 {
    dic 'Bene es.';
}
else {
    dic 'Medicum voca, fortasse?';
}
```

Clausula `else` sola adhiberi non potest (est melior alternativa quae vocatur [`unless`](../unless), quae mox introducetur).

{% include nav.html %}