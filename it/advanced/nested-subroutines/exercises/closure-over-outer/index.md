---
title: Chiusura sull'esterno
translations_gpt: Italian
---

{% include menu.html %}

## Problema

Una subroutine annidata e una *closure*: puo vedere le variabili della subroutine che la contiene. Scrivi una subroutine `greet($name)` che definisca un helper annidato `message` che **non** accetta argomenti. L'helper restituisce `"Hello, $name!"`, leggendo `$name` direttamente dalla `greet` che la racchiude. All'interno di `greet`, stampa cio che `message` restituisce e chiama `greet('Anna')`.

## Esempio

Il programma stampa:

```
Hello, Anna!
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
