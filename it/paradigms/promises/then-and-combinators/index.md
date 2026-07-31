---
title: Concatenare e combinare
translations_gpt:
---

{% include menu.html %}

Le promise diventano ancora più potenti quando le combini. Il bisogno più comune è aspettarne **parecchie** in una volta. `await` accetta un elenco di promise e restituisce i loro risultati in ordine:

```raku
my @jobs = (start { 1 }), (start { 2 }), (start { 3 });
say await @jobs;     # (1 2 3)
say [+] await @jobs; # 6
```

I tre lavori girano in modo concorrente; `await @jobs` li aspetta tutti e restituisce `(1, 2, 3)`. Poiché i risultati tornano nello stesso ordine delle promise, puoi ridurli come al solito.

Puoi anche concatenare del lavoro a una promise con `.then`, che esegue un blocco di seguito una volta che la promise è finita. Al suo interno, `.result` è il valore della promise originale:

```raku
my $p = start { 10 };
my $q = $p.then({ .result * 2 });
say await $q; # 20
```

`$q` è una nuova promise che raddoppia il risultato di `$p`. Attenderla dà `20`.

Il blocco non ha un parametro esplicito, quindi riceve la promise finita come variabile argomento `$_` — ed è per questo che un `.result` nudo funziona: in realtà è `$_.result`. Se preferisci dare un nome a quella promise, usa un blocco con la freccia:

```raku
my $q = $p.then(-> $prev { $prev.result * 2 });
```

Si comporta esattamente allo stesso modo; `$prev` è la promise originale `$p`, e `$prev.result` è il suo valore.

Con `start`, `await` e `.then` puoi descrivere intere pipeline di lavoro concorrente: lanciare molti compiti, combinarne i risultati e costruire nuovi compiti da quelli vecchi — senza mai toccare direttamente un thread.

{% include nav.html %}
