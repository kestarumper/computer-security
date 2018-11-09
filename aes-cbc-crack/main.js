const CPU_NUM = require('os').cpus().length;
const { spawn } = require('child_process');

const iv = 'qwertyuiop123456'
const workers = [];
const ranges = [
    {from: 'aaaa', to: 'bbbb'},
    {from: 'bbbb', to: 'cccc'},
    {from: 'cccc', to: 'dddd'},
    {from: 'dddd', to: 'eeee'},
]
for(let i = 0; i < CPU_NUM; i++) {
    const range = ranges[i];
    const worker = spawn('node', ['cracker.js', iv, range.from, range.to]);
    
    worker.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });
    
    worker.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    });
    
    worker.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });

    workers.push(worker);
}