---
title: 'Tests: Unikode cipari un skaitļi'
translations_gpt:
---

{% include menu.html %}

Mēģiniet noskaidrot, kuri no šiem cipariem veido veselus skaitļus, ko Raku pieņem kā `Int` tipa vērtības.

{:.quiz}
1 | 3
1 | 12345
1 | ⓷ | Tas tiek uzskatīts par skaitli, nevis par atsevišķu ciparu.
0 | ⓵⓶⓷⓸⓹ | Tātad tos nevar šādi savienot, lai iegūtu `12345`.
1 | ❷
0 | ❸❹❺
1 | ㊷ | Viena Unikoda rakstzīme ar nosaukumu `CIRCLED NUMBER FOURTY TWO`.
0 | ⓸⓶ | Taču divi skaitļi blakus nav skaitlis.
1 | ㊄ | Aplītī ietverta ķīniešu 5, un tas ir skaitlis `CIRCLED IDEOGRAPH FIVE`.
0 | 五 | Lai gan tas nozīmē 5, rakstzīme nav ne cipars, ne skaitlis.
0 | 一二三四五

{% include quiz.html %}

## Komentāri

Par sākumpunktu varat ņemt šo programmu, lai paeksperimentētu un izpētītu šādu ciparu īpašības. Noņemiet komentāra zīmes rindām, lai redzētu, vai tās kompilējas.

```raku
my $x;
$x =  3;
say $x; say $x.WHAT;

$x =  12345;
$x =  ⓷;
# $x =  ⓵⓶⓷⓸⓹;

$x =  ❷;
# $x =  ❸❹❺;

$x =  ⒌;
# $x =  ⒊⒋⒌;

# $x =  ㊀㊁㊂㊃㊄;
$x =  ㊄;
say $x; say $x.WHAT;

# $x =  五;
# $x =  一二三四五;

$x = ㊷;
say $x;
```

🦋 Kodu var paņemt no GitHub: [unicode-digits.raku](https://github.com/ash/raku-course/blob/master/essentials/numbers/integers/quiz2/unicode-digits.raku).

{% include nav.html %}
