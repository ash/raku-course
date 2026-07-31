---
title: 'Solution: Argomenti nominati slurpy'
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
sub describe($name, *%opts) {
    my $details = %opts.sort.map({ "{.key}={.value}" }).join(', ');
    "$name: $details";
}

say describe('Anna', colour => 'red', size => 5);
```

🦋 Puoi trovare il codice sorgente nel file [slurpy-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/slurpy-hash.raku).

## Output

```
Anna: colour=red, size=5
```

## Commenti

1. Il parametro posizionale fisso `$name` viene riempito per primo, e lo slurpy `*%opts` raccoglie poi ogni argomento nominato rimanente in un hash.

1. `%opts.sort` ordina le coppie per chiave, in modo che l'output sia deterministico: `colour` viene prima di `size`. Il `.map` trasforma ogni coppia in una stringa `key=value` con `.key` e `.value`, e `.join(', ')` le unisce insieme.

1. La stringa finale interpola `$name` e il `$details` assemblato, producendo `Anna: colour=red, size=5`.

{% include nav.html %}
