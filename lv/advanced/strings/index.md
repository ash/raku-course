---
title: Virknes
---

{% include menu.html %}

Pamatu daļā jūs iemācījāties [kā veidot virknes](/lv/essentials/strings) — savienošanu, interpolēšanu un virknes garumu. Virknēm ir arī bagātīgs metožu klāsts. Šajā sadaļā apkopotas visnoderīgākās no tām. (Meklēšana ar [regulārajām izteiksmēm](/lv/regexes) ir atsevišķa, apjomīgāka tēma, kas tiek aplūkota savā daļā vēlāk.)

Trīs metodes maina virknes burtu reģistru:

```raku
say 'raku'.uc; # RAKU  — lielie burti
say 'RAKU'.lc; # raku  — mazie burti
say 'raku'.tc; # Raku  — virsraksta reģistrs (pirmais burts lielais)
```

Metode `flip` apgriež virknes rakstzīmes otrādi:

```raku
say 'Raku'.flip; # ukaR
```

Un operators `x` atkārto virkni norādīto reižu skaitu:

```raku
say 'ab' x 3; # ababab
```

Tālākās tēmas parāda, kā meklēt virknēs un kā tās sadalīt daļās un salikt atpakaļ kopā.

{% include nav.html %}
