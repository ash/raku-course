---
title: "Quiz — L'oggetto Proc"
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
my $proc = run 'sh', '-c', 'exit 2', :out;
$proc.out.slurp(:close);
say $proc.exitcode;
```

{:.quiz}
0 | 0
1 | 2
0 | True
0 | un errore

{% include quiz.html %}

<div class="extended-explanation">

`.exitcode` è l'intero restituito dal programma — qui alla shell è stato detto `exit 2`, quindi è `2`. Il programma non solleva eccezioni: il `Proc` fallito è conservato in `$proc` e ispezionato con `.exitcode`, e guardare il risultato conta come gestirlo. (Un'eccezione nascerebbe solo se un `Proc` fallito venisse scartato senza controllo.)

</div>

{% include nav.html %}
