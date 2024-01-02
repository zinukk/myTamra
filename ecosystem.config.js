module.exports = {
  apps: [
    {
      name: 'myTamra',
      script: './node_modules/next/dist/bin/next',
      args: 'start',
      exec_mode: 'cluster',
      instances: '2',
      autorestart: true,
      watch: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};