---
title: 'Risinājums: e vērtība'
---

{% include menu.html %}

## Atruna

Raku valodā ir iebūvēta konstante `e`, kas sniedz tūlītēju atbildi uz uzdevumu. Zemāk parādītais risinājums ir paredzēts izglītībai.

## Kods

Uzdevuma formulā ir faktoriālis, un mums jau ir vismaz divi risinājumi, kā to aprēķināt (vairāk sekos). Zemāk esošā programma definē divas funkcijas: vienu faktoriāļa aprēķināšanai, otru daļējās summas aprēķināšanai saskaņā ar formulu.

Tā kā ir nepieciešams, lai funkciju varētu izsaukt bez argumentiem, šajā gadījumā tā veic iepriekš noteiktu iterāciju skaitu, mēs varam pievienot parametra [noklusējuma vērtību](/lv/essentials/functions/default-values): `sub e-approx($max = 100)`.

Kodā pamaniet līdzības, kā rezultātu vērtības tiek uzkrātas [postfix `for` ciklā](/lv/essentials/loops/postfix-for) pār [diapazonu](/lv/essentials/ranges).

Šeit ir risinājums:

```raku
sub factorial($n) {
    my $f = 1;
    $f *= $_ for 1..$n;

    return $f;
}

sub e-approx($max = 100) {
    my $e = 1;
    $e += 1 / factorial($_) for 1..$max;

    return $e;
}

say e-approx(10);
say e-approx();
```

🦋 Atrodiet programmu failā [the-value-of-e.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/the-value-of-e.raku).

## Izvade

Ar 10 un 100 iterācijām mēs iegūstam šādus rezultātus. Papildus izmēģiniet citas `$max` vērtības.

```console
$ raku exercises/functions/the-value-of-e.raku
2.7182818
2.718281828459045
```

{% include nav.html %}