module.exports = {
  apps: [
    {
      name: 'blog',
      script: 'hexo server'
    }
  ],
  deploy: {
    production: {
      user: 'amaurytobias',
      host: 'amaurytq.me',
      ref: 'origin/master',
      repo: 'git@github.com:amaury-tobias/blog.git',
      path: '/home/amaurytobias/production/blog',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
