---
title: Multi MAIN functions
---

{% include menu.html %}

Kiel ajna alia funkcio en Raku, la funkcio `MAIN` povas havi siajn `multi` variantojn. Ĝi permesas al la programo individue reagi al malsama nombro aŭ malsamaj tipoj de eniraj parametroj.

```raku
multi sub MAIN($a) {
    say 2 * $a;
}

multi sub MAIN($a, $b) {
    say $a + $b;
}
```

Ĉi tiu programo duobligas sian solan argumenton aŭ aldonas ĝin al la dua argumento se ĝi estas ĉeestanta:

```console
$ raku t.raku 21
42

$ raku t.raku 21 33
54
```

{% include nav.html %}