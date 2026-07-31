---
title: 'Risinājums: Padariet datumu cilvēkam saprotamu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
grammar Date {
    token TOP   { <year> '-' <month> '-' <day> }
    token year  { \d ** 4 }
    token month { \d ** 2 }
    token day   { \d ** 2 }
}

class Humanise {
    method year($/)  { make $/.Int }
    method month($/) { make <January February March April May June
                             July August September October November December>[$/ - 1] }
    method day($/)   { make $/.Int }
    method TOP($/)   { make "{$<day>.made} {$<month>.made} {$<year>.made}" }
}

say Date.parse('2026-07-05', actions => Humanise.new).made;
```

🦋 Atrodiet programmu failā [humanise-a-date.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/humanise-a-date.raku).

## Izvade

```
5 July 2026
```

## Komentāri

1. Atšķirībā no vienkāršas aritmētiskas darbības marķieru metodes izveido **dažādu veidu** vērtības: `year` un `day` izveido veselus skaitļus, bet `month` izveido *virkni*, izmantojot savu skaitlisko vērtību kā indeksu mēnešu nosaukumu sarakstā. `$/ - 1` pārvērš divciparu sakritību skaitlī (`07` → `7`) un pabīda uz indeksu no nulles, tāpēc `month` ar vērtību `07` izveido `July`.

1. Metode `TOP` neapstrādāto tekstu nemaz vairs neaplūko. Tā tikai nolasa trīs vērtības, ko apakšmetodes jau izveidojušas — `$<day>.made`, `$<month>.made`, `$<year>.made` —, un interpolē tās galīgajā virknē. Nolasot `5` atpakaļ no `day`, par brīvu tiek atmesta arī vadošā nulle.

1. Šis ir ikdienišķais darbību klases uzdevums: vienreiz noparsēt strukturētu ievadi un tad ļaut katrai metodei pārvērst savu gabalu par to, kas vajadzīgs pārējai programmai.

{% include nav.html %}
