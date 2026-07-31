---
title: Subskriboj
translations_gpt:
---

{% include menu.html %}

En la parto Esencoj vi [difinis subrutinojn kun poziciaj kaj nomitaj parametroj kaj donis al ili defaŭltajn valorojn](/eo/essentials/functions). La listo de parametroj nomiĝas la _subskribo_. Ĉi tiu sekcio aldonas du pliajn aferojn, kiujn subskribo povas fari: marki parametron kiel nedevigan, kaj kolekti ajnan nombron da kromaj argumentoj.

## Nedevigaj parametroj

Parametro sekvata de demandosigno estas _nedeviga_: la vokanto rajtas ellasi ĝin. Kiam ĝi estas ellasita, la parametro estas nedifinita, do vi povas provizi retiriĝon per la operatoro `//`:

```raku
sub greet($name, $greeting?) {
    my $g = $greeting // 'Hello';
    say "$g, $name!";
}

greet('Anna');           # Hello, Anna!
greet('Anna', 'Hi');     # Hi, Anna!
```

Kiam `greet` estas vokata kun unu argumento, `$greeting` estas nedifinita, do `//` retiriĝas al `'Hello'`.

## Englutaj parametroj

Parametro markita per `*` estas _engluta_: ĝi kolektas ĉiujn restantajn argumentojn. Engluta tabelo, skribata `*@`, kolektas ajnan nombron da poziciaj argumentoj en tabelon:

```raku
sub count-them(*@items) {
    say @items.elems;
}

count-them(1, 2, 3, 4); # 4
count-them('a', 'b');   # 2
```

Vi povas kombini ordinarajn parametrojn kun engluta. La fiksitaj parametroj estas plenigitaj unue, kaj kio restas iras en la englutan tabelon:

```raku
sub titles($name, *@titles) {
    say "$name has {@titles.elems} title(s)";
}

titles('Anna', 'Dr', 'Prof'); # Anna has 2 title(s)
```

Same, engluta hako, skribata `*%`, kolektas ajnajn kromajn nomitajn argumentojn en hakon:

```raku
sub register($name, *%options) {
    say "$name: {%options.elems} option(s)";
    say "role is %options<role>";
}

register('Anna', role => 'admin', active => True);
```

La du nomitaj argumentoj finiĝas kiel ŝlosiloj de `%options`, do la programo presas:

```
Anna: 2 option(s)
role is admin
```

{% include nav.html %}
