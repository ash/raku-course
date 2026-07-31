---
title: Masīvi
translations_gpt:
---

{% include menu.html %}

Masīvs ir sakārtots konteineris, kura elementi paši ir skalāri konteineri.

```raku
my @array = 100, 200, 300;
my @letters = 'a', 'b', 'c';
```

Sigils `@` norāda, ka šāds mainīgais uzvedas kā `Positional` objekts, tāpēc to var indeksēt, lai piekļūtu atsevišķiem elementiem:

```raku
say @array[1];   # 200
say @letters[2]; # c
```

Tā kā katrs elements ir skalārs konteineris, tam var piešķirt jaunu vērtību tieši tāpat kā parastam skalāram mainīgajam:

```raku
my @array = 100, 200, 300;
@array[0] = 10;
say @array; # [10 200 300]
```

Jūs varat arī piešķirt cita tipa vērtību, piemēram:

```raku
my @array = 100, 200, 300;
@array[0] = 'ten';
say @array; # [ten 200 300]
```

Tas ir tas, kas padara masīvus _maināmus_: katra vieta ir konteineris, kas var saņemt jaunu vērtību. Kā redzēsiet nākamajā tēmā, [saraksti](/lv/advanced/ordered-containers/lists) uzvedas citādi.

{% include nav.html %}
