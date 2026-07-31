---
title: Valori predefiniti
translations_gpt:
---

{% include menu.html %}

Quando una nuova variabile scalare viene creata senza un'assegnazione immediata, il contenitore contiene comunque un valore — il suo valore predefinito. Il valore predefinito esatto dipende dal tipo della variabile.

Il programma seguente non è il modo migliore di usare Raku, ma illustra il concetto:

```raku
my $int;
say $int + 5;
```

L'output contiene `5`, che potrebbe essere quello che vi aspettavate se avete supposto che il valore predefinito di `$int` sia `0`. Tuttavia, il programma stampa anche un avvertimento:

```
Use of uninitialized value $int of type Any in numeric context
  in block <unit> at t.raku line 2
5
```

Per eliminare questa incertezza, assegnate un valore esplicitamente:

```raku
my $int = 0;
say $int + 5; # 5
```

Oppure dichiarate un valore predefinito con il trait `is default`:

```raku
my $int is default(0);
say $int + 5; # 5
```

Il valore predefinito non è limitato a zero. Può essere qualsiasi valore che ritenete un buon candidato, per esempio:

```raku
my $int is default(1);
say $int + 5; # 6
```

{% include nav.html %}
