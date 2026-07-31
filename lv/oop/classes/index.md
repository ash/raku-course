---
title: Klases
translations_gpt:
---

{% include menu.html %}

Līdz šim datu tipi, ko lietojāt — skaitļi, virknes, masīvi un tā tālāk —, visi bija Raku iebūvēti. _Objektorientētā programmēšana_ ļauj definēt pašam savus tipus, ko sauc par _klasēm_, un radīt šo tipu vērtības, ko sauc par _objektiem_.

Klasi definē ar atslēgvārdu `class`, kam seko nosaukums un bloks:

```raku
class Dog {
}
```

Šī klase `Dog` pagaidām ir tukša, taču tā jau ir jauns tips. Lai radītu klases objektu — _instanci_ —, izsauciet uz klases nosaukuma metodi `new`:

```raku
class Dog {
}

my $rex = Dog.new;
say $rex; # Dog.new
```

Mainīgais `$rex` tagad satur `Dog` objektu. Katrs `new` izsaukums rada atsevišķu objektu:

```raku
my $rex = Dog.new;
my $fido = Dog.new;
```

`$rex` un `$fido` ir divi atsevišķi suņi, lai gan klasei vēl nav nekāda satura. Nākamajās sadaļās klasei dosiet savus datus (_atribūtus_) un savu uzvedību (_metodes_). Pirmais temats tuvāk aplūko atšķirību starp klasi un tās instancēm.

{% include nav.html %}
