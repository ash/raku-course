---
title: Partem obiecto addere
translations_gpt:
---

{% include menu.html %}

Pars in classem cocta esse non debet. Unam etiam obiecto quod iam exsistit dare potes, operatore `but` utens. Partem in unum obiectum tempore exsecutionis miscet et novum obiectum reddit quod partem agit:

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

Solum `$loud` partem accepit. Classis `Greeter` et omne aliud obiectum `Greeter` intacta manent, itaque `$quiet` more solito adhuc salutat. Cum pars et classis utraque methodum eiusdem nominis definiunt, versio partis vincit, et `callsame` eam vocat quam superscripsit — hic originalem `greet` ex `Greeter`, cuius effectus deinde litteris maiusculis redditur.

Obiectum cui pars mixta est ut illam partem faciens agnoscitur:

```raku
say $quiet ~~ Loud; # False
say $loud  ~~ Loud; # True
```

`but` obiectum originale relinquit ut erat et novum tibi tradit. Si mavis obiectum exsistens in loco mutare, utere operatore `does` loco eius:

```raku
my $speaker = Greeter.new;
$speaker does Loud;
say $speaker.greet; # HELLO
```

Partes in singula obiecta miscere tibi permittit, obiectum post obiectum, decernere quam agendi rationem additiciam suscipere debeat — sine classe separata pro omni coniunctione definienda.

{% include nav.html %}
