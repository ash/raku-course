my $str = "ABC";
my $another-str = "def";
# Instead of 
$str = $str ~ $another-str;

# use:
# $str ~= $another-str;
# 
say $str;