/**
 * Check whether a string starts with banana
 */
exports.startsWithBanana = function(str) {
    if (/^banana/.test(str)){
      return true;
    } else {
      return false;
    }
};

/**
 * Check whether a string ends with banana
 */
exports.endsWithBanana = function(str) {
  if (/banana$/.test(str)){
    return true;
  } else {
    return false;
  }
};

/**
 * Check whether a string is either banana, or bananas
 */
exports.isBananas = function(str) {
  if (/^bananas?$/.test(str)){
    return true;
  } else {
    return false;
  }
};

/**
 * Check whether a string is banana with an optionally lengthened final
 * vowel sound (bananaaaaaaaaaaaaaaa)
 */
exports.isBananaaa = function(str) {
  if (/^banan(a)+$/.test(str)){
    return true;
  } else {
    return false;
  }
};

/**
 * Check whether a string is banana with optional additional nas (banananana)
 */
exports.isBanananana = function(str) {
  if (/^bana(na)+$/.test(str)){
    return true;
  } else {
    return false;
  }
};

/**
 * Check whether a string is banana, but allow other alphabetical starting
 * characters (zanana, lanana, etc).
 */
exports.isAlphanana = function(str) {
  if (/^[a-z]anana$/.test(str)){
    return true;
  } else {
    return false;
  }
};

/**
 * Check whether a string is a sequence of the word banana, separated by
 * whitespace.  No starting or trailing whitespace is allowed.
 */
exports.isBananaSplit = function(str) {
  if (/^banana(((\s)+banana)+)?$/.test(str)){
    return true;
  } else {
    return false;
  }
};


// console.log('line 82: '+ isBananaSplit('banana'));
// console.log('line 82: '+ isBananaSplit('banana banana'));
// console.log('line 82: '+ isBananaSplit('banana   banana'));
// console.log('line 82: '+ isBananaSplit('banana \t banana'));
// console.log('line 82: '+ isBananaSplit('banana banana banana banana'));
//
//
// console.log('line 89 is:  ' + isBananaSplit(' banana'));
// console.log('line 90 is:  ' + isBananaSplit('banana '));
// console.log('line 91 is:  ' + isBananaSplit(' banana '));
// console.log('line 92 is:  ' + isBananaSplit('banana banana '));
// console.log('line 93 is:  ' + isBananaSplit(' banana banana'));
// console.log('line 94 is:  ' + isBananaSplit('bananabanana'));
// console.log('line 95 is:  ' + isBananaSplit('banana bananabanana'));
