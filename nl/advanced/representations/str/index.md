---
title: De `.Str`-methode
---

{% include menu.html %}

De `.Str`-methode geeft de **gewone string**-vorm van een waarde terug. Deze wordt aangeroepen wanneer een waarde in *stringcontext* wordt gebruikt: door `print` en `put`, door de `~` concatenatie-operator en door stringinterpolatie binnen dubbele aanhalingstekens.

```raku
say 42.Str;    # 42
my @a = 'alpha', 'beta', 'gamma';
say @a.Str;    # alpha beta gamma
```

Merk op dat de array **zonder de vierkante haken** terugkomt, met de elementen eenvoudig door spaties gescheiden -- dat is het zichtbare verschil met [`.gist`](../gist), dat ze wel behoudt. Vergelijk de twee naast elkaar:

```raku
my @data = 1, 2, 3;
say @data.gist; # [1 2 3]
say @data.Str;  # 1 2 3
```

Omdat interpolatie `.Str` gebruikt, wordt een array in een string op de gewone manier weergegeven:

```raku
my @data = 10, 20, 30;
say "data: @data[]"; # data: 10 20 30
```

{% include nav.html %}
