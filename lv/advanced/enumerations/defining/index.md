---
title: Uzskaitījuma definēšana
translations_gpt:
---

{% include menu.html %}

Uzskaitījumu deklarē ar atslēgvārdu `enum`, nosaukumu un konstanšu nosaukumu sarakstu:

```raku
enum Colour <red green blue>;
```

Tas izveido jaunu tipu `Colour` un trīs konstantes: `red`, `green` un `blue`. Konstantes var lietot tieši pēc nosaukuma:

```raku
say red;   # red
say green; # green
```

Aiz katra nosaukuma ir skaitlis, kas piešķirts automātiski no nulles tādā secībā, kādā tos uzskaitījāt — `red` ir `0`, `green` ir `1`, `blue` ir `2`. Tā kā vērtības ir sakārtotas, konstantes var salīdzināt:

```raku
say red < blue; # True
```

Mainīgajam var uzlikt uzskaitījuma tipu, lai tas pieņemtu tikai šīs konstantes:

```raku
my Colour $c = green;
say $c; # green
```

Ja nosaukums varētu sadurties ar ko citu jūsu programmā, uz konstanti vienmēr var atsaukties caur uzskaitījuma nosaukumu ar `::`:

```raku
say Colour::red; # red
```

Uzskaitījums dod saistītu konstanšu kopai nosaukumu un tipu, kas padara kodu, kurš tās izmanto, daudz skaidrāku nekā kaili skaitļi. Nākamais temats aplūko [skaitļus, kas stāv aiz nosaukumiem](/lv/advanced/enumerations/values-and-keys).

{% include nav.html %}
