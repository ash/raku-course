---
title: Longitudo filae in Raku
---

{% include menu.html %}

Natura Unicode filarum facit quaedam levia paulo difficiliora. Vel, saltem, debes cogitare de ea tamquam de re minus directa. Accipe, exempli gratia, longitudinem filae. Estne numerus characterum, an est numerus byteorum? Vel quid si idem character diversimode in diversis filis decompositus est, estne adhuc unus character?

## Longitudo in characteribus

Ut longitudines filae in characteribus obtineas, utere _methodo_ `chars`:

```raku
my $str = '你好世界';
say $str.chars;
```

Dum de methodis postea loquemur, iam eas uti debemus. In Raku, potes methodos in fere omni obiecto vocare, inclusis filis et variabilibus scalaribus. Ut methodum vocares, utere puncto. Ita, hic videmus methodum vocatam in variabili quae filam continet: `$str.chars`.

Quattuor characteres sunt in hoc salutatione Sinensi 你好世界. Et `$str.chars` exacte `4` reddit.

## Longitudo in byteis

Ad referentiam, hoc modo longitudines filae in byteis obtines. Hoc casu, interest scire quae codificatio ad filam tenendam adhibetur:

```raku
my $str = '你好世界';
say $str.encode('UTF-8').bytes;
```

Hoc tempore, programma `12` imprimit. Nota quod duas methodi vocationes concatenatas in secunda linea hic habemus.

## Longitudo in punctis codicis

Ad plenitudinem, hic est alia utilis methodus quae etiam ad longitudines filarum pertinet: `codes`. Reddit numerum punctorum codicis in fila postquam normalizata est. In multis casibus, `codes` et `chars` idem reddunt. Tamen, in quibusdam raris casibus, cum, exempli gratia, 'impossibilem' characterem aedificas, cuius nullus singularis punctus codicis in toto spatio Unicode est, methodi diversos eventus dant.

```raku
say 'x̨'.chars;
say 'x̨'.codes;
```

Hic character, `x̨`, nullum punctum codicis dedicatum habet et solum ex duabus partibus construi potest: littera minuscula `x` et character combinans `0x0328`. Ita, adhuc unus character est sed duo puncta codicis. Ita, programma imprimit:

    1
    2

{% include nav.html %}