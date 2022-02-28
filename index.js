function encrypt(input, { cipher, key }) {
	const output = [];

	input.split('').forEach((char, i) => {
		const offset = key[i % key.length] % cipher.length * -1;
		output.push(offsetChar(char.toLowerCase(), offset, cipher));
	})

	return output.join('');
}

function decrypt(input, { cipher, key }) {
	const output = [];

	input.split('').forEach((char, i) => {
		const offset = key[i % key.length] % cipher.length;
		output.push(offsetChar(char.toLowerCase(), offset, cipher));
	})

	return output.join('');
}

function offsetChar(char, offset, cipher) {
	if (cipher.includes(char) && offset !== 0) {
		const length = cipher.length;
		const index = cipher.indexOf(char);

		if (index + offset < 0)
			return cipher[length + index - offset * -1];
		else if (index + offset > length - 1)
			return cipher[(length - index - offset) * -1];
		else
			return cipher[index + offset];
	}
	else return char;
}

const txtEnc = {
	cipher: 'abcdefghijklmnopqrstuvwxyz1234567890',
	key: [1, 2],
	encrypt: input => encrypt(input, txtEnc),
	decrypt: input => decrypt(input, txtEnc),
	offsetChar: (char, offset) => offsetChar(char, offset, txtEnc.cipher)
}

module.exports = txtEnc;
