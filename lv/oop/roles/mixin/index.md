---
title: Lomas pievienošana objektam
translations_gpt:
---

{% include menu.html %}

Lomai nav obligāti jābūt iecepta klasē. To var dot arī objektam, kas jau eksistē, izmantojot operatoru `but`. Tas izpildes laikā iemaisa lomu vienā objektā un atgriež jaunu objektu, kas šo lomu spēlē:

```raku
role Loud {
    method greet {
        callsame().uc;
    }
}

class Greeter {
    method greet {
        'Hello';
    }
}

my $quiet = Greeter.new;
my $loud  = Greeter.new but Loud;

say $quiet.greet; # Hello
say $loud.greet;  # HELLO
```

Lomu ieguva tikai `$loud`. Klase `Greeter` un visi pārējie `Greeter` objekti paliek neskarti, tāpēc `$quiet` joprojām sasveicinās parastajā veidā. Kad gan loma, gan klase definē vienāda nosaukuma metodi, uzvar lomas versija, un `callsame` izsauc to, kuru tā pārrakstīja, — šeit sākotnējo `greet` no `Greeter`, kura rezultāts tad tiek pārvērsts lielajos burtos.

Objekts, kurā iemaisīta loma, tiek atpazīts kā tāds, kas šo lomu dara:

```raku
say $quiet ~~ Loud; # False
say $loud  ~~ Loud; # True
```

`but` atstāj sākotnējo objektu tādu, kāds tas bija, un atdod jums jaunu. Ja labprātāk mainītu esošu objektu uz vietas, izmantojiet operatoru `does`:

```raku
my $speaker = Greeter.new;
$speaker does Loud;
say $speaker.greet; # HELLO
```

Lomu iemaisīšana atsevišķos objektos ļauj pa vienam objektam izlemt, kādu papildu uzvedību tas uzņemsies, — nedefinējot atsevišķu klasi katrai kombinācijai.

{% include nav.html %}
