---
title: Paraksti
translations_gpt:
---

{% include menu.html %}

Pamatu dalas sadala par [apaksprogrammu definicijam ar pozicionaliem un nosauktajiem parametriem un noklusejuma vertibam](/lv/essentials/functions). Parametru sarakstu sauc par _signaturu_. Saja sadala ir aplukotas vel divas lietas, ko signatura var darit: atzime parametru ka neobligatu un savac jebkuru papildu argumentu skaitu.

## Neobligatie parametri

Parametrs, kam seko jautajuma zime, ir _neobligats_: izsaucejs var to izlaist. Kad tas ir izlaists, parametrs ir nedefinets, tapec var nodrosinat rezerves vertibu ar definets-vai operatoru `//`:

```raku
sub greet($name, $greeting?) {
    my $g = $greeting // 'Hello';
    say "$g, $name!";
}

greet('Anna');           # Hello, Anna!
greet('Anna', 'Hi');     # Hi, Anna!
```

Kad `greet` tiek izsaukts ar vienu argumentu, `$greeting` ir nedefinets, tapec `//` izmanto rezerves vertibu `'Hello'`.

## Uzsucosie parametri

Parametrs, kas atzimets ar `*`, ir _uzsucoss_ (slurpy): tas savac visus atlikusos argumentus. Uzsucoss masivs, kas rakstits ka `*@`, savac jebkuru skaitu pozicionalo argumentu masiva:

```raku
sub count-them(*@items) {
    say @items.elems;
}

count-them(1, 2, 3, 4); # 4
count-them('a', 'b');   # 2
```

Parastos parametrus var kombinat ar uzsucoso parametru. Vispirms tiek aizpilditi fiksatie parametri, un viss, kas paliek parri, nonak uzsucosaja masiva:

```raku
sub titles($name, *@titles) {
    say "$name has {@titles.elems} title(s)";
}

titles('Anna', 'Dr', 'Prof'); # Anna has 2 title(s)
```

Tada pasa veida uzsucoss hess, kas rakstits ka `*%`, savac visus papildu nosauktos argumentus hesa:

```raku
sub register($name, *%options) {
    say "$name: {%options.elems} option(s)";
    say "role is %options<role>";
}

register('Anna', role => 'admin', active => True);
```

Abi nosauktie argumenti nonaks ka `%options` atslegas, tapec programma izvada:

```
Anna: 2 option(s)
role is admin
```

{% include nav.html %}
