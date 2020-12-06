[Sum of an array](../)

# The solution

Here is the solution of the problem ‘[Sum of an array](../)‘ that uses a reduction operator.

## Code

```perl
my @data = 3, 5, 7, 9, 11;

say [+] @data;
```

You can find the full code in the file [sum-of-array.raku](https://github.com/ash/raku-course/blob/master/problems/sum-of-array/solution/sum-of-array.raku).

## Output

To see the output, run the program as shown below:

    $ raku sum-of-array.raku 
    35

## Discussion

In this program, we are using a reduction operator in the form of `[+]` with `+` as its central part. By definition of a reduction operator, the `+` operator is placed between all the elements of the source data, so the construction `[+] @data` is fully equivalent to the following wordy phrase:

    3 + 5 + 7 + 9 + 11

## Refresh your knowledge

* [Reduction metaoperator](/metaoperators/reduction-metaoperators)
