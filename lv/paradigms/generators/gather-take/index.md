---
title: gather un take
translations_gpt:
---

{% include menu.html %}

`gather` bloks savāc vērtības. Jebkurā vietā tā iekšienē — arī ciklos un tā izsauktās apakšprogrammās — `take` pievieno vērtību sarakstam, ko `gather` rada:

```raku
my @squares = gather {
    take $_ ** 2 for 1..3;
}

say @squares; # [1 4 9]
```

`take` izpildās vienreiz par katru skaitli `1, 2, 3`, dodot `1`, `4` un `9`. Viss `gather` bloks dod sarakstu ar visu paņemto.

`take` var parādīties zem jebkuras vadības plūsmas, un tas padara `gather` par ideālu veidu, kā uzbūvēt sarakstu ar nosacījumiem:

```raku
my @evens = gather {
    for 1..10 {
        take $_ if $_ %% 2;
    }
}

say @evens; # [2 4 6 8 10]
```

Šeit vērtība tiek paņemta tikai tad, kad `if` izdodas, tāpēc sarakstā nonāk vienīgi pāra skaitļi. Tas bieži vien ir skaidrāk nekā saraksta būvēšana ar rokām, izmantojot `push`, jo loģika lasās kā parasts cikls un `take` vienkārši atzīmē paturamās vērtības.

{% include nav.html %}
