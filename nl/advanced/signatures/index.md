---
title: Signaturen
translations_gpt:
---

{% include menu.html %}

In het onderdeel Essentials heb je [subroutines gedefinieerd met positionele en benoemde parameters en hun standaardwaarden ingesteld](/nl/essentials/functions). De lijst van parameters wordt de _signatuur_ genoemd. In dit onderdeel worden twee extra mogelijkheden van signaturen behandeld: een parameter als optioneel markeren, en een willekeurig aantal extra argumenten verzamelen.

## Optionele parameters

Een parameter gevolgd door een vraagteken is _optioneel_: de aanroeper mag hem weglaten. Wanneer hij wordt weggelaten, is de parameter ongedefinieerd, dus kun je een terugvalwaarde opgeven met de defined-or-operator `//`:

```raku
sub greet($name, $greeting?) {
    my $g = $greeting // 'Hello';
    say "$g, $name!";
}

greet('Anna');           # Hello, Anna!
greet('Anna', 'Hi');     # Hi, Anna!
```

Wanneer `greet` met een argument wordt aangeroepen, is `$greeting` ongedefinieerd, dus valt `//` terug op `'Hello'`.

## Slurpy parameters

Een parameter gemarkeerd met een `*` is _slurpy_: hij verzamelt alle overige argumenten. Een slurpy array, geschreven als `*@`, verzamelt een willekeurig aantal positionele argumenten in een array:

```raku
sub count-them(*@items) {
    say @items.elems;
}

count-them(1, 2, 3, 4); # 4
count-them('a', 'b');   # 2
```

Je kunt gewone parameters combineren met een slurpy parameter. De vaste parameters worden eerst ingevuld, en wat overblijft gaat naar de slurpy array:

```raku
sub titles($name, *@titles) {
    say "$name has {@titles.elems} title(s)";
}

titles('Anna', 'Dr', 'Prof'); # Anna has 2 title(s)
```

Op dezelfde manier verzamelt een slurpy hash, geschreven als `*%`, alle extra benoemde argumenten in een hash:

```raku
sub register($name, *%options) {
    say "$name: {%options.elems} option(s)";
    say "role is %options<role>";
}

register('Anna', role => 'admin', active => True);
```

De twee benoemde argumenten komen terecht als sleutels van `%options`, dus het programma drukt af:

```
Anna: 2 option(s)
role is admin
```

{% include nav.html %}
