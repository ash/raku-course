---
title: 'Solution: Replace with antonyms'
---

{% include menu.html %}

To solve the task, the contents of the file [dictionary.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/dictionary.raku) is copied to the solution file [replace-with-antonyms.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/replace-with-antonyms.raku). After that, a loop over the input argments is trying to find the word in the dictionary, and if it can, it takes the antonym. If there is no such word in the dictionary, an original word is used.

## Code

The solution is below. The dictionary is shown only partially here.

```raku
my %dictionary =
    'above' => 'below',
    'absent' => 'present',
    'achieve' => 'fail',
    # . . .
    'wrong' => 'right',
    'young' => 'old'    
;

for @*ARGS -> $word {
    say %dictionary{$word} // $word;
}
```

🦋 Find the program in the file [replace-with-antonyms.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/replace-with-antonyms.raku).

## Output

```console
$ raku exercises/associatives/replace-with-antonyms.raku
```

## Comment

The `//` operator is the [defined-or operator](/raku-course/essentials/scalar-variables/defined-or-operator), which returns the first defined operand.

{% include nav.html %}
