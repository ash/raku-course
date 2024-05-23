---
title: Escaping special characters in Raku strings
---

{% include menu.html %}

Imagu ke vi volas presi prezetiketon, kaj vi konservas kaj la nomon de la produkto kaj ĝian prezon en skalaj variabloj?

```raku
my $product = 'Electricity';
my $price = 3.14;
```

Kiel vi presas la etikedon se la prezo estas en dolaroj? La atendata rezulto estas: `Electricity costs $3.14`. Dolarsigno en duoble-cititaj ŝnuroj estas indikilo de variablo por esti interpolita. Por presi la `$` karakteron mem, vi devas eskapi ĝin:

```raku
say "$product costs \$$price";
```

Kompreneble, vi povas uzi ŝnuran kunigon kaj eviti eskapi `$`:

```raku
say $product ~ ' costs $' ~ $price;
```

Ĉi tiu varianto presas ekzakte la saman ŝnuron, sed interpolado aspektas pli natura kaj pli facile legebla. Notu, ke la `$` karaktero nek estis interpolita nek eskapita en unuoble-citita ŝnuro: `' costs $'`. Tio estas la ĉefa diferenco. Specialaj karakteroj en unuoblaj citiloj aperas kiel ili estas.

Jen kelkaj pliaj specialaj karakteroj kiuj havas specialan signifon en duoble-cititaj ŝnuroj:

`\$` | Dolarsigno
`\n` | Nova linio
`\r` | Karet-retorno
`\t` | Horizontala tabo
`\"` | Duobla citilo
`\\` | Reenstreko

La maniero kiel vi citas la ŝnuron difinas kiel Raku traktas specialajn karakterojn. Konsideru ĉi tiujn du ekzemplojn:

```raku
say 'One\nTwo';
say "Three\nFour";
```

Se vi rulas ĉi tiun programon, vi vidos ke la unua ŝnuro aperas kiel estas en unu linio. La dua ŝnuro estis dividita en du pecojn:

    One\nTwo
    Three
    Four

En duoblaj citiloj, speciala sekvenco `\n` estis traktita kiel nova linio karaktero, dum en ŝnuro en unuoblaj citiloj ĝi estis regula sekvenco de du karakteroj: `\` kaj `n`.

Estas interesa escepto por `'` kaj `\`. En unuoblaj citiloj, vi povas eskapi unuoblan citilon per prefikso kun alia `\`:

```raku
say '\''; # '
```

Reenstreko ankaŭ devas esti eskapita se unuobla citilo sekvas ĝin:

```raku
say 'a\b\c\\'; # a\b\c\
```

{% include nav.html %}