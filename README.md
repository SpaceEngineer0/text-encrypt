# text-encrypt

Encrypt and decrypt messages using ciphers and keys.

`npm i text-encrypt`

```js
const txtEnc = require('text-encrypt');
```

## Documentation

### cipher

String of lowercase characters.

If the cipher is longer or is not sorted, the encryption will be stronger.

* Default: `'abcdefghijklmnopqrstuvwxyz1234567890'`.

### key

Array of offsets, which can be positive or negative integers.

* Default: `[1, 2]`.

### encrypt(text)

* `text` - string, message to encrypt.

Encrypt a message. To successfully read messages the key and cipher needs to be the same when both encrypting and decrypting.

Offsets are inverted when encrypting.

Note that all uppercase letters will be converted to lowercase.

### decrypt(text)

* `text` - string, message to decrypt.

Decrypt a message. To successfully read messages the key and cipher needs to be the same when both encrypting and decrypting.

Note that all uppercase letters will be converted to lowercase.

### offsetChar(char, offset)

* `char` - single character.
* `offset` - positive or negative integer.

If the `char` is present in the cipher string, the function will return a symbol that is `offset` characters away.
Else, returns `char`.

### Key and offset explanation

```js
txtEnc.offsetChar('a', 2);     // 'a' + 2 = 'c'
txtEnc.offsetChar('9', 2);     // '9' + 2 = 'a'
txtEnc.offsetChar('h', -3);    // 'h' - 3 = 'e'
txtEnc.offsetChar('b', -4);    // 'b' - 4 = '8'
```

```js
txtEnc.key = [0, -1, -2];    // when encrypting offsets are inverted

txtEnc.encrypt('lorem ipsum');
//              01201201201
//             'lpten iquun'
```
