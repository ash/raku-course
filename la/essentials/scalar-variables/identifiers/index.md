---
title: Nomina variabilium
---

{% include menu.html %}

Antequam ulterius progrediamur, tempus aliquod consumamus in argumento iucundo de nominibus variabilium permissis. Hactenus vidimus nomina simplicia ut `$name` vel `$age`, quae omnino ex litteris minusculis alphabeti Anglici constabant. Sed plures sunt possibilitates.

## Sensibilitas litterarum

Nomina variabilium (vel _identificatorum_) sunt sensitiva ad litteras. Id significat omnia nomina infra posita ad diversos continentes scalarios referre:

```raku
$myname

$MyName

$myName

$MYNAME
```

Tuae discretioni relinquitur adhaerere schemae nominum, sed probabiliter potes nomina omnia capitalia reservare pro constantibus.

## Aliae litterae

Inter litteras ASCII, uti potes digitis, charactere underscore `_`, hyphen `-`, et singulo apice (qui pro apostropho stat) `'`. Nota primum characterem identificatoris debere esse aut litteram aut underscore. Utrumque `-` et `'` sequi debent characterem alphabeticum. Hic sunt aliquot plura identificatoria valida:

```raku
$___

$a'b'c

$my-name

$address2
```

Iterum, tuae discretioni relinquitur nomina eligere, sed probabiliter non est bona praxis nomina consulto eligere quae cryptica videntur.

## Characteres Unicode

Definitio litterarum et digitorum revera extenditur ad includendos omnes illos characteres qui litterae et digiti decimales secundum proprietates Unicode considerantur. Exempli gratia, sequentes variabiles in Raku validae sunt:

```raku
$привет

$駱駝道

$αβγ

$Δ۲ # ubi ۲ est digitus
```

{% include nav.html %}