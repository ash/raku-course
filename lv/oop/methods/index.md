---
title: Metodes
translations_gpt:
---

{% include menu.html %}

Atribūti dod objektam datus; _metodes_ dod tam uzvedību. Metode ir apakšprogramma, kas pieder klasei un tiek izsaukta uz objekta. To deklarē ar atslēgvārdu `method`:

```raku
class Dog {
    has $.name;

    method bark {
        return $.name ~ ' says Woof!';
    }
}
```

Metodi uz objekta izsauc ar punktu, gluži tāpat kā piekļuves metodi:

```raku
my $rex = Dog.new(name => 'Rex');
say $rex.bark; # Rex says Woof!
```

Metodes iekšienē objekts, uz kura metode tika izsaukta, ir pieejams kā `self`. Atribūti tiek sasniegti caur to piekļuves metodēm, ko raksta `$.name`, `$.age` un tā tālāk. Tās darbojas arī interpolētu virkņu iekšienē:

```raku
class Dog {
    has $.name;

    method greet {
        "Hello, my name is $.name";
    }
}

say Dog.new(name => 'Rex').greet; # Hello, my name is Rex
```

Nākamie temati aplūko privātus atribūtus (tagad, kad mums ir metodes, ar ko tos izmantot), metodes ar parametriem un metodes, kas izsauc citas metodes.

{% include nav.html %}
