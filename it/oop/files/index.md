---
title: Lavorare con i file
translations_gpt:
---

{% include menu.html %}

Il modo più semplice di lavorare con un file è leggerlo o scriverlo tutto in una volta.

La routine `spurt` scrive una stringa in un file, creando il file (o sostituendone il contenuto se esiste già):

```raku
spurt 'greeting.txt', "Hello, file!\n";
```

La routine `slurp` rilegge l'intero contenuto di un file in una stringa:

```raku
my $text = slurp 'greeting.txt';
print $text; # Hello, file!
```

Insieme, `spurt` e `slurp` ti permettono di salvare dati e ricaricarli con due chiamate brevi. (Qui si usa `print` invece di `say`, perché il testo termina già con un ritorno a capo.)

Queste operazioni su tutto il file sono ideali quando un file è abbastanza piccolo da stare comodamente in memoria. Per file più grandi, o quando vuoi elaborare un file riga per riga, si usa un [handle di file](/it/oop/file-handles), trattato alla fine di questa sezione. L'argomento successivo mostra come aggiungere a un file invece di sostituirlo.

{% include nav.html %}
