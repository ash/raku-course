---
title: Signaturae
translations_gpt:
---

{% include menu.html %}

In parte Elementorum [subprogrammata cum parametris positionalibus et nominatis definivisti eisque valores praedefinitos dedisti](/la/essentials/functions). Index parametrorum _signatura_ appellatur. Haec sectio duo alia addit quae signatura facere potest: parametrum ut optionalem notare, et quotlibet argumenta superflua colligere.

## Parametri optionales

Parametrus quem signum interrogationis sequitur _optionalis_ est: vocans eum omittere potest. Cum omittitur, parametrus indefinitus est, itaque subsidium per operatorem defined-or `//` praebere potes:

```raku
sub greet($name, $greeting?) {
    my $g = $greeting // 'Hello';
    say "$g, $name!";
}

greet('Anna');           # Hello, Anna!
greet('Anna', 'Hi');     # Hi, Anna!
```

Cum `greet` uno argumento vocatur, `$greeting` indefinitus est, itaque `//` ad `'Hello'` recurrit.

## Parametri sorbentes

Parametrus stella `*` notatus _sorbens_ est: omnia argumenta reliqua colligit. Ordo sorbens, `*@` scriptus, quotlibet argumenta positionalia in ordinem colligit:

```raku
sub count-them(*@items) {
    say @items.elems;
}

count-them(1, 2, 3, 4); # 4
count-them('a', 'b');   # 2
```

Parametros ordinarios cum sorbente coniungere potes. Parametri fixi primi implentur, et quidquid superest in ordinem sorbentem it:

```raku
sub titles($name, *@titles) {
    say "$name has {@titles.elems} title(s)";
}

titles('Anna', 'Dr', 'Prof'); # Anna has 2 title(s)
```

Eodem modo mappa sorbens, `*%` scripta, omnia argumenta nominata superflua in mappam colligit:

```raku
sub register($name, *%options) {
    say "$name: {%options.elems} option(s)";
    say "role is %options<role>";
}

register('Anna', role => 'admin', active => True);
```

Duo argumenta nominata claves mappae `%options` fiunt, itaque programma imprimit:

```
Anna: 2 option(s)
role is admin
```

{% include nav.html %}
