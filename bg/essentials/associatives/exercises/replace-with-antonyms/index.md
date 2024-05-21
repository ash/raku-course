---
title: 'Упражнение: Замяна с антоними'
---

{% include menu.html %}

## Проблем

Създайте програма, която заменя всички думи от командния ред с техните антоними. Ако думата липсва в речника, не я променяйте и я отпечатайте такава, каквато е.

Използвайте твърдо кодиран хеш за съхранение на речника с антоними. За ваше удобство, ето подготвен списък с около 200 двойки, които можете директно да копирате и поставите във вашата програма: [dictionary.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/replace-with-antonyms/dictionary.raku). Всички двойки са съхранени в двете посоки, напр.:

```raku
my %dictionary =
    'above' => 'below',
    'absent' => 'present',
    # . . .
    'below' => 'above',
    # . . .
    'present' => 'absent',
    # . . .
;
```

Направете програмата възможно най-проста и отпечатвайте думите ред по ред.

## Пример

Стартирайте програмата и подайте няколко думи към нея. Уверете се, че поне някои от думите могат да бъдат намерени в речника.

```console
$ raku replace-with-antonyms.raku a quiet teacher wants to buy some salt
a
noisy
student
wants
to
sell
some
sugar
```

## Решение

✅ [Вижте решението](solution)

{% include nav.html %}