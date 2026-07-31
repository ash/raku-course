---
title: La parola chiave grammar
translations_gpt:
---

{% include menu.html %}

Una _grammatica_ raggruppa regex con nome sotto un unico nome, un po' come una classe raggruppa metodi. La dichiari con la parola chiave `grammar`:

```raku
grammar Greeting {
    token TOP  { 'Hello, ' <name> '!' }
    token name { \w+ }
}
```

Dentro la grammatica ogni schema con nome si scrive con `token` (un genere di regex che studierai in dettaglio fra poco). Un token, per convenzione chiamato `TOP`, è il punto di partenza: descrive il tutto. Qui `TOP` dice «il testo è `Hello, `, poi un nome, poi `!`», e `name` dice che aspetto ha un nome.

I token possono riferirsi l'uno all'altro per nome, esattamente come i [regex con nome](/it/regexes/what-is-a-grammar/named-regexes) dell'argomento precedente. `TOP` usa `<name>`, il che tiene leggibile la grammatica: ogni regola ha un compito chiaro.

Per far girare una grammatica su una stringa, chiama il suo metodo `.parse`:

```raku
my $m = Greeting.parse('Hello, Anna!');
say $m<name>; # ｢Anna｣
```

La sezione successiva guarda più da vicino `TOP` e `.parse`. Per ora l'idea da portarsi via è semplice: **una grammatica è una collezione con nome di regex con nome che insieme descrivono un intero pezzo di testo strutturato.**

{% include nav.html %}
