---
title: Citējot virkņu masīvus
---

{% include menu.html %}

Virkņu masīviem, kuros vienumi ir īsas virknes bez atstarpēm, Raku piedāvā ērtu sintaksi to inicializēšanai.

```raku
my @digits = <zero one two three four five six seven eight nine>;
```

Jūs varat izvēlēties pievienot papildu atstarpes ap leņķa iekavām vai nē. Kompilators pieņem abas iespējas.

```raku
my @digits = < zero one two three four five six seven eight nine >;
```

Abas konstrukcijas ir līdzvērtīgas vienkāršākai variantai:

```raku
my @digits = 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine';
```

%%tipblock
## Masīvs vs Saraksts

Pamaniet, ka iepriekšējos piemēros citāts `< . . . >` izveido `List`, nevis `Array`. To varat apstiprināt, izsaucot `WHAT` metodi:

```raku
say <a b c>.WHAT; # (List)
```

Tomēr, kad to piešķirat masīvam, jūs iegūstat masīvu ar saraksta elementiem.

```raku
my @a = <a b c>;
say @a.WHAT; # (Array)
```

%%/tipblock

{% include nav.html %}