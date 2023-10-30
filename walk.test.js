const isValidWalk = require('./walk'); 

test('El paseo es válido', () => {
  const paseoValido = ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'];
  expect(isValidWalk(paseoValido)).toBe(true);
});

test('El paseo no es válido (duración incorrecta)', () => {
  const paseoInvalido = ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n'];
  expect(isValidWalk(paseoInvalido)).toBe(false);
});

