---
title: Il metodo `.Str`
---

{% include menu.html %}

Il metodo `.Str` restituisce la forma **stringa semplice** di un valore. Viene chiamato ogni volta che un valore è usato in *contesto stringa*: da `print` e `put`, dall'operatore di concatenazione `~` e dall'interpolazione di stringhe tra virgolette doppie.

```raku
say 42.Str;    # 42
my @a = 'alpha', 'beta', 'gamma';
say @a.Str;    # alpha beta gamma
```

Nota che l'array è stato restituito **senza le parentesi quadre**, con i suoi elementi semplicemente uniti da spazi — questa è la differenza visibile rispetto a [`.gist`](../gist), che le mantiene. Confronta i due fianco a fianco:

```raku
my @data = 1, 2, 3;
say @data.gist; # [1 2 3]
say @data.Str;  # 1 2 3
```

Poiché l'interpolazione usa `.Str`, un array inserito all'interno di una stringa viene mostrato nella forma semplice:

```raku
my @data = 10, 20, 30;
say "data: @data[]"; # data: 10 20 30
```

{% include nav.html %}
