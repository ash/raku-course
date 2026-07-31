---
title: Reducēšanas metaoperatori
translations_gpt:
---

{% include menu.html %}

Redukcijas metaoperators tiek rakstīts kā parasts operators, ievietots kvadrātiekavās, piemēram, `[+]` vai `[*]`. Tas paņem vērtību sarakstu un ievieto operatoru starp katru vērtību pāri, reducējot visu sarakstu līdz vienai vērtībai.

Piemēram, `[+]` saskaita visus saraksta elementus:

```raku
my @data = 3, 5, 7, 9, 11;
say [+] @data; # 35
```

Konstrukcija `[+] @data` ir ekvivalenta operatora pierakstam pilnā formā:

```raku
say 3 + 5 + 7 + 9 + 11; # 35
```

Jebkurš piemērots infiksa operators darbojas tāpat. Ar `[*]` jūs iegūstat saraksta reizinājumu, tāpēc, piemērojot to diapazonam `1..$n`, var ērti aprēķināt faktoriālu:

```raku
my $n = 5;
say [*] 1..$n; # 120
```

Šeit diapazons `1..$n` ģenerē skaitļus no 1 līdz 5, un `[*]` tos sareizina: `1 * 2 * 3 * 4 * 5`, kas ir _5!_.

Darbojas arī virkņu konkatenācija. Redukcija `[~]` savieno virkņu sarakstu vienā virknē:

```raku
my @strings = <neun hundert fünf und zwanzig>;
say [~] @strings; # neunhundertfünfundzwanzig
```

Arī salīdzināšanas operatorus var reducēt. `[<]` pārbauda, vai vērtības ir stingri augošā secībā:

```raku
say [<] 1, 2, 3; # True
```

## Trīsstūra redukcija

Ja iekavās ieliek atpakaļsvītru, iegūst _trīsstūra_ redukciju, kas saglabā visus starprezultātus, nevis tikai gala rezultātu:

```raku
say [\+] 1..5; # (1 3 6 10 15)
```

Katrs rezultāta elements ir daļēja summa: `1`, tad `1+2`, tad `1+2+3` un tā tālāk līdz visa saraksta summai.

{% include nav.html %}
