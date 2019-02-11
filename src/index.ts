import { Command, flags } from '@oclif/command';
import chalk from 'chalk';
import pikkr from 'pikkr';

class PikkrCli extends Command {
  static description = 'Pick something random from a list of items.';

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
    list: flags.string({
      char: 'l',
      description: 'List of items, separated by spaces',
      multiple: true
    })
  };

  static examples = ['$ pikkr --list burger pasta', '$ pikkr -l burger pasta'];

  async run() {
    const { flags } = this.parse(PikkrCli);
    const { list } = flags;

    try {
      const result = pikkr(list);
      this.log(chalk.magenta(`You should pick: ${result}!`));
    } catch (e) {
      this.error(chalk.red(e.message));
    }
  }
}

export = PikkrCli;
