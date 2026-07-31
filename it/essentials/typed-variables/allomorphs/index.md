---
title: Allomorfi
---

{% include menu.html %}

Considera il seguente programma. Prima di eseguirlo, puoi dire quali valori di input lo romperebbero e a quale riga?

```raku
my $input = prompt 'Enter something: ';
my Int $i = $input;
my Str $s = $input;

say $i;
say $s;
```

Qui vengono create tre variabili scalari. Due di esse, `$i` e `$s`, sono variabili tipizzate. Ciò significa che `$i` può contenere solo interi e `$s` può contenere solo stringhe.

Il tipo di ritorno di `prompt` dipende dai caratteri che abbiamo digitato. Se la stringa di input può rappresentare un numero intero, il risultato sarà del tipo `IntStr`, che è _sia_ `Int` che `Str`, e quindi può essere assegnato sia a una variabile `Int` che a una variabile `Str`. Quindi, se inserisci, ad esempio, `1234`, il programma non si rompe.

```
$ raku allomorphs.raku
Enter something: 1234
1234
1234
```

Il tipo `IntStr` è un esempio del cosiddetto _allomorfo_ — un tipo di dato che combina due altri tipi. Ecco alcuni altri esempi.

Se inserisci una stringa che non può essere un numero intero, il programma si rompe nel momento in cui assegniamo `$input` a `$i`:

```
$ raku allomorphs.raku
Enter something: Hello, World!
Type check failed in assignment to $i; expected Int but got Str ("Hello, World!")
  in block <unit> at allomorphs.raku line 2
```

Nota che ottieni un errore anche se la stringa di input può essere convertita in un numero, ma non in un intero. Poiché non è possibile memorizzare un numero in virgola mobile o un numero razionale in un contenitore intero, Raku emetterà un'eccezione:

```
$ raku allomorphs.raku
Enter something: 3.14
Type check failed in assignment to $i; expected Int but got RatStr (RatStr.new(3.14, "3....)
  in block <unit> at allomorphs.raku line 2
```

Il secondo assegnamento, `$s = $input`, non si romperà mai poiché una stringa può accettare qualsiasi input.

🦋 Puoi trovare il codice sorgente di questo programma nel file [allomorphs.raku](https://github.com/ash/raku-course/blob/master/essentials/typed-variables/allomorphs/allomorphs.raku).

{% include nav.html %}