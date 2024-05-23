---
title: Решение на 'Таблица за покупки'
---

{% include menu.html %}

## Код

Ето едно възможно решение:

```raku
my $chair-price = 20.57;
my $chairs = 4;
my $chairs-total = $chair-price * $chairs;

my $table-price = 50.18;
my $tables = 1;
my $tables-total = $table-price * $tables;

say "Item\tPrice\tN\tTotal";
say "Chairs\t\$$chair-price\t$chairs\t\$$chairs-total";
say "Tables\t\$$table-price\t$tables\t\$$tables-total";
```

Всички числа са твърдо кодирани и запазени в няколко променливи. Също така използваме оператора за умножение `*`, за да изчислим резултата. Ще научим повече за операторите в следващите секции на този курс, но на този етап конструкцията като `$chair-price * $chairs` не би трябвало да предизвиква въпроси.

Трите реда, които генерират изхода, отпечатват трите реда на таблицата, включително заглавието ѝ. Забележете как колоните са разделени с табулационни символи `\t`. В редовете с данни също виждаме избягал знак за долар: `\$`, както и различни променливи, които искаме да интерполираме.

🦋 Можете да намерите изходния код във файла [purchase-table.raku](https://github.com/ash/raku-course/blob/master/exercises/strings/purchase-table.raku).

## Изход

Стартирайте програмата и вижте как отпечатва таблицата:

```
$ raku exercises/strings/purchase-table.raku
Item    Price   N      Total
Chairs  $20.57  4      $82.28
Tables  $50.18  1      $50.18
```

## Коментари

Забелязахте ли тиретата в имената на променливите като `$chair-price` или `$tables-total`? Това е напълно приемлив начин за именуване на променливи в Raku.

Не се бъркайте от двата съседни символа за долар. Raku ги чете поотделно. Например, в подниз `\$$price`, първият символ за долар е избягал и следователно представлява самия себе си, докато вторият е част от името на променливата `$price`.

Всички низове са оградени в двойни кавички, за да позволят интерполация на променливите и специалните символи.

Нека се върнем към тази задача отново, след като се запознаем с масиви и хешове.

{% include nav.html %}