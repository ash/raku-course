---
title: 'Solution: Преглед на резултата от `prompt` — Стрингове'
---

{% include menu.html %}

## Код

Ето цялата програма, която върши работата и отпечатва както въведения низ, така и неговия тип.

```raku
my $name = prompt 'Как се казваш? ';
say $name;
say $name.WHAT;
```

🦋 Можете да намерите изходния код във файла [prompt-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/typed-variables/prompt-strings.raku).

## Тестови изпълнения

Стартирайте програмата няколко пъти и въведете различни имена. Програмата повтаря въведеното и също така съобщава, че променливата съдържа низ, с други думи, обект от тип `Str`.

```console
$ raku exercises/data-types/prompt-strings.raku
Как се казваш? Андрей
Андрей
(Str)
```

Сега стартирайте програмата отново, въведете няколко интервала вместо име и натиснете Enter.

```console
$ raku exercises/data-types/prompt-strings.raku
Как се казваш?    

(Str)
```

Не виждаме изхода, но виждаме, че типът на променливата все още е `Str`.

{% include nav.html %}