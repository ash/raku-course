---
title: Рішення до 'Таблиця покупок'
---

{% include menu.html %}

## Код

Ось можливе рішення:

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

Усі числа жорстко закодовані та збережені в кількох змінних. Ми також використовуємо оператор множення `*` для обчислення результату. Ми дізнаємося більше про оператори в наступних розділах цього курсу, але на даний момент конструкція, така як `$chair-price * $chairs`, не повинна викликати питань.

Три рядки, що генерують вихідні дані, друкують три рядки таблиці, включаючи її заголовок. Зверніть увагу, як стовпці розділені символами табуляції `\t`. У рядках даних ми також бачимо екранований символ долара: `\$`, а також різні змінні, які ми хочемо інтерполювати.

🦋 Ви можете знайти вихідний код у файлі [purchase-table.raku](https://github.com/ash/raku-course/blob/master/exercises/strings/purchase-table.raku).

## Вихідні дані

Запустіть програму та подивіться, як вона друкує таблицю:

```
$ raku exercises/strings/purchase-table.raku
Item    Price   N      Total
Chairs  $20.57  4      $82.28
Tables  $50.18  1      $50.18
```

## Коментарі

Чи помітили ви дефіси в назвах змінних, таких як `$chair-price` або `$tables-total`? Це цілком прийнятний спосіб називання змінних у Raku.

Не плутайте два суміжні символи долара. Raku читає їх окремо. Наприклад, у підрядку `\$$price`, перший знак долара екранований і, таким чином, представляє себе, тоді як другий є частиною імені змінної `$price`.

Усі рядки взяті в подвійні лапки, щоб дозволити інтерполяцію змінних і спеціальних символів.

Повернемося до цього завдання знову після того, як ознайомимося з масивами та хешами.

{% include nav.html %}