const WebuxSQL = require('../src');

test('Create new WebuxSQL instance without options', () => {
  function check() {
    const socket = new WebuxSQL();
    return socket;
  }
  expect(check).toThrowError('No options has been provided');
});

test('Create new WebuxSQL instance with options', () => {
  const opts = {
    test: {
      client: 'postgresql',
      connection: {
        host: '127.0.0.1',
        user: 'webux',
        password: 'webux_password',
        database: 'webux_sql',
      },
      migrations: {
        directory: './migrations',
      },
      seeds: {
        directory: './seeds',
      },
    },
  };

  const socket = new WebuxSQL(opts);

  expect(socket).toBeInstanceOf(Object);
});
