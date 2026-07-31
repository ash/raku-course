---
title: Vidita antaŭe?
---

{% include menu.html %}

## Problemo

Kreu programon kiu komencas buklon kun la jenaj agoj:

1. Petu enigi vorton.
2. Se la vorto jam estis vidita unufoje, presu `Seen!`.
3. Se la vorto estis vidita pli ol unufoje, presu `Seen 2 times!`, ktp.
3. Ripetu la buklon.

## Ekzemplo

Ekzemplo de interago kun la programo:

```console
$ raku seen-before.raku
Word: I
Word: never
Word: saw
Word: a
Word: saw
Seen!
Word: that
Word: saw
Seen 2 times!
True
Word: as
Word: that
Seen!
Word: saw
Seen 3 times!
True
Word: sawed
Word: ^C
```

Por ĉesigi la programon, premu `Ctrl+C`.

## Solvo

✅ [Vidu la solvon](solvo)

{% include nav.html %}