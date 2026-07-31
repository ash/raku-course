---
title: Slinkas un bezgalīgas secības
translations_gpt:
---

{% include menu.html %}

Virknei nav obligāti jāaprēķina visas savas vērtības uzreiz. Raku virknes ir _slinkas_: katra vērtība tiek radīta tikai tad, kad tā patiešām vajadzīga. Tas ļauj aprakstīt virkni, kurai vispār nav gala.

Lai uzrakstītu bezgalīgu virkni, izmantojiet `Inf` kā beigu punktu. Ielieciet virkni iekavās, jo `...` saistās vaļīgāk nekā `=`:

```raku
my $naturals = (1 ... Inf);
```

Bez iekavām `my $naturals = 1 ... Inf` mainīgajam piešķirtu tikai `1` un pēc tam būvētu virkni pašu par sevi — un bezgalīgas virknes izrēķināšana bez rezultāta programmu iekārtu.

Pagaidām nekas nav aprēķināts. Virkne izdos vērtības tikai tad, kad tās prasīsiet. Metode `head` paņem pirmās dažas:

```raku
say (1 ... Inf).head(5); # (1 2 3 4 5)
```

Lai gan virkne ir bezgalīga, tiek ģenerēti tikai pirmie pieci skaitļi. Bez slinkuma programma, kas mēģinātu uzbūvēt visu bezgalīgo virkni, nekad nebeigtu darbu.

Galīgai virknei metode `tail` tā vietā paņem vērtības no beigām:

```raku
say (1 ... 100).tail(3); # (98 99 100)
```

Tieši slinkums ļauj nošķirt virknes _aprakstu_ no lēmuma par to, cik daudz no tās izmantot.

{% include nav.html %}
