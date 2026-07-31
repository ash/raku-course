---
title: 'Solutio: Vexillum lineae mandati'
translations_gpt: true
---

{% include menu.html %}

Ecce solutio possibilis huius muneris.

## Codex

```raku
sub MAIN(Bool :$shout = False) {
    say $shout ?? 'HELLO' !! 'hello';
}
```

🦋 Codicem fontem in fasciculo [boolean-flag.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/boolean-flag.raku) invenire potes.

## Exitus

```console
$ raku boolean-flag.raku
hello

$ raku boolean-flag.raku --shout
HELLO
```

## Commentarii

1. Parametrus nominatus `Bool` vexillum fit: tradendo `--shout` `$shout` ad `True` ponit, dum omittendo valorem praefinitum `False` relinquit.

1. Operatio ternaria tunc `HELLO` vel `hello` correspondenter imprimit. Dissimilis optioni `--name=value`, vexillum nullum valorem accipit — ipsa praesentia eius est quod interest.

{% include nav.html %}
