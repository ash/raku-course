---
title: Variabilis interpolatio in Raku stringis
---

{% include menu.html %}

Iamne animadvertisti in sectionibus praecedentibus quod interdum stringae in singulis, interdum in duplicibus quotationibus citatae sunt? Differentia est crucialis.

Scilicet, duplices quotationes uti potes si vis singulam quotationem intra stringam ponere cum minimo labore:

```raku
dic "O'Henry";
```

Ceterum, melius est uti apostropho proprio loco singulae quotationis quia [Raku bonum est in Unicode](../../on-unicode).

```raku
dic 'O’Henry';
```

Sed vera potentia duplicium quotationum est eorum facultas _interpolandi_ variabiles et—ut mox videbimus—codicem exsequendi! Examina sequens programma:

```raku
meum $nomen = 'Karl';
dic "Salve, $nomen!";
```

Ut exspectare potes, programma imprimit `Salve, Karl!`. Nomen variabilis `$nomen` (una cum suo sigillo `$`) substitutum est valore variabilis.

Variabilis interpolata est cum valore quem variabilis tenebat momento interpolationis, ita si contentum `$nomen` mutas et iterum interpolas, novus valor substituetur. Experiamur:

```raku
meum $nomen = 'Karl';
dic "Salve, $nomen!";

$nomen = 'Anna';
dic "Salve, $nomen!";
```

Eadem stringa hoc tempore diversas nuntios generat:

    Salve, Karl!
    Salve, Anna!

{% include nav.html %}