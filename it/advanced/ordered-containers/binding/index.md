---
title: Binding con `:=`
translations_gpt:
---

{% include menu.html %}

Finora, ogni variabile che hai creato ha generato un nuovo contenitore, e l'assegnazione con `=` ha inserito un valore _dentro_ quel contenitore. Il binding, scritto con `:=`, è diverso: fa sì che un nome si riferisca a un contenitore _esistente_ invece di crearne uno nuovo.

Dopo il binding, i due nomi condividono lo stesso contenitore, quindi una modifica effettuata tramite uno dei due è visibile attraverso l'altro:

```raku
my $x = 10;
my $y := $x;

$x = 20;
say $y; # 20
```

Qui, `$y := $x` non copia il valore `10`. Fa sì che `$y` sia un altro nome per lo stesso identico contenitore di `$x`. Quando `$x` viene poi impostato a `20`, leggendo `$y` si ottiene `20`.

Confronta questo con l'assegnazione ordinaria, che copia il valore in un contenitore separato:

```raku
my $x = 10;
my $y = $x; # a plain copy

$x = 20;
say $y; # 10
```

Il binding funziona anche con gli array. Il seguente esempio fa di `@alias` un altro nome per `@data`:

```raku
my @data = 1, 2, 3;
my @alias := @data;

@alias[0] = 99;
say @data; # [99 2 3]
```

Un altro dettaglio: se fai il binding di un nome direttamente a un valore letterale, non c'è alcun contenitore dietro di esso, quindi il nome diventa di sola lettura:

```raku
my $pi := 3.14;
$pi = 3;
```

```
Cannot assign to an immutable value
  in block <unit> at t.raku line 2
```

{% include nav.html %}
