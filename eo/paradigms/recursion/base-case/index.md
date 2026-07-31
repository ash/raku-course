---
title: La baza kazo
translations_gpt:
---

{% include menu.html %}

Ĉiu rekursia subprogramo bezonas _bazan kazon_: kondiĉon, sub kiu ĝi redonas respondon **sen** voki sin denove. Sen ĝi, la subprogramo vokus sin senfine.

En la faktorialo, la baza kazo estis «`$n` estas `1` aŭ malpli». Jen alia ekzemplo, nombranta malsupren ĝis nulo:

```raku
sub countdown($n) {
    return if $n < 1;   # baza kazo: haltu
    say $n;
    countdown($n - 1);  # rekursia paŝo
}

countdown(3);
```

La programo presas:

```
3
2
1
```

La unua linio estas la baza kazo: kiam `$n` falas sub `1`, la subprogramo tuj revenas kaj la ĉeno de vokoj finiĝas. La rekursia paŝo ĉiam moviĝas **al** la baza kazo, vokante `countdown` kun pli malgranda nombro.

Se vi forgesas la bazan kazon, aŭ la paŝoj neniam atingas ĝin, la rekursio neniam haltas kaj la programo fine malsukcesas. Ĝusta rekursia subprogramo ĉiam havas du aferojn: bazan kazon, kiu finas la rekursion, kaj paŝon, kiu alproksimigas ĉiun vokon al ĝi.

{% include nav.html %}
