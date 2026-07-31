---
title: Enumerationem definire
translations_gpt:
---

{% include menu.html %}

Enumerationem declara verbo `enum`, nomine, et indice nominum constantium:

```raku
enum Colour <red green blue>;
```

Hoc novum typum, `Colour`, et tres constantes creat: `red`, `green`, et `blue`. Constantes directe nomine uti potes:

```raku
say red;   # red
say green; # green
```

Post unumquodque nomen numerus latet, automatice ab zero assignatus ordine quo ea enumeravisti — `red` est `0`, `green` est `1`, `blue` est `2`. Quia valores ordinati sunt, constantes comparare potes:

```raku
say red < blue; # True
```

Variabilis typo enumerationis insigniri potest, ut solas illas constantes accipiat:

```raku
my Colour $c = green;
say $c; # green
```

Si nomen cum alio in programmate tuo confligere possit, semper per nomen enumerationis cum `::` constantem nominare potes:

```raku
say Colour::red; # red
```

Enumeratio constantibus cognatis nomen et typum dat, quod codicem qui eis utitur multo clariorem reddit quam nudos numeros. Proximum argumentum [numeros post nomina latentes](/la/advanced/enumerations/values-and-keys) spectat.

{% include nav.html %}
