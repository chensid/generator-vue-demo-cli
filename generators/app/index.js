const Generater = require('yeoman-generator');

module.exports = class extends Generater {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname,
      },
    ]).then((answers) => {
      this.answers = answers;
    });
  }
  writing() {
    const templates = [
      'README.md',
      'package.json',
      'babel.config.js',
      'src/main.js',
      'src/App.vue',
      'src/components/HelloWorld.vue',
      'src/assets/logo.png',
      'public/index.html',
      'public/favicon.ico',
    ];
    templates.forEach((item) => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
      );
    });
  }
};
