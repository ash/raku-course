---
title: Valoroj kaj ŝlosiloj
translations_gpt:
---

{% include menu.html %}

Ĉiu enumeracia konstanto portas kaj nomon kaj nombron. La metodo `.value` donas la nombron, kaj la metodo `.key` donas la nomon kiel ĉenon:

```raku
enum Colour <red green blue>;

say green.value; # 1
say green.key;   # green
```

Vi ne devas akcepti la aŭtomatan numeradon ekde nulo. Skribu la konstantojn kiel parojn por elekti la valorojn mem:

```raku
enum Day (Mon => 1, Tue => 2, Wed => 3, Thu => 4, Fri => 5);

say Tue.value; # 2
say Fri.value; # 5
```

Ĉi tie la labora semajno estas numerita ekde unu anstataŭ ekde nulo.

La enumeracia tipo mem povas listigi ĉiujn siajn konstantojn. La metodo `.enums` redonas mapon de ĉiu nomo al ĝia valoro:

```raku
enum Colour <red green blue>;

say Colour.enums;       # Map.new((blue => 2, green => 1, red => 0))
say Colour.enums.elems; # 3
```

Inter `.value`, `.key` kaj `.enums` vi povas libere moviĝi de konstanto al ĝia nombro, de nombro reen al datumoj, kaj tra la tuta aro — kio faras enumeraciojn utilaj por aferoj kiel menuoj, statoj kaj serĉtabeloj.

{% include nav.html %}
