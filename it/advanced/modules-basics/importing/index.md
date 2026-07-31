---
title: Importazione
translations_gpt: Importazione
---

{% include menu.html %}

Esiste piu di un modo per portare un modulo in un programma. Le tre istruzioni `use`, `need` e `require` differiscono per _quando_ il modulo viene caricato e per _cosa_ rende disponibile.

## `use`

Hai gia incontrato `use`. Carica il modulo al momento della compilazione e importa i suoi nomi esportati, cosi possono essere chiamati direttamente:

```raku
use Greeting;
say hello('Anna'); # Hello, Anna!
```

## `need`

`need` carica anch'esso il modulo al momento della compilazione, ma _non_ importa i nomi esportati. Si raggiungono comunque le variabili `our` del modulo attraverso il nome del modulo:

```raku
need Greeting;
say $Greeting::version; # 1.0
```

Dopo `need Greeting`, un semplice `hello(...)` non verrebbe riconosciuto, perche nulla e stato importato — sono disponibili solo i nomi qualificati, come `$Greeting::version`.

## `require`

`require` carica il modulo a _tempo di esecuzione_ anziche al momento della compilazione. Questo e utile quando non si sa fino all'esecuzione del programma se un modulo sara necessario, per esempio quando il suo nome viene deciso dall'input dell'utente.

Poiche il caricamento avviene a tempo di esecuzione, nulla viene importato automaticamente. Elencando i simboli desiderati tra parentesi angolari dopo il nome, li si importa e possono essere chiamati direttamente:

```raku
require Greeting <&hello>;
say hello('Anna'); # Hello, Anna!
```

Per l'uso quotidiano, `use` e quello che serve; `need` e `require` sono li per i casi meno comuni.

{% include nav.html %}
