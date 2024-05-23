---
title: String concatenation in Raku
---

{% include menu.html %}

Se vi havas du ĉenojn, vi povas kunigi ilin kaj akiri novan pli longan ĉenon. Tiu ago nomiĝas ĉenkonkatenado. En Raku, vi kunigas ĉenojn uzante—domaĝe—konkatenigan operatoron. Tiu operaciilo estas tildo: `~`. Por kunigi du ĉenojn, metu `~` inter ili:

```raku
say 'Hello, ' ~ 'World!';
```

Se niaj ĉenoj estas konservitaj en variabloj, ni povas 'konkatenigi variablojn', nu, fakte, kunigi la ĉenojn, kiujn tiuj variabloj konservas:

```raku
my $greeting = 'Hello, ';
my $who = 'World!';

say $greeting ~ $who;
```

Aŭ vi povas krei novan variablon uzante la kunigitan valoron:

```raku
my $greeting = 'Hello, ';
my $who = 'World!';
my $message = $greeting ~ $who;

say $message;
```

## Konkatenado kun asigno

Kiam vi bezonas ĝisdatigi la variablon kaj aldoni la novan ĉenon al ĝi, uzu la sekvan formon:

```raku
# Anstataŭ 
$str = $str ~ $another-str;

# uzu:
$str ~= $another-str;
```

{% include nav.html %}