---
title: 'Risinājums: Divi whenever'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $deposits    = Supply.from-list(100, 50, 200);
my $withdrawals = Supply.from-list(30, 120);

my $balance = 0;

react {
    whenever $deposits    { $balance += $_ }
    whenever $withdrawals { $balance -= $_ }
}

say $balance;
```

🦋 Atrodiet programmu failā [two-whenevers.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/two-whenevers.raku).

## Izvade

```
200
```

## Komentāri

1. Abi `whenever` bloki vēro abas nosauktās supply un reaģē **atšķirīgi**: iemaksas tiek pieskaitītas, izmaksas atņemtas. Viens `react` bloks, divas straumes, divas dažādas reakcijas — tieši tāda ir jēga vienam `whenever` katram avotam.

1. `react` bloks beidzas tikai tad, kad pabeigtas ir abas supply, tāpēc atlikums pirms izdrukāšanas ir galīgs: `100 + 50 + 200 - 30 - 120` dod `200`. Tā kā saskaitīšana un atņemšana ir komutatīvas, abu straumju savijums rezultātu neietekmē.

1. Šeit abas supply savas vērtības piegādā acumirklī, viena straume pēc otras. Īstajā dzīvē bankas konta notikumi pienāk izklaidus laikā — iemaksa tagad, izmaksa stundu vēlāk —, un abas straumes savijas, kā tas redzams [Divu taimeru](/lv/paradigms/react-whenever/two-timers) demonstrējumā. Kods paliek tieši tāds pats: `react` bloks izpilda to `whenever` ķermeni, kas atbilst katram ienākošajam notikumam.

{% include nav.html %}
