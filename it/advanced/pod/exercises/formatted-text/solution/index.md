---
title: 'Solution: Testo formattato'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione al compito.

## Codice

```raku
=begin pod

=head1 Greeting

Hello, B<world>!

=end pod
```

🦋 Il codice sorgente si trova nel file [formatted-text.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/pod/formatted-text.raku).

## Output

Esegui con `raku --doc`:

```
Greeting

Hello, world!
```

## Commenti

1. `B<world>` marca la parola in grassetto; nella renderizzazione in testo semplice appare come testo normale, ma i formati più ricchi lo mostrano in grassetto.

1. `raku --doc` renderizza il Pod senza eseguire alcun codice del programma.

1. Per vedere effettivamente il *grassetto*, renderizza in un formato che supporti lo stile. Installa un formattatore come `Pod::To::HTML` con `zef install Pod::To::HTML`, poi esegui `raku --doc=HTML formatted-text.raku`; la parola ora viene racchiusa in un elemento HTML `<b>`. L'output in testo semplice con `--doc`, al contrario, non ha modo di mostrare il grassetto una volta scritto su un file o una pipe.

{% include nav.html %}
