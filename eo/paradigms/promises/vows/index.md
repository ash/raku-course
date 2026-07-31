---
title: Ĵuroj (Vow) 🆕
translations_gpt:
---

{% include menu.html %}

Kiam vi mem vokas `$p.keep(...)`, ĉiu, kiu tenas `$p`, povus decidi ĝin.
Foje vi volas la malon: la kodo, kiu *produktas* la rezulton, estu la sola
afero rajtigita decidi la promeson, dum ĉiuj aliaj rajtu nur atendi ĝin.
Tiu apartigo estas **ĵuro**.

`Promise.new` donas al vi promeson; voki `.vow` sur ĝi transdonas `Vow` — la solan
rajton plenumi aŭ rompi tiun promeson. De tiam la promeso estas destinita esti
nurlega: ĝi estas decidata tra la ĵuro. La kutima formo estas produktanto, kiu tenas
la ĵuron privata kaj redonas nur la promeson:

```raku
sub after($seconds) {
    my $p = Promise.new;
    my $v = $p.vow;                       # prenu la decid-rajton
    start {
        sleep $seconds;
        $v.keep("done after $seconds s"); # decidu ĝin tra la ĵuro
    }
    return $p;                            # vokantoj ricevas nur la legflankon
}

my $job = after(0.2);
say $job.status;   # Planned
say await $job;    # done after 0.2 s
```

Preni la ĵuron faras la promeson vere nurlega: de tiu momento `$p.keep` kaj
`$p.break` estas rifuzataj, ĉar la ĵuro nun posedas la solan rajton decidi ĝin.

```raku
my $p = Promise.new;
my $v = $p.vow;

$p.keep(1); # mortas: Access denied to keep/break this Promise; already vowed
```

Do la vokanto povas `await`-i la promeson, ĉenigi `.then` al ĝi aŭ kontroli ĝian `.status`,
sed ĝi ne povas decidi ĝin — nur la tenanto de la ĵuro povas. Tiel bibliotekoj transformas
revok- kaj event-bazitajn API-ojn en ordinarajn promesojn: krei promeson, teni ĝian
ĵuron kaj plenumi ĝin el ene de la revoko, kiam la evento finfine alvenas.

Ĉi tio estas ankaŭ precize tio, kion `start` faras por vi malantaŭ la kulisoj — ĝi faras
promeson, tenas la ĵuron por si mem kaj decidas la promeson per la valoro de la bloko (aŭ
rompas ĝin, se la bloko mortas). Fari la promeson kaj ĝian ĵuron mane simple ebligas al vi
fari la samon, kiam la rezulto ne venas el unu sola bloko da kodo.

{% include nav.html %}
