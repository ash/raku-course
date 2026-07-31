---
title: Analizzare con parse
translations_gpt:
---

{% include menu.html %}

Per far girare una grammatica, chiama il suo metodo `.parse` con la stringa da analizzare:

```raku
grammar Pair {
    token TOP   { <key> '=' <value> }
    token key   { \w+ }
    token value { \w+ }
}

my $m = Pair.parse('x=5');
say $m<key>;   # ｢x｣
say $m<value>; # ｢5｣
```

`.parse` restituisce un oggetto match quando la grammatica riconosce l'**intera** stringa, e `Nil` quando non lo fa. Poiché tutto l'input deve corrispondere, non servono le ancore `^` e `$`: `.parse` aggiunge quel requisito al posto tuo:

```raku
say Pair.parse('x=5').defined; # True
say Pair.parse('x=').defined;  # False
```

L'[oggetto match](/it/regexes/matching/match-object) funziona proprio come quelli che hai incontrato prima. Ogni token usato nella grammatica diventa una cattura con nome, quindi `$m<key>` e `$m<value>` danno le parti riconosciute. I token si annidano, quindi una grammatica costruisce un piccolo albero di corrispondenze — l'argomento di una sezione successiva.

{% include nav.html %}
