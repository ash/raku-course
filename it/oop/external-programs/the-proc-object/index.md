---
title: "L'oggetto Proc"
translations_gpt:
---

{% include menu.html %}

Ogni chiamata a `run` o `shell` restituisce un oggetto `Proc` — un piccolo verbale che descrive il programma eseguito e come è terminato. Gli argomenti precedenti hanno usato il suo handle `.out` per leggere l'output; il `Proc` porta con sé altro ancora.

La parte più utile è il **codice di uscita**. Un programma dice a chi lo ha lanciato se è riuscito, con un piccolo intero: `0` significa successo, e qualunque altro numero è un codice di fallimento a scelta del programma. `.exitcode` ti dà quel numero:

```raku
my $proc = run 'sh', '-c', 'exit 3';
say $proc.exitcode; # 3
```

Per la solita domanda sì/no — ha funzionato? — un `Proc` è semplicemente vero quando il codice di uscita è `0` e falso altrimenti, quindi puoi metterlo alla prova direttamente:

```raku
my $proc = run 'ls', '/', :out;
$proc.out.slurp(:close);
say $proc ?? 'ok' !! 'failed'; # ok
```

Un `Proc` ricorda anche il comando che ha lanciato, in `.command`:

```raku
my $proc = run 'echo', 'hi', :out;
$proc.out.slurp(:close);
say $proc.command; # (echo hi)
```

Una cosa a cui stare attenti: se un comando fallisce e tu semplicemente **ignori** il `Proc` restituito, Raku solleva un'eccezione invece di lasciar passare il fallimento inosservato:

```raku
run 'sh', '-c', 'exit 1';
# dies: The spawned command 'sh' exited unsuccessfully (exit code: 1, signal: 0)
```

Poiché un'uscita diversa da zero di solito significa che qualcosa è andato storto, un `Proc` fallito che viene buttato via solleva un'eccezione quando esce dal suo ambito. Ciò che scatena il tutto è lo *scartare* il risultato, non l'ignorarne il codice di uscita: basta conservare il `Proc` in una variabile per evitare l'eccezione, anche se non lo guardi mai più.

```raku
my $proc = run 'sh', '-c', 'exit 1'; # no error, even though it failed
# …and $proc is never used again
```

Quindi, se ti *aspetti* che un comando possa fallire, conserva il suo `Proc` e guarda poi `.exitcode` (o mettilo alla prova come booleano) quando vuoi sapere che cosa è successo.

{% include nav.html %}
