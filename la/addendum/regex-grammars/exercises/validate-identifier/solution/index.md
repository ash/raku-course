---
title: 'Solutio: Identificatores proba'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
for <count total2 2fast my-var _hidden> -> $name {
    my $ok = $name ~~ / ^ <[A..Za..z_]> <[A..Za..z0..9_]>* $ /;

    say "$name: { $ok ?? 'valid' !! 'invalid' }";
}
```

🦋 Inveni codicem fontem in archivo [validate-identifier.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/validate-identifier.raku).

## Exitus

```
count: valid
total2: valid
2fast: invalid
my-var: invalid
_hidden: valid
```

## Commentarii

1. Ancorae `^` et `$` exemplar cogunt *totam* catenam tegere, itaque
unum signum errans ut lineola in `my-var` illud invalidum facit.

1. Prima classis signorum litteram vel lineolam infimam permittit; secunda, per
`*` repetita, cifras insuper permittit — regulae identificatoris classicae exacte congruens.

1. Secunda classis etiam ut `\w` scribi potest, compendium incorporatum pro signo
verbali (littera, cifra vel lineola infima):

    ```raku
    my $ok = $name ~~ / ^ <[A..Za..z_]> \w* $ /;
    ```

    Una differentia notanda: `\w` in Raku Unicode novit, itaque nomen ut
`café` quoque transit — quod forte Raku ipsi congruit, ubi
`my $café = 1;` prorsus legitimum est. Classis expresse scripta
`<[A..Za..z0..9_]>` probationem stricte ad ASCII servat.

1. Est tamen versura: in Raku ipso `my-var` identificator *validus* est!
Raku lineolam (vel apostrophum, ut in `isn't`) intra nomen permittit, dum
littera sequitur — quapropter subprogrammata ut `is-prime` tam naturaliter leguntur. Ut
identificatores *Raku* probes, permitte tales greges post partem
classicam:

    ```raku
    for <count total2 2fast my-var _hidden> -> $name {
        my $ok = $name ~~ / ^ <[A..Za..z_]> \w* [ '-' <[A..Za..z]> \w* ]* $ /;

        say "$name: { $ok ?? 'valid' !! 'invalid' }";
    }
    ```

    Unusquisque grex uncis inclusus `[ '-' <[A..Za..z]> \w* ]` lineolam solum tunc accipit cum
littera sequitur, itaque `my-var` nunc ut validus nuntiatur, dum `2fast` — et
catenae ut `a-` vel `a-1` — adhuc non sunt.

{% include nav.html %}
