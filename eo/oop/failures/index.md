---
title: Molaj misfunkcioj
translations_gpt:
---

{% include menu.html %}

Ĵeti escepton per `die` haltigas ĉion tuj. Foje tio estas tro drasta: vi volas, ke subrutino raportu, ke ĝi ne povis produkti rezulton, sed lasu la vokanton decidi, ĉu tio estas fatala. Por tio Raku havas _molajn misfunkciojn_, kreatajn per `fail`.

Kiam subrutino vokas `fail`, ĝi ne ĵetas tuj. Anstataŭe ĝi redonas specialan objekton `Failure` al la vokanto. `Failure` estas nedifinita, do la vokanto povas kviete kontroli ĝin:

```raku
sub divide($a, $b) {
    fail 'cannot divide by zero' if $b == 0;
    return $a / $b;
}

say divide(10, 2);         # 5
say divide(10, 0).defined; # False
```

La sukcesa voko redonas `5`. La malsukcesanta voko redonas `Failure`, kiu raportas `False` por `defined`, do la vokanto povas testi la rezulton antaŭ ol uzi ĝin.

`Failure` nomiĝas _mola_, ĉar ĝi fariĝas vera, ĵetita escepto nur, se vi provas uzi ĝin kiel valoron sen kontroli ĝin unue. Dum vi traktas ĝin — ekzemple testante `defined` — ĝi restas kvieta. Tio permesas al subrutino signali problemon sen devigi la tutan programon halti.

## Vi vidis tion antaŭe

Ĉi tiu prokrastita stilo de misfunkcio ne estas unika al `fail`. Pli frue en ĉi tiu parto vi renkontis la saman ideon dufoje.

**Divido per nulo** produktas valoron kviete kaj ĵetas nur, kiam vi efektive uzas ĝin:

```raku
my $x = 1 / 0;   # ankoraŭ neniu eraro
say $x;           # ĵetas nur ĉi tie, kiam la valoro estas uzata
```

**Malsukcesanta ekstera programo** redonas `Proc`, kiu ĵetas nur, se vi forĵetas ĝin netraktita — konservu ĝin kaj inspektu ĝin, kaj ĝi restas kvieta valoro:

```raku
run 'sh', '-c', 'exit 1';   # la malsukcesanta Proc estas forĵetita, do ĉi tio ĵetas
```

En ĉiu kazo problemo ne haltigas la programon en la momento, kiam ĝi okazas: ĝi fariĝas valoro, kiun vi povas kontroli, kaj ĝi eskalas al ĵetita escepto nur, kiam vi uzas ĝin nekontrolita aŭ ignoras ĝin. La temo [Ne ĉiu eraro estas tuja](/eo/oop/try/deferred-errors) montras ĉi tiujn du flank-al-flanke.

{% include nav.html %}
