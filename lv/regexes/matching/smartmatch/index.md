---
title: Viedās saskaņošanas operators
translations_gpt:
---

{% include menu.html %}

Operators, kas piemēro regulāro izteiksmi virknei, ir gudrā sakritība `~~`:

```raku
say 'the cat sat' ~~ /cat/; # ｢cat｣
```

Raksturs, kas uzrakstīts starp slīpsvītrām, ir visizplatītākā forma, taču ir vēl divas, kas nozīmē to pašu un dažreiz ir skaidrākas:

```raku
say 'the cat sat' ~~ m/cat/;  # ｢cat｣
say 'the cat sat' ~~ rx/cat/; # ｢cat｣
```

Forma `m/.../` uzsver, ka veicat _piemeklēšanu_, un noder, kad sakritībai vēlaties pievienot iespējas (ar tām, sauktām par [_apstākļvārdiem_](/lv/regexes/adverbs), iepazīsieties vēlāk). Forma `rx/.../` izveido regulārās izteiksmes vērtību, to vēl nepiemeklējot.

Ļoti bieži jums rūp tikai tas, vai virkne sakrita, nevis kas tieši atrasts. Tā kā veiksmīga sakritība ir patiesa vērtība, bet neveiksmīga — aplama, rezultātu var izmantot tieši Būla kontekstā. Tīrākais veids, kā iegūt vienkāršu `True` vai `False`, ir funkcija `so`:

```raku
say so 'the cat sat' ~~ /cat/; # True
say so 'the cat sat' ~~ /dog/; # False
```

Tas padara regulāro izteiksmi par dabisku nosacījumu `if` konstruktam:

```raku
if 'the cat sat' ~~ /cat/ {
    say 'found it';   # found it
}
```

{% include nav.html %}
