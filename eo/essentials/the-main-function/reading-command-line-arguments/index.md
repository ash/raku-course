---
title: Legado de komando-liniaj argumentoj
---

{% include menu.html %}

La funkcio `MAIN` estas utila ne nur por eksplicite trovi la komencon de la programo, sed ankaŭ pro siaj argumentoj, kiuj ricevas la valorojn pasitajn en la komando-linio.

Estas du manieroj legi komando-liniajn argumentojn. Unu el ili estas per la [`@*ARGS` arrayo](/eo/essentials/positionals/args-array), kiun ni jam uzis. Ni nun ekzamenos la duan metodon.

Konsideru programon, kiu adicias du nombrojn.

```raku
sub MAIN($a, $b) {
    say $a + $b;
}
```

Vi povas ruli la programon en la sekva maniero. La programo presas la sumon de siaj du argumentoj:

```console
$ raku t.raku 123 45
168
```

Kiel ĉiu alia funkcio, la funkcio `MAIN` povas havi defaŭltajn valorojn por kelkaj (aŭ eĉ ĉiuj) el siaj argumentoj. Ekzemple:

```raku
sub MAIN($a, $b = 100) {
    say $a + $b;
}
```

Se la dua argumento ne estas provizita, la defaŭlta valoro estas uzata:

```console
$ raku t.raku 15
115
```

{% include nav.html %}