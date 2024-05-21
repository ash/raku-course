---
title: Вложени хешове
---

{% include menu.html %}

Създаването на вложени хешове е подобно на създаването на [вложени масиви](/bg/essentials/positionals/nested-arrays). Използвайте фигурни скоби, за да обгърнете вътрешните хешове.

```raku
my %people =
    John => {
        age => 20,
        city => 'Madrid'
    },
    Alla => {
        age => 21,
        city => 'Tokyo'
    };
```

Обърнете внимание, че запетаята в края е валиден синтактичен елемент:

```raku
my %people =
    John => {
        age => 20,
        city => 'Madrid',
    },
    Alla => {
        age => 21,
        city => 'Tokyo',
    };
```

Използването на запетая улеснява редактирането на структурата чрез копиране и поставяне на редовете.

За да получите елементите от вътрешните хешове, използвайте два ключа един след друг.

```raku
say %people<John><city>; # Madrid
say %people<Alla><city>; # Tokyo
```

{% include nav.html %}