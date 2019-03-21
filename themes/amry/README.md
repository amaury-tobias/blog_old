# hexo-theme-amry

Tema para hexo, construido con [Pug](https://pugjs.org/api/getting-started.html) y [Bulma](https://bulma.io/). [Demo (Personal Blog)](https://blog.amaurytq.me)

// TODO: image DEMO
![demo](demo.png)

## Installation

hexo-theme-amry

plugin dependencies:

- hexo-renderer-pug
- hexo-generator-feed

clone theme
    git clone https://github.com/Amaury-Tobias/hexo-theme-amry.git themes/amry

modify site config

    theme: amry

reemplaza `themes/amry/sources/images/favicon.ico` con tu favicon de preferencia.

upgrade

    cd themes/amry
    git pull origin master


## Mostrar imágenes en los Post:

Coloca las imágenes en `source/images` :

    img(src="/images/your-image.png")

> images will be limited to `max-width: 100%` compared to parent class `post-content`.

**NOTICE: hexo will use site's source preferentially**

## Upgrade Logs
v0.8.0 Mar 15 2019
- Desactivados comentarios Disqus (aun funcionales) para respetar la privacidad de los usuarios
- Bulma update to 0.7.4
- Correcciones en Sidebar
- Pagina de inicio
- Pagina de tags

v0.0.2 Feb 5 2019:
- Sticky sidebar
- Disqus Comments layout, config

v0.0.1 Feb 4 2019:
- Primer Version 

## Copyright

resources usage:

- Bulma.css
- FontAwesome

Keep `Theme By Amry , Powered By Hexo.` in footer and do whatever you want.
