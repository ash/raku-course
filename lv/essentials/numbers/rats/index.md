---
title: Racionālie skaitļi Raku
---

{% include menu.html %}

Racionālie skaitļi ir unikāla Raku iezīme. `Rat` datu tips pārstāv šādus skaitļus.

Iekšēji racionālie skaitļi ir daļskaitļi ar divām veselu skaitļu daļām: skaitītāju un saucēju. Tādējādi jūs varat viegli attēlot skaitļus, piemēram, 1/3, nezaudējot precizitāti.

Ir daži veidi, kā programmā Raku pierakstīt `Rat` skaitli:

```raku
my $x = 1/2;
my $y = <2/3>;
```

Pamaniet, ka slīpsvītra šeit ir pieraksta daļa. Tā nav dalīšanas operators, tāpēc `1/2` nenozīmē, ka jūs dalāt 1 ar 2. Tomēr izdrukā racionālie skaitļi tiek parādīti kā decimāldaļskaitļi vai veseli skaitļi:

```raku
say 1/2; # 0.5
say 3/4; # 0.75
```

Rindiņas daļa pēc `#` simbola ir komentārs un to kompilators ignorē. Šādi komentāri tiks izmantoti kursā, lai parādītu programmas izvadi.

## Decimāldaļas forma

Ir svarīgi saprast, ka, kad jūs rakstāt skaitli decimāldaļas formā, piemēram, `0.5`, Raku tajā brīdī izveido `Rat` skaitli. Tas nav vesels skaitlis, bet tas nav arī peldošā punkta skaitlis (`float` vai `double` citās valodās). Tas joprojām ir racionāls skaitlis!

Apsveriet šādu piemēru:

```raku
say 0.1 + 0.2 - 0.3;
```

Ja programmēšanas valoda izmanto peldošā punkta aritmētiku šiem aprēķiniem, rezultāts nebūs vienāds ar 0. Vietne [0.30000000000000004.com](https://0.30000000000000004.com) sniedz izsmeļošu piemēru sarakstu, kur peldošā punkta aritmētika nedod gaidīto rezultātu.

Bet Raku izdrukā precīzu `0`. Tas notiek tāpēc, ka tas uztver skaitļus `0.1`, `0.2` un `0.3` kā racionālus skaitļus un iekšēji tos saglabā kā `1/10`, `2/10` un `3/10`. Palaidiet to no komandrindas, lai to apstiprinātu:

```console
$ raku -e 'say 0.1 + 0.2 - 0.3'
0
```

## Unikoda formas

Ir iespējams izmantot arī Unikoda rakstzīmes, kas pārstāv daļskaitļus, piemēram, `½` vai `¼` vai `¾`. Iespējams, ka ne vienmēr ir viegli to ievadīt ar tastatūru, bet šie daļskaitļi ir tieši tādas pašas vērtības kā to ASCII versijas, kas rakstītas kā daļskaitlis vai kā decimāldaļskaitlis:

`½` | `1/2` | `<1/2>` | `0.5`
`¼` | `1/4` | `<1/4>` | `0.25`
`¾` | `3/4` | `<3/4>` | `0.75`

Ar dažiem daļskaitļiem, piemēram, `1/3`, jums ir mazāk iespēju, `⅓` vai `<1/3>`, jo decimāldaļas formai būtu nepieciešams bezgalīgs ciparu skaits.

{% include nav.html %}