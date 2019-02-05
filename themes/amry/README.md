# hexo-theme-adoubi

another simple hexo theme. [online demo](https://blog.amaurytq.me)

![demo](demo.png)

## Installation

hexo-theme-amry developed with hexo 3.8

plugin dependencies:

- hexo-renderer-pug
- hexo-generator-feed

clone theme
    git clone https://github.com/Amaury-Tobias/hexo-theme-amry.git themes/amry

modify site config

    theme: amry

replace `themes/amry/sources/images/favicon.ico` with your own preference

upgrade

    cd themes/amry
    git pull origin master


## Display images in article:

if image located at site's `source/images` :

    img(src="/images/your-image.png")

> images will be limited to `max-width: 100%` compared to parent class `post-content`.

**NOTICE: hexo will use site's source preferentially**

## Upgrade Logs
v0.0.2 Feb 5 2019:
- Sticky sidebar
- Disqus Comments layout, config

v0.0.1 Feb 4 2019:
- Primer Version 

## Copyright

resources usage:

- Bulma.css
- FontAwesome
- normalize.css

Keep `Theme By Amry , Powered By Hexo.` in footer and do whatever you want.
