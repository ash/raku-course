---
title: 'Solvo: Presu la averton'
---

{% include menu.html %}

## Kodo

Jen la solvo:

```raku
my $age = prompt 'What is your age? ';

if $age < 0 {
    note 'You entered a negative number!';
}
else {
    say "Your age is $age";
}
```

🦋 Trovu la programon en la dosiero [print-the-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/built-in-functions-for-printing/print-the-warning.raku).

## Eligo

Kelkaj eblaj kazoj:

```console
$ raku exercises/built-in-functions-for-printing/print-the-warning.raku 
What is your age? 20
Your age is 20

$ raku exercises/built-in-functions-for-printing/print-the-warning.raku 
What is your age? -1
You entered a negative number!
```

Por certigi ke la erarmesaĝo estas presita al `STDERR`, redirektu la eligon. La invito por enigi la aĝon ne aperos, sed vi ankoraŭ povas enigi numeron. La averto restas videbla.

```console
$ raku exercises/built-in-functions-for-printing/print-the-warning.raku > /dev/null
20

$ raku exercises/built-in-functions-for-printing/print-the-warning.raku > /dev/null 
-1
You entered a negative number!
```

{% include nav.html %}