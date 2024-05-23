---
title: Fuga characterum specialium in chordis Raku
---

{% include menu.html %}

Imagina te velle imprimere titulum pretii, et servas et nomen producti et pretium eius in variabilibus scalaribus?

```raku
my $product = 'Electricitas';
my $price = 3.14;
```

Quomodo imprimes titulum si pretium destinatur in dollaris? Exitus expectatus est: `Electricitas costs $3.14`. Signum dollari in chordis duplici-quotatis est indicator variabilis interpolandi. Ad imprimendum characterem `$` ipsum, necesse est eum effugere:

```raku
say "$product costs \$$price";
```

Certe, potes uti concatenatione chorda et evitare effugium `$`:

```raku
say $product ~ ' costs $' ~ $price;
```

Haec varietas exacte eandem chordam imprimit, sed interpolatio videtur naturalior et facilius legitur. Nota quod character `$` neque interpolatus neque effugitus est in chorda simplici-quotata: `' costs $'`. Haec est differentia principalis. Characteres speciales in simplicibus quotatis apparent ut sunt.

Hic sunt aliquot characteres speciales qui habent significationem specialem in chordis duplici-quotatis:

`\$` | Signum dollari
`\n` | Linea nova
`\r` | Reditus currus
`\t` | Tabula horizontalis
`\"` | Quotatio duplici
`\\` | Retroversus

Modus quo chorda quotatur definit quomodo Raku tractet characteres speciales. Considera haec duo exempla:

```raku
say 'Unus\nDuo';
say "Tres\nQuattuor";
```

Si curris hoc programma, videbis primam chordam apparere ut est in una linea. Secunda chorda divisa est in duas partes:

    Unus\nDuo
    Tres
    Quattuor

In duplicibus quotatis, sequens specialis `\n` processa est ut character novae lineae, dum in chorda simplici-quotata erat regularis sequens duorum characterum: `\` et `n`.

Est exceptio interesting pro `'` et `\`. In simplicibus quotatis, potes effugere simplicem quotationem praefigendo eam cum alio `\`:

```raku
say '\''; # '
```

Retroversus etiam effugere debet si sequitur simplicis quotatio:

```raku
say 'a\b\c\\'; # a\b\c\
```

{% include nav.html %}