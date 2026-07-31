---
title: Supply su richiesta
translations_gpt:
---

{% include menu.html %}

Un supply _su richiesta_ produce i propri valori daccapo per ogni presa. `Supply.from-list` è su richiesta: ogni presa riceve l'**intera** sequenza dall'inizio, indipendentemente da qualunque altra presa.

```raku
my $s = Supply.from-list(1, 2, 3);

my @a;
my @b;
$s.tap(-> $v { @a.push($v) });
$s.tap(-> $v { @b.push($v) });

say @a; # [1 2 3]
say @b; # [1 2 3]
```

Entrambe le prese hanno ricevuto tutti e tre i valori. Il supply non ha «consumato» i propri valori sulla prima presa; semplicemente è ripartito per la seconda. È il comportamento che vuoi quando un supply rappresenta una sorgente fissa — un elenco, un file, una query — che ogni abbonato dovrebbe vedere per intero.

Su richiesta è il comportamento predefinito per i supply costruiti da dati esistenti, perché ogni consumatore si aspetta naturalmente la sequenza completa. L'altro genere, il supply _dal vivo_, si comporta in modo piuttosto diverso, come mostra l'argomento successivo.

{% include nav.html %}
