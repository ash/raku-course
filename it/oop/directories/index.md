---
title: Lavorare con le directory
translations_gpt:
---

{% include menu.html %}

Per lavorare con il file system in sé — controllare che cosa esiste e creare directory — Raku usa gli _oggetti percorso_. Qualunque stringa può essere trasformata in uno di essi con il metodo `.IO`, e l'oggetto percorso risponde poi alle domande su quel percorso.

Le domande più comuni sono se un percorso esista e che genere di cosa sia:

```raku
spurt 'greeting.txt', 'hi';

say 'greeting.txt'.IO.e; # True  — does it exist?
say 'greeting.txt'.IO.f; # True  — is it a file?
say 'greeting.txt'.IO.d; # False — is it a directory?
```

`.e` verifica l'esistenza, `.f` verifica se si tratta di un file regolare e `.d` se si tratta di una directory.

Per creare una nuova directory, usa `mkdir`:

```raku
mkdir 'reports';
say 'reports'.IO.d; # True
```

L'argomento successivo mostra come elencare il contenuto di una directory.

{% include nav.html %}
