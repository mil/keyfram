# Keyfram: Advanced Usage Topics

## Map Hierarchy Flexibility
For convenience sake, **timings**, **selectors**, **properties** specifications as map keys are all interchangeable in terms of where they sit in an `$animation-map`'s hierarchy.

As such, from Keyfram's perspective, all the below formats are equivalent and valid:

```scss
$sptv-map: (
  'div': (background: (0ms: black, 500ms: purple, 1s: blue))
);
$stpv-map: (
  'div': (0ms: (background: black), 1s: (background: blue))
);
$tspv-map: (
  0ms: ('div': (background: black)), 1s: ('div': (background: blue))
);
```

## Selector Merging
Keyfram has knowledge of selector merging understanding. So for example if you write an animation such as:

```scss
$animation: (
  '.a': (0ms: (background: black)),
  '.a.b': (100ms: (background: blue))
);
```

Keyfram will understand that `.a.b` should inherit all animations applied to the `.a` selector.

It should be noted however this functionality isn't incredibly robust - here's a [link to the unit test](https://github.com/mil/kf-sass/blob/master/test/fn_util/_is-context-within-selector.spec.scss) covering this functionality. While many simple things like the above will work. I know currently a bug exists where using `nth-child` can't handle odd/even/mod numbers (for example `:nth-child(even)` won't apply to `:nth-child(2n)`) - it would be great to edge-case to the `_is-context-within-selector` utility function eventually to fix this.

## Should you use Node, Ruby, or Dart SASS?
Keyfram has been tested and is known to be fully-working and tests pass on Ruby Sass, Node Sass, Sass.js, and Dart Sass. If you find an issue, please report it. In terms of raw speed, I'd suggest using Dart as on more complex animations there may be anywhere from a 2-4x speed improvement. Also the Dart Sass implementation is soon to be the defacto reference implementation for Sass.

## Running the tests
There are quite a few unit tests written in the Sass true library covering most functionality and mixins. To run the full test suite:

```bash
npm run test
```

If you want to run the tests through the Jasmine test runner:
```bash
npm run jstest
```

## Generating a new single-file release
To generate a new single-file release use the script `generate_singlefile_dist`:
```bash
npm run generate_singlefile_dist
```

This will add (or overwrite) the artifact `dist/kf-$version` where version is determined by the version set in the project's `package.json`.
