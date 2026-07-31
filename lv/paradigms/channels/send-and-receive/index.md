---
title: Sūtīšana un saņemšana
translations_gpt:
---

{% include menu.html %}

Kanālu izveido ar `Channel.new`. Vērtības tajā ieliek ar `.send` un izņem ar `.receive`:

```raku
my $c = Channel.new;
$c.send(1);
$c.send(2);
say $c.receive; # 1
say $c.receive; # 2
```

Kanāls ir **rinda**: vērtības iznāk tādā pašā secībā, kādā tās iegāja — pirmais iekšā, pirmais ārā. Tāpēc pirmais `.receive` atgriež `1`, vērtību, kas nosūtīta pirmā.

Kanāla jēga ir tā, ka sūtīt un saņemt ir droši no **dažādiem pavedieniem** vienlaikus. Ražotājs var turpināt sūtīt, kamēr patērētājs turpina saņemt, un Raku gādā, lai neviena vērtība nepazustu un nedubultotos:

```raku
my $c = Channel.new;
start {
    $c.send($_) for 1..3;
    $c.close;
}
say $c.receive; # 1
```

Šeit fona uzdevums sūta `1, 2, 3`; galvenā programma saņem. `.receive` gaida, ja kanāls uz mirkli ir tukšs, tāpēc patērētājs nekad neaizskrien ražotājam priekšā.

{% include nav.html %}
