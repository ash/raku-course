---
title: 'Solutio: Factorialis cum multi-functionibus'
---

{% include menu.html %}

Hoc exercitium de factorialibus iterum est. Re vera, munus nobis permittit ut plures proprietates Raku illustrentur.

Cum factorialem computas incipiendo a dato numero et descendendo, necesse est desinere cum numerus fit 1. Cum multi-functionibus, hoc assequi potes extrahendo casum cum `$n == 1` ad separatam multi-functionem.

## Codex

Hic est solutio:

```raku
multi sub factorial(1)  { 1 }
multi sub factorial($n) { $n * factorial($n - 1) }

say factorial(@*ARGS[0].Int);
```

🦋 Invenias programmatum in archivo [factorial-with-multi-functions.raku](https://github.com/ash/raku-course/blob/master/exercises/more-on-functions/factorial-with-multi-functions.raku).

## Output

```console
$ raku exercises/more-on-functions/factorial-with-multi-functions.raku 5
120
```

## Commentarium

Nota quod argumentum input explicit convertitur ad integrum: `@*ARGS[0].Int`. Hoc est ne infinitum loop fiat cum numerus input est `1`. In hoc casu, typus parametri ad functionem `factorial` transmissus est [`IntStr`](/la/essentials/typed-variables/allomorphs), et prima multi-variant non potest vocationem capere. Contra, cum `factorial(2 - 1)` recursive vocatur, argumentum functionis est integer, quod facit ut prima variant vocari possit.

{% include nav.html %}