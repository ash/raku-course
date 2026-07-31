---
title: 'Solvo: Veraj kaj falsaj nombroj'
translations_gpt:
---

{% include menu.html %}

La plej rapida maniero esplori la demandon estas ĵeti plenmanon da kandidataj nombroj al la operatoro `?` samtempe kaj rigardi la rezultojn flank-al-flanke:

```raku
for -2, -0.5, -1/3, 0, 1/3, 0.5, 2 -> $n {
    say "$n -> {?$n}";
}
```

La eligo evidentigas la ŝablonon — ĉiu valoro presas `True` krom tiu en la mezo:

    -2 -> True
    -0.5 -> True
    -0.333333 -> True
    0 -> False
    0.333333 -> True
    0.5 -> True
    2 -> True

Do la signo kaj la grandeco tute ne gravas: nur nulo estas malvera. La sekva demando estas, ĉu tio validas por ĉiu numera tipo, ĉar `0`, `0.0` kaj `0e0` estas respektive `Int`, `Rat` kaj `Num`:

```raku
my Int $int-zero = 0;
say ?$int-zero; # False

my Rat $rat-zero = 0.0;
say ?$rat-zero; # False

my Num $num-zero = 0e0;
say ?$num-zero; # False
```

Kompreneble, nenio ŝanĝiĝas se vi provas unue nei la nombron:

```raku
my $int = 0;
say ?(-$int); # False
```

🦋 Vi povas trovi la plenan programon kun la supra ekzemplo en la dosiero [true-false-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/coercion/true-false-numbers.raku).

{% include nav.html %}
