---
title: Atentu la spacon
---

{% include menu.html %}

Uzi funkciojn en Raku estas plejparte intuicia kaj ne kaŭzas problemojn, sed vi devas esti avertita pri la sekva aspekto.

## TL;DR

Ne aldonu spacon inter la nomo de la funkcio kaj la parentezoj kun ĝiaj argumentoj. Sed uzu spacon post `for` kaj `if`.

## Longa rakonto

Prenu simplan funkcion:

```raku
sub f($x, $y) {
    return $x + $y;
}
```

Unue, rimarku la mankon de spacoj inter la nomo de la funkcio kaj la malfermaj parentezoj kiuj enhavas la parametrojn. Iuj kodstiloj en aliaj lingvoj povas postuli spacon tie. Raku estas bone kun tio, sed ĉi tio ne estas praktiko por sekvi:

```raku
sub f ($x, $y) {
    return $x + $y;
}
```

Sur la voka flanko, la manko de spaco estas grava. Se vi vokas la funkcion kaj preterlasas la parentezojn, tiam la spaco post la nomo de la funkcio estas neevitebla:

```raku
f 5, 6;
```

Sed se vi aldonas parentezojn, vi ne povas havi spacon antaŭ ili. Ĉi tio estas ĝusta voko:

```raku
f(5, 6);
```

Kaj ĉi tiu voko estas malĝusta:

```raku
f (5, 6);
```

Tia kodo kaŭzas escepton:

    Tro malmultaj poziciaj pasis; atendis 2 argumentojn sed ricevis 1
      sub f ĉe t.raku linio 1
      en bloko <unit> ĉe t.raku linio 5

Raku vidas la vokon kun spaco `f (5, 6)` kiel provon pasi unuopan argumenton `(5, 6)` al la funkcio. Vi povas facile kontroli la tipon de ĉi tiu argumento se vi reskribas la funkcion por akcepti nur unu argumenton:

```raku
sub f($param) {
    say $param.WHAT;
}

f (5, 6); # (List)
```

Do, voki `f (5, 6)` signifas ke ni pasas [liston](/eo/essentials/positionals/lists) al la funkcio. La listo kiel ununura ento.

## Kiam spaco estas bezonata

En iuj kazoj, la spacokaraktero estas bezonata. Tio okazas kiam vi uzas parentezojn kun unu el la ŝlosilvortoj, kiel `if` aŭ `for` aŭ `loop`. La sekva kodo estas malĝusta:

```raku
if(True != False) {
    say 'OK';
}
```

La erarmesaĝo klarigas kio estas malĝusta:

    ===PARDONU!===
    La vorto 'if' estas interpretita kiel 'if()' funkciovoko. Bonvolu uzi
    blankspacon anstataŭ parentezoj.
    ĉe /Users/ash/raku-course/t.raku:1
    ------> if⏏(True != False) {
    Neatendita bloko en infiksa pozicio (du terminoj en vico)
    ĉe /Users/ash/raku-course/t.raku:1
    ------> if(True != False)⏏ {

Kun la kazo de `if`, parentezoj tute ne estas postulataj, do la problemo ne havas ŝancon aperi se vi ne uzas ilin. Sed en iuj kazoj, kiel ekzemple kun `loop`, vi bezonas ilin, kaj la spaco fariĝas deviga:

```for
loop(my $c = 0; $c != 10; $c++) { say $c }
```

En ĉi tiu kodo, la sama afero okazas: `loop(...)` estas komprenata de la kompililo kiel funkciovoko. Aldonu spacon por solvi la problemon. Aŭ pli bone reskribu la fragmenton uzante `for`.

## Konkludo

La esenco: por eviti tiajn problemojn, ne aldonu spacon inter la nomo de la funkcio kaj la parentezoj kun la argumentoj de la funkcio kaj provu eviti parentezojn se tio eblas kun aliaj lingvokonstruoj kiel kontrolfluo.

{% include nav.html %}