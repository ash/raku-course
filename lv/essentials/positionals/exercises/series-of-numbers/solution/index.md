---
title: 'Risinājums: Skaitļu sērijas drukāšana'
---

{% include menu.html %}

Ir vairāk nekā viens veids, kā atrisināt doto problēmu.

## Kods 1

Pirmais risinājums ir vairāk Raku-stils un kompakts.

```raku
my $begin = prompt 'Begin: ';
my $end = prompt 'End: ';

.say for $begin .. $end;
```

🦋 Atrodiet programmu failā [series-of-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/series-of-numbers.raku).

## Kods 2

Otrs iespējamais risinājums var izmantot `loop` paziņojumu.

```raku
my $begin = prompt 'Begin: ';
my $end = prompt 'End: ';

loop (my $n = $begin; $n <= $end; $n++) {
    say $n;
}
```

🦋 Atrodiet programmu failā [series-of-numbers-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/series-of-numbers-loop.raku).

Kā redzat, pirmais variants ir ievērojami īsāks un izteiksmīgāks.

## Diskusija

Pirmajā programmas variantā tiek izmantota [postfix forma `for` ciklam](/lv/essentials/loops/postfix-for). Otrajā programmā ir izvēlēts `loop`.

## Izvade

Ievadiet divus skaitļus konsolē un palaidiet programmu. Abi varianti rada vienādu izvadi.

```console
$ raku exercises/positionals/series-of-numbers.raku
Begin: 15
End: 19
15
16
17
18
19
```

{% include nav.html %}