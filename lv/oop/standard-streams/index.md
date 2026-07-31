---
title: Standarta plūsmas
translations_gpt:
---

{% include menu.html %}

Katrai programmai ir trīs _standarta plūsmas_, kas to savieno ar vidi: standarta izvade, standarta kļūdas un standarta ievade. Raku tās padara pieejamas caur trim speciāliem mainīgajiem: `$*OUT`, `$*ERR` un `$*IN`.

Standarta izvadē jūs rakstāt jau visu laiku: `say` un `print` sūta savu tekstu uz `$*OUT`.

```raku
say 'Hello'; # goes to standard output
```

Diagnostikas un kļūdu paziņojumi tiek turēti atsevišķi, standarta kļūdu plūsmā, lai tie nesajauktos ar programmas īsto izvadi. Rutīna `note` raksta tur:

```raku
note 'Something looks wrong'; # goes to standard error
```

Šī nošķiršana noder tāpēc, ka abas plūsmas var novirzīt neatkarīgi — piemēram, programmas izvadi var saglabāt failā, joprojām redzot tās kļūdu paziņojumus ekrānā.

Plūsmās var arī rakstīt tieši. Gan `$*OUT`, gan `$*ERR` ir _turis_ ar savām metodēm `say` un `print`:

```raku
$*OUT.say('a normal line');
$*ERR.say('a diagnostic line');
```

Trešā plūsma `$*IN` ir standarta ievade. Ar to netieši sastapāties caur `prompt`, kas no tās nolasa rindu. Pie ievades lasīšanas atgriezīsimies, kad aplūkosim [failu turus](/lv/oop/file-handles), jo `$*IN` ir turis gluži tāpat kā atvērts fails.

{% include nav.html %}
