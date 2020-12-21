#!/usr/bin/env raku

my $prefix = '/raku-course';
my $out-root = 'output';
my $in-root = 'content';

scan-dir($in-root);

sub scan-dir($root) {
    for dir($root) -> $path {
        if $path.d {
            scan-dir($path);
        }
        elsif $path.f {
            say $path.path;
        }
    }
}

# my @structure;
# read-dir($in-root, @structure);
# dd @structure;


# sub read-dir($root, @structure) {
#     say $root;
#     return unless "$root/index".IO.e;


#     my @nested;
#     for "$root/index".IO.lines -> $line {
#         if $line ~~ /^ '=' (\S+) / {
#             my $path = ~$/[0];

#             if "$root/$path".IO.e {
#                 read-dir("$root/$path", @nested);
#                 @nested.push: {
#                     path => "$root/$path"
#                 };
#             }
#         }
#     }

#     @structure.push: {
#         path => $root,
#         children => @nested,
#     };
# }
