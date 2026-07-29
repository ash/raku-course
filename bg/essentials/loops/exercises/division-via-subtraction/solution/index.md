---
title: 'Solution: Деление чрез изваждане'
---

{% include menu.html %}

Делението е повтарящо се изваждане. Програмата има цикъл `while`, който намалява `$a` със стойността на `$b` и го повтаря, докато текущата стойност на `$a` не е по-малка от `$b`. Променливата `$n` брои броя на итерациите и също така е резултатът, който ни трябва.

## Код

Ето цялата програма:

```raku
my $a = 175;
my $b = 25;

my $n = 0;
while $a >= $b {
    $a -= $b;
    $n++;
}

say $n;
```

🦋 Намерете програмата във файла [division-via-subtraction.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/loops/division-via-subtraction.raku).

## Резултат

Стартирайте програмата няколко пъти. Започнете с дадените стойности, които дават точно цяло число:

```console
$ raku exercises/loops/division-via-subtraction.raku
7
```

Също така опитайте, например, да промените `$b` на `20` и потвърдете, че резултатът е правилен:

```console
$ raku exercises/loops/division-via-subtraction.raku
8
```

{% include nav.html %}