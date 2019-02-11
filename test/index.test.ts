import { expect, test } from '@oclif/test';

import cmd = require('../src');

describe('pikkr-cli', () => {
  test
    .stdout()
    .do(() => cmd.run(['--list', 'burger', 'pasta']))
    .it('has a result of type string', ctx => {
      expect(ctx.stdout).to.be.a('string');
    });

  test
    .stdout()
    .do(() => cmd.run(['--list', 'burger', 'pasta']))
    .it('has a result containing correct verbiage', ctx => {
      expect(ctx.stdout).to.contain('You should pick');
    });
});
