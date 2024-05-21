---
title: Nomi delle variabili
---

{% include menu.html %}

Prima di procedere oltre, dedichiamo un po' di tempo a un argomento interessante riguardante i nomi consentiti delle variabili. Finora abbiamo visto nomi semplici come `$name` o `$age`, che consistevano interamente di lettere minuscole dell'alfabeto inglese. Ma ci sono più possibilità.

## Sensibilità alle maiuscole

I nomi delle variabili (o _identificatori_) sono sensibili alle maiuscole. Ciò significa che tutti i nomi seguenti si riferiscono a contenitori scalari diversi:

```raku
$myname

$MyName

$myName

$MYNAME
```

Sta a te aderire a uno schema di denominazione, ma probabilmente puoi riservare i nomi tutti in maiuscolo per le costanti.

## Altri caratteri

Tra i caratteri ASCII, puoi usare cifre, il carattere di sottolineatura `_`, un trattino `-` e l'apostrofo `'`. Nota che il primo carattere dell'identificatore deve essere una lettera o una sottolineatura. Sia `-` che `'` devono essere seguiti da un carattere alfabetico. Ecco alcuni altri identificatori validi:

```raku
$___

$a'b'c

$my-name

$address2
```

Ancora una volta, sta a te scegliere i nomi, ma probabilmente non è una buona pratica scegliere deliberatamente nomi che sembrano criptici.

## Caratteri Unicode

La definizione di lettere e cifre è effettivamente estesa per includere tutti quei caratteri che sono considerati lettere e cifre decimali secondo le loro proprietà Unicode. Ad esempio, le seguenti variabili sono valide in Raku:

```raku
$привет

$駱駝道

$αβγ

$Δ۲ # dove ۲ è una cifra
```

{% include nav.html %}