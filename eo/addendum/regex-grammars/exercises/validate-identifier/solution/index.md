---
title: 'Solvo: Validigu identigilojn'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
for <count total2 2fast my-var _hidden> -> $name {
    my $ok = $name ~~ / ^ <[A..Za..z_]> <[A..Za..z0..9_]>* $ /;

    say "$name: { $ok ?? 'valid' !! 'invalid' }";
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [validate-identifier.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/validate-identifier.raku).

## Eligo

```
count: valid
total2: valid
2fast: invalid
my-var: invalid
_hidden: valid
```

## Komentoj

1. La ankroj `^` kaj `$` devigas la ŝablonon kovri la *tutan* ĉenon, do unu sola
fremda signo kiel la streketo en `my-var` faras ĝin nevalida.

1. La unua signoklaso permesas literon aŭ substrekon; la dua, ripetata per `*`,
aldone permesas ciferojn — kongruante precize kun la klasika regulo pri identigiloj.

1. La duan klason oni povas ankaŭ skribi kiel `\w`, la enkonstruitan mallongigon por
vortsigno (litero, cifero aŭ substreko):

    ```raku
    my $ok = $name ~~ / ^ <[A..Za..z_]> \w* $ /;
    ```

    Unu diferenco konsciendas: `\w` en Raku estas Unikod-konscia, do nomo kiel
`café` ankaŭ trapasas — kio hazarde kongruas kun Raku mem, kie
`my $café = 1;` estas tute laŭleĝa. La plene skribita klaso
`<[A..Za..z0..9_]>` tenas la kontrolon strikte ASCII-a.

1. Estas tamen kaptilo: en Raku mem `my-var` estas *valida* identigilo!
Raku permesas streketon (aŭ apostrofon, kiel en `isn't`) ene de nomo, kondiĉe ke
ĝin sekvas litero — kaj tial subrutinoj kiel `is-prime` legiĝas tiel
nature. Por validigi identigilojn de *Raku*, permesu tiajn grupojn post la klasika
parto:

    ```raku
    for <count total2 2fast my-var _hidden> -> $name {
        my $ok = $name ~~ / ^ <[A..Za..z_]> \w* [ '-' <[A..Za..z]> \w* ]* $ /;

        say "$name: { $ok ?? 'valid' !! 'invalid' }";
    }
    ```

    Ĉiu krampita grupo `[ '-' <[A..Za..z]> \w* ]` akceptas streketon nur kiam
litero sekvas, do `my-var` nun estas raportata kiel valida, dum `2fast` — kaj
ĉenoj kiel `a-` aŭ `a-1` — ankoraŭ ne estas.

{% include nav.html %}
