---
title: Nombra, ĉena kaj Boolea kunteksto
---

{% include menu.html %}

Tri tre oftaj kuntekstoj petas valoron konduti kiel nombro, ĉeno aŭ bulea valoro. Ĉiu havas prefiksan operatoron, kiu trudas ĝin eksplicite:

* `+` — nombra kunteksto
* `~` — ĉena kunteksto
* `?` — bulea kunteksto

Aplikataj al tabelo, ili donas ĝian longon, ĝiajn elementojn kunigitajn per spacoj, kaj ĉu ĝi havas iujn elementojn:

```raku
my @a = 1, 2, 3;

say +@a; # 3
say ~@a; # 1 2 3
say ?@a; # True
```

Malplena tabelo estas `0` en nombra kunteksto kaj `False` en bulea kunteksto:

```raku
my @empty;
say +@empty; # 0
say ?@empty; # False
```

Vi ne ĉiam bezonas skribi ĉi tiujn operatorojn mane, ĉar la lingvo povas trudi la ĝustan kuntekston por vi. Aritmetiko metas siajn operandojn en nombran kuntekston, kunigo metas ilin en ĉenan kuntekston, kaj `if`, `while`, kaj `and`/`or` metas sian kondiĉon en bulean kuntekston:

```raku
my @a = 1, 2, 3;

say 10 + @a;              # 13, here @a is its length: 3
say 'items: ' ~ @a;       # items: 1 2 3
if @a { say 'not empty' } # not empty
```

Do `if @array { … }` funkcias ĝuste kiel vi esperus: nemalplena tabelo estas vera. La prefiksaj operatoroj estas la eksplicita maniero peti la samajn konvertojn.

En kombino kun postfiksa `if`, tio permesas krei vere esprimplenan kodon:

```raku
say "{+@a} items are there" if @a; # 3 items are there
```

{% include nav.html %}
