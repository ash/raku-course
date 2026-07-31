---
title: Basi di Pod
translations_gpt:
---

{% include menu.html %}

La documentazione Pod risiede nel file sorgente, delimitata da righe che iniziano con `=`. Il modo più semplice per scrivere un blocco di documentazione è racchiuderlo tra `=begin pod` e `=end pod`:

```raku
=begin pod

=head1 My Module

This module does something useful.

=end pod
```

All'interno, le direttive descrivono la struttura:

* `=head1`, `=head2`, … — intestazioni a diversi livelli
* un paragrafo ordinario — semplicemente testo sulle proprie righe
* `=item` — un elemento in un elenco puntato

```raku
=begin pod

=head1 Features

=item Fast
=item Small
=item Simple

=end pod
```

La riga `=head1` è un'intestazione di primo livello; le tre righe `=item` formano un elenco. Il Pod si affianca al codice senza influenzarlo — il compilatore lo ignora durante l'esecuzione del programma, ma può estrarlo e renderizzarlo su richiesta, come mostra l'ultimo argomento.

{% include nav.html %}
