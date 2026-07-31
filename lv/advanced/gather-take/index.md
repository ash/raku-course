---
title: '`gather` un `take`'
translations_gpt:
---

{% include menu.html %}

Pāris `gather` un `take` ir elastīgs veids, kā uzbūvēt sarakstu. Kādu kodu ietinat blokā `gather`, un ikreiz, kad šis kods izsauc `take`, vērtība tiek pievienota sarakstam, ko `gather` izveido.

```raku
my @result = gather {
    take 1;
    take 2;
    take 3;
};

say @result; # [1 2 3]
```

Trīs `take` izsaukumi dod trīs vērtības, un `gather` tās savāc sarakstā, kas saglabāts `@result`.

Šī pāra īstais spēks parādās, kad `take` izsaukumi ir izkaisīti pa parastu vadības plūsmu, piemēram, ciklu ar nosacījumu. Sarakstā tad ir tikai tās vērtības, ko izvēlējāties paņemt:

```raku
my @evens = gather for 1..10 {
    take $_ if $_ %% 2;
};

say @evens; # [2 4 6 8 10]
```

Šeit cikls iet pāri skaitļiem no 1 līdz 10, taču tiek paņemti tikai pāra skaitļi, tāpēc `@evens` beigās satur `2, 4, 6, 8, 10`. (Operators `%%` pārbauda, vai skaitlis dalās bez atlikuma.)

Tieši šī nošķiršana padara `gather`/`take` tik ērtu: apkārtējais kods izlemj, _kad_ radīt vērtību, un `gather` klusi savāc visu, kas paņemts.

{% include nav.html %}
