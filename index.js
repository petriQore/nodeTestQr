import inquirer from 'inquirer';
import qr from 'qr-image';
import { createWriteStream } from 'fs';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'link',
      message: "give the link",
    }
  ])
  .then((answers) => {
    var qr_png = qr.image(answers.link, { type: 'png' });
    qr_png.pipe(createWriteStream('./qr.png'));

  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("probleme");
    } else {
      console.log("gg");
    }
  });

