---
title: Datkalkulado
translations_gpt:
---

{% include menu.html %}

Datoj subtenas aritmetikon, kio faras multajn ĉiutagajn kalkulojn simplaj.

Aldoni entjeron al dato movas ĝin antaŭen je tiom da tagoj. La rezulto estas nova dato, kun la monato kaj la jaro aŭtomate ĝustigitaj:

```raku
say Date.new(2026, 6, 27) + 7; # 2026-07-04
```

Subtrahi unu daton de alia donas la nombron de tagoj inter ili:

```raku
say Date.new(2026, 7, 4) - Date.new(2026, 6, 27); # 7
```

Por pli grandaj paŝoj, la metodoj `later` kaj `earlier` akceptas nomitajn argumentojn kiel `:days`, `:months` aŭ `:years`:

```raku
say Date.new(2026, 6, 27).later(:days(10));    # 2026-07-07
say Date.new(2026, 6, 27).earlier(:months(2)); # 2026-04-27
```

Ĉi tiuj metodoj konservas la aritmetikon ĝusta trans monataj kaj jaraj limoj, do vi neniam devas zorgi pri tio, kiom da tagoj havas aparta monato.

{% include nav.html %}
