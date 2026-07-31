---
title: Guasti morbidi
translations_gpt:
---

{% include menu.html %}

Sollevare un'eccezione con `die` ferma tutto immediatamente. A volte è troppo drastico: vuoi che una subroutine riferisca di non aver potuto produrre un risultato, ma lasci decidere al chiamante se ciò sia fatale. Per questo Raku ha i _fallimenti morbidi_, creati con `fail`.

Quando una subroutine chiama `fail`, non solleva nulla subito. Restituisce invece al chiamante un oggetto speciale `Failure`. Un `Failure` non è definito, quindi il chiamante può controllarlo con discrezione:

```raku
sub divide($a, $b) {
    fail 'cannot divide by zero' if $b == 0;
    return $a / $b;
}

say divide(10, 2);         # 5
say divide(10, 0).defined; # False
```

La chiamata riuscita restituisce `5`. La chiamata fallita restituisce un `Failure`, che riferisce `False` per `defined`, così il chiamante può mettere alla prova il risultato prima di usarlo.

Un `Failure` si dice _morbido_ perché si trasforma in un'eccezione vera e sollevata solo se provi a usarlo come valore senza controllarlo prima. Finché lo gestisci — per esempio mettendo alla prova `defined` — resta silenzioso. Questo permette a una subroutine di segnalare un problema senza costringere l'intero programma a fermarsi.

## Lo hai già visto

Questo stile differito di fallimento non è esclusivo di `fail`. Prima in questa parte hai incontrato la stessa idea due volte.

Una **divisione per zero** produce un valore in silenzio e solleva un'eccezione solo quando lo usi davvero:

```raku
my $x = 1 / 0;   # no error yet
say $x;           # throws only here, when the value is used
```

Un **programma esterno che fallisce** restituisce un `Proc` che solleva un'eccezione solo se lo scarti senza gestirlo — conservalo e ispezionalo, e resterà un valore silenzioso:

```raku
run 'sh', '-c', 'exit 1';   # the failing Proc is discarded, so this throws
```

In ciascun caso un problema non ferma il programma nel momento in cui accade: diventa un valore che puoi controllare, e sale al rango di eccezione sollevata solo quando lo usi senza controllo o lo ignori. L'argomento [Non ogni errore è immediato](/it/oop/try/deferred-errors) mostra i due casi fianco a fianco.

{% include nav.html %}
