---
title: Aggiungere a un file
translations_gpt:
---

{% include menu.html %}

Per impostazione predefinita `spurt` sostituisce ciò che c'era nel file. Per aggiungere invece in coda a un file esistente, passa l'argomento nominato `:append`:

```raku
spurt 'log.txt', "line1\n";
spurt 'log.txt', "line2\n", :append;

print slurp 'log.txt';
```

Il secondo `spurt` conserva il contenuto esistente e aggiunge dopo di esso la nuova riga, quindi il file finisce per avere entrambe le righe:

```
line1
line2
```

Senza `:append` la seconda chiamata avrebbe sovrascritto il file, lasciando solo `line2`. Aggiungere in coda è utile per cose come i file di log, dove ogni esecuzione di un programma si aggiunge a un registro che cresce invece di ricominciare da capo.

{% include nav.html %}
