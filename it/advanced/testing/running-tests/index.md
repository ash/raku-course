---
title: Eseguire i test
translations_gpt:
---

{% include menu.html %}

Un singolo file di test è semplicemente un programma Raku, quindi puoi eseguirlo direttamente:

```
raku t/01-basic.rakutest
```

Stampa il suo output TAP sullo schermo. Per più di uno o due file, ti serve un _test runner_ che esegua un'intera directory di test e riassuma i risultati. Il runner di Raku è `prove6`:

```
prove6 t/
```

Questo esegue ogni file di test sotto `t/` e riporta quanti file e test sono passati, con un unico risultato complessivo di superamento/fallimento alla fine — molto più facile da leggere rispetto al TAP grezzo di ciascun file.

Quando una distribuzione ha un `META6.json`, lo strumento per i moduli esegue i test per te:

```
zef test .
```

`zef test` trova la directory `t/`, esegue la suite e riporta il risultato — che è esattamente ciò che avviene automaticamente prima che una distribuzione venga installata. Quindi i test hanno una doppia funzione: li esegui durante lo sviluppo con `prove6`, e l'ecosistema li esegue per verificare una distribuzione prima che chiunque la installi.

> I file di test hanno estensione `.rakutest` (o `.t`) e sono convenzionalmente numerati, come in `t/01-basic.rakutest`.

{% include nav.html %}
