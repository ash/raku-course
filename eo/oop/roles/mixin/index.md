---
title: Aldoni rolon al objekto
translations_gpt:
---

{% include menu.html %}

Rolo ne devas esti enbakita en klason. Vi ankaŭ povas doni unu al objekto, kiu jam ekzistas, per la operatoro `but`. Ĝi enmiksas la rolon en unu solan objekton je rultempo kaj redonas novan objekton, kiu ludas la rolon:

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

Nur `$loud` gajnis la rolon. La klaso `Greeter` kaj ĉiu alia objekto `Greeter` restas netuŝitaj, do `$quiet` ankoraŭ salutas laŭ la ordinara maniero. Kiam la rolo kaj la klaso ambaŭ difinas metodon de la sama nomo, la versio de la rolo venkas, kaj `callsame` vokas tiun, kiun ĝi superregis — ĉi tie la originalan `greet` el `Greeter`, kies rezulto poste estas majuskligita.

Objekto, en kiun rolo estas enmiksita, estas rekonata kiel faranta tiun rolon:

```raku
say $quiet ~~ Loud; # False
say $loud  ~~ Loud; # True
```

`but` lasas la originalan objekton tia, kia ĝi estis, kaj donas al vi novan. Se vi preferas ŝanĝi ekzistantan objekton surloke, uzu la operatoron `does` anstataŭe:

```raku
my $speaker = Greeter.new;
$speaker does Loud;
say $speaker.greet; # HELLO
```

Enmiksi rolojn en individuajn objektojn permesas al vi decidi, unu objekton post la alia, kiun kroman konduton ĝi prenu — sen difini apartan klason por ĉiu kombinaĵo.

{% include nav.html %}
