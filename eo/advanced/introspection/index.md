---
title: Introspekto de ujoj
translations_gpt:
---

{% include menu.html %}

_Introspekto_ signifas demandi valoron au ujon pri si mem — pri sia tipo, sia subesta ujo, kaj la mekanismo malantau ghi. Vi jam uzis unu introspektan ilon, `.^name`, por presi la tipon de valoro.

Raku ofertas malgrandan familion de tiaj iloj, skribitaj per majusklaj literoj: `WHAT`, `VAR`, `WHO`, kaj `HOW`. Ili estas foje nomataj _pseudo-metodoj_, char la kompililo donas al ili specialan signifon anstatau trakti ilin kiel ordinarajn metodojn. Chi tiu sekcio rigardas chiun el ili.

Kiel rememorigilo, jen `.^name` raportanta kiel la tipo de netipigita ujo shangighas kiam vi konservas malsamajn valorojn en ghi:

```raku
my $value;
say $value.^name; # Any

$value = 42;
say $value.^name; # Int

$value = 'forty-two';
say $value.^name; # Str
```

La ujo komencas kiel `Any` kaj poste raportas la tipon de kiu ajn valoro ghi aktuale enhavas.

{% include nav.html %}
