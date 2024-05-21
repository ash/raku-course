---
title: Използване на eslif
---

{% include menu.html %}

Досега научихме `if` и `else`. Ами ако искате да организирате верига от тестове? Има поне два начина да направите това в Raku (всъщност има дори повече).

Една от възможностите е да използвате верига от блокове `if`, `elsif` и `else`. Обърнете внимание на правописа на `elsif`. Това не е нито `elseif`, нито `else if`.

```raku
my $x = prompt 'Enter the number: ';
if $x > 100 {
    say "$x is bigger than 100.";
}
elsif $x > 50 {
    say "$x is bigger than 50.";
}
elsif $x > 25 {
    say "$x is bigger than 25.";
}
else {
    say "$x is 25 or smaller.";
}
```

В тази програма има три клона и три теста един след друг. Веднага щом едно от условията се окаже `True`, съответният блок код се изпълнява. Ако нито една проверка не е `True`, се изпълнява блокът `else`.

Ето няколко тестови изпълнения на програмата, които задействат всички блокове:

```console
$ raku t.raku
Enter the number: 120
120 is bigger than 100.

$ raku t.raku
Enter the number: 75      
75 is bigger than 50.

$ raku t.raku
Enter the number: 30
30 is bigger than 25.

$ raku t.raku
Enter the number: 10
10 is 25 or smaller.
```

Алтернативен начин е да използвате двойката `given` и `when`, която ще научим в бъдеще.

{% include nav.html %}