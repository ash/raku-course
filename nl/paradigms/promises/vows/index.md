---
title: Geloften
translations_gpt:
---

{% include menu.html %}

Wanneer je zelf `$p.keep(...)` aanroept, zou iedereen die `$p` bezit haar kunnen afhandelen.
Soms wil je het tegenovergestelde: de code die het resultaat *produceert* zou als enige
de promise mogen afhandelen, terwijl alle anderen er alleen op mogen wachten.
Die scheiding is een **gelofte** (vow).

`Promise.new` geeft je een promise; er `.vow` op aanroepen overhandigt een `Vow` — het enige
recht om die promise te vervullen of te verbreken. Vanaf dat moment is de promise bedoeld als
alleen-lezen: ze wordt via de gelofte afgehandeld. De gebruikelijke vorm is een producent die de
gelofte privé houdt en alleen de promise teruggeeft:

```raku
sub after($seconds) {
    my $p = Promise.new;
    my $v = $p.vow;                       # take the settle-right
    start {
        sleep $seconds;
        $v.keep("done after $seconds s"); # settle it through the vow
    }
    return $p;                            # callers get only the read side
}

my $job = after(0.2);
say $job.status;   # Planned
say await $job;    # done after 0.2 s
```

De gelofte nemen maakt de promise werkelijk alleen-lezen: vanaf dat moment worden `$p.keep` en
`$p.break` geweigerd, omdat de gelofte nu het enige recht bezit om haar af te handelen.

```raku
my $p = Promise.new;
my $v = $p.vow;

$p.keep(1); # dies: Access denied to keep/break this Promise; already vowed
```

De aanroeper kan de promise dus `await`-en, er `.then` aan rijgen of haar `.status` controleren,
maar hij kan haar niet afhandelen — alleen de houder van de gelofte kan dat. Zo veranderen bibliotheken
API's die op callbacks en gebeurtenissen gebaseerd zijn in gewone promises: maak een promise, houd haar
gelofte, en vervul haar vanuit de callback wanneer de gebeurtenis eindelijk komt.

Precies dat doet `start` ook achter de schermen voor je — het maakt een
promise, houdt de gelofte voor zichzelf, en handelt de promise af met de waarde van het blok (of
verbreekt haar als het blok sterft). De promise en haar gelofte met de hand maken laat je eenvoudigweg
hetzelfde doen wanneer het resultaat niet uit één enkel blok code komt.

{% include nav.html %}
