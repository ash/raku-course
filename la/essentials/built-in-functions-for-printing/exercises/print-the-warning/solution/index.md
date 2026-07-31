---
title: 'Solutio: Print admonitionem'
---

{% include menu.html %}

## Codex

Hic est solutio:

```raku
my $aetas = prompt 'Quot annos habes? ';

if $aetas < 0 {
    note 'Numerum negativum inseruisti!';
}
else {
    say "Aetas tua est $aetas";
}
```

🦋 Invenias programmatum in fasciculo [print-the-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/built-in-functions-for-printing/print-the-warning.raku).

## Exitus

Paucae casus possibiles:

```console
$ raku exercises/built-in-functions-for-printing/print-the-warning.raku 
Quot annos habes? 20
Aetas tua est 20

$ raku exercises/built-in-functions-for-printing/print-the-warning.raku 
Quot annos habes? -1
Numerum negativum inseruisti!
```

Ut certum sit nuntium erroris ad `STDERR` imprimi, outputum redirige. Rogatio ad aetatem inserendam non apparebit, sed numerum adhuc inserere potes. Monitum visibile manet.

```console
$ raku exercises/built-in-functions-for-printing/print-the-warning.raku > /dev/null
20

$ raku exercises/built-in-functions-for-printing/print-the-warning.raku > /dev/null 
-1
Numerum negativum inseruisti!
```

{% include nav.html %}