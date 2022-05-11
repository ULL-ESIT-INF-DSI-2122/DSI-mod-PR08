import * as express from 'express';
import {join} from 'path';
import {spawn} from 'child_process';

const app = express();
console.log(__dirname);
app.use(express.static(join(__dirname, './execmd')));

app.get('/execmd', (req, res) => {
  if (!req.query.cmd) {
    return res.send({
      error: 'A cmd has to be provided',
    });
  }

  if (!req.query.args) {
    return res.send({
      error: 'Args has to be provided',
    });
  }
  // Imprimimos la query.
  console.log(req.query);
  // Hacemos spawn del comando.
  const command = spawn(`${req.query.cmd}`, [`${req.query.args}`]);
  //command.stdout.pipe(process.stdout);
  ////////////////////////////
  let result: string = '';
  command.stdout.on('data', (data) => {
    result += data;
  });
  command.on('close', () => {
    console.log(`Result: ${result}`);
    res.send({
      execmd: [
        {
          cmd: `${req.query.cmd}`,
          args: `${req.query.args}`,
          output: `${result}`,
        }
      ]
    });
  })
  command.on('error', (err) => {
    res.send({
      execmd: [
        {
          cmd: `Command error`,
        }
      ]
    });
  })
  ///////////////////////////
  // res.send({
  //   execmd: [
  //     {
  //       cmd: `${req.query.cmd}`,
  //       args: `${req.query.args}`,
  //     }
  //   ]
  // });
});

app.get("*", function (_, res) {
  res.send('<h1>404</h1>');
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});