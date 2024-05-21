---
title: Esecuzione dalla riga di comando
---

{% include menu.html %}

Salva il testo del programma in un file di testo, ad esempio, `hello.raku` e passa il percorso del file allo strumento da riga di comando `raku` (il carattere del dollaro indica il prompt della shell):

```console
$ raku hello.raku
```

Se il programma non contiene errori, verrà eseguito immediatamente e, se genera qualche output, vedrai il risultato nel terminale:

```console
$ raku hello.raku 
Hello, World!
```

Quando si lavora con sistemi basati su Unix, è possibile aggiungere uno shebang e rendere il file eseguibile:

```raku
#!/usr/bin/env raku

say 'Hello, World!';
```

I passaggi successivi sono i seguenti:

```console
$ chmod a+x hello.raku
$ ./hello.raku
Hello, World!
```

{% include nav.html %}