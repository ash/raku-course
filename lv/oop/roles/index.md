---
title: Lomas
translations_gpt:
---

{% include menu.html %}

_Loma_ ir uzvedības (un dažkārt datu) kūlītis, ko var koplietot vairākas klases. Ja mantošana saka, ka klase _ir_ kāda cita paveids, tad loma apraksta to, ko klase _prot darīt_.

Lomu definējat ar atslēgvārdu `role`, gluži kā klasi, un klasei to dodat ar iezīmi `does`:

```raku
role Greet {
    method hello {
        'Hello from ' ~ self.name;
    }
}

class Person does Greet {
    has $.name;
}
```

Klasei `Person` tagad ir metode `hello` no lomas, it kā tā būtu uzrakstīta pašā klasē:

```raku
say Person.new(name => 'Anna').hello; # Hello from Anna
```

Klase, kas dara lomu, tiek atpazīta kā tāda, kam šī loma ir:

```raku
say Person.new(name => 'Anna') ~~ Greet; # True
```

Ievērojiet, ka lomas metode `hello` izmanto `self.name`, lai gan pašai lomai atribūta `name` nav. Tas ir labi: metode izpildās kā daļa no tās klases, kas lomu komponē, un šī klase nodrošina `name`. Nākamais temats parāda, ka klase var uzņemties vairāk nekā vienu lomu vienlaikus.

{% include nav.html %}
