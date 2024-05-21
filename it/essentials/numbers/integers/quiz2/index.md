---
title: Quiz — Unicode digits and numbers
---

{% include menu.html %}

Prova a scoprire quali delle seguenti cifre formano interi che Raku accetta come valori di tipo `Int`.

{:.quiz}
1 | 3
1 | 12345
1 | ⓷ | Questo è considerato un numero, non una singola cifra.
0 | ⓵⓶⓷⓸⓹ | Quindi non puoi combinarli in questo modo per ottenere `12345`.
1 | ❷
0 | ❸❹❺
1 | ㊷ | Un singolo carattere Unicode chiamato `CIRCLED NUMBER FOURTY TWO`.
0 | ⓸⓶ | Ma i due numeri non sono un numero.
1 | ㊄ | 5 cinese cerchiato ed è un numero `CIRCLED IDEOGRAPH FIVE`.
0 | 五 | Anche se questo significa 5, il carattere non è né una cifra né un numero.
0 | 一二三四五

{% include quiz.html %}

## Commenti

Puoi prendere il seguente programma come punto di partenza per giocare ed esplorare le proprietà di tali cifre. Decommenta le righe per vedere se compila.

```raku
my $x;
$x =  3;
say $x; say $x.WHAT;

$x =  12345;
$x =  ⓷;
# $x =  ⓵⓶⓷⓸⓹;

$x =  ❷;
# $x =  ❸❹❺;

$x =  ⒌;
# $x =  ⒊⒋⒌;

# $x =  ㊀㊁㊂㊃㊄;
$x =  ㊄;
say $x; say $x.WHAT;

# $x =  五;
# $x =  一二三四五;

$x = ㊷;
say $x;
```

🦋 Prendi il codice da GitHub: [unicode-digits.raku](https://github.com/ash/raku-course/blob/master/essentials/numbers/integers/quiz2/unicode-digits.raku).

{% include nav.html %}