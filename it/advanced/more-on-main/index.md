---
title: Approfondimento sulle subroutine MAIN
translations_gpt:
---

{% include menu.html %}

Nella parte Essenziali hai usato `MAIN` [per ricevere gli argomenti da riga di comando](/it/essentials/the-main-function/reading-command-line-arguments). Raku fa molto di piu per te riguardo a `MAIN` oltre al semplice passaggio dei valori.

## Il messaggio di utilizzo

Se gli argomenti sulla riga di comando non corrispondono alla firma di `MAIN`, Raku non esegue il corpo della funzione. Invece, stampa un _messaggio di utilizzo_ generato automaticamente che descrive come il programma dovrebbe essere invocato.

Prendi questo programma:

```raku
sub MAIN($name) {
    say "Hello, $name!";
}
```

Invocato correttamente, saluta la persona:

```console
$ raku hello.raku Anna
Hello, Anna!
```

Invocato senza argomenti, la firma non corrisponde, quindi Raku stampa il messaggio di utilizzo al posto del saluto:

```console
$ raku hello.raku
Usage:
  hello.raku <name>
```

Il messaggio viene costruito a partire dai nomi dei parametri, quindi dare loro nomi significativi rende il testo di aiuto utile senza alcuno sforzo aggiuntivo.

## Argomenti con nome

I parametri di `MAIN` possono essere sia con nome che posizionali. Un parametro con nome diventa un'opzione `--opzione=valore` sulla riga di comando, e un valore predefinito lo rende facoltativo:

```raku
sub MAIN(:$name = 'World') {
    say "Hello, $name!";
}
```

```console
$ raku hello.raku
Hello, World!

$ raku hello.raku --name=Raku
Hello, Raku!
```

{% include nav.html %}
