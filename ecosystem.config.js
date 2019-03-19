module.exports = {
  apps: [
    {
      name: 'Blog',
      script: './bin/www'
    }
  ],
  deploy: {
    production: {
      user: 'amaurytobias',
      host: 'amaurytq.me',
      ref: 'origin/master',
      repo: 'git@github.com:amaury-tobias/blog.git',
      path: '/home/amaurytobias/production/blog',
      'post-deploy': 'npm install && hexo generate && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
