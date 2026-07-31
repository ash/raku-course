---
title: 'Exceptiones per `try` capere'
translations_gpt:
---

{% include menu.html %}

Cum aliquid in programmate Raku male cadit — archivum deest, expressum `die` — _exceptio_ iacitur. Ex more exceptio non tractata programma sistit. Clausula `try` tibi permittit codicem qui deficere possit currere sine ruina.

Codicem periculosum in clausulam `try` involvis. Si exceptio intus iacitur, clausula ibi desinit, sed programma pergit:

```raku
my $result = try {
    die 'Boom!';
};

say "Still works";
```

`die` a `try` capitur, itaque programma non ruit — recta ad enuntiatum sequens pergit et imprimit:

```
Still works
```

Cum clausula ita deficit, valorem indefinitum reddit, itaque `$result` indefinitus est:

```raku
say $result.defined; # False
```

Exceptio capta in variabili speciali `$!` servatur. Nuntium eius inde legere potes:

```raku
say $!.message; # Boom!
```

Itaque `try` errorem fatalem in aliquid vertit quod programma tuum inspicere et ad quod reagere potest. Si clausula sine ulla exceptione currit, `$result` valorem eius continet, et `$!` indefinitus est.

{% include nav.html %}
