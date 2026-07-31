---
title: Vārdu robežas
translations_gpt:
---

{% include menu.html %}

`cat` piemeklēšana izdodas arī vārdā `category`, jo šie trīs burti tur patiešām ir. Bieži tas nav tas, ko vēlaties — jūs domājat veselu vārdu `cat`. To atrisina _vārda robežas_ enkurs.

* `<<` sakrīt vārda **kreisajā** malā (vārda sākumā)
* `>>` sakrīt vārda **labajā** malā (vārda beigās)

Ietiniet vārdu šajos enkuros, lai to piemeklētu tikai kā veselu vārdu:

```raku
say 'the cat sat' ~~ /<< cat >>/;    # ｢cat｣
say so 'category'  ~~ /<< cat >>/;   # False
```

Vārdā `category` tūlīt aiz `cat` vārda robežas nav, tāpēc noenkurotais raksturs neizdodas — tieši tā uzvedība, ko vēlējāmies.

Vārda robeža atrodas starp vārda rakstzīmi (`\w`) un ne-vārda rakstzīmi, tāpēc tā pati neko nepatērē; tāpat kā `^` un `$`, tā tikai apgalvo kaut ko par pozīciju.

Abus enkurus var rakstīt arī ar stūra pēdiņu rakstzīmēm `«` un `»`, ja tās jums patīk labāk. Tie uzvedas tieši tāpat kā `<<` un `>>`:

```raku
say 'the cat sat' ~~ /« cat »/;  # ｢cat｣
say so 'category'  ~~ /« cat »/;  # False
```

{% include nav.html %}
