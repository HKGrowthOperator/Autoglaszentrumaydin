# Autoglas Zentrum Aydin · statische Demo fuer Coolify.
#
# Kein Build-Schritt: index.html, shop.html und assets/ SIND der ausgelieferte
# Stand. Das Image legt sie nur hinter nginx (Konfiguration: nginx.conf).
#
# Liegt bewusst in der Repo-Wurzel: In Coolify reichen die Standardwerte
# (Build Pack = Dockerfile, Base Directory = /, Dockerfile Location = /Dockerfile),
# dazu Ports Exposes = 80.

FROM nginx:1.27-alpine

RUN rm -f /etc/nginx/conf.d/default.conf
COPY deploy/coolify/nginx.conf /etc/nginx/conf.d/autoglas.conf
COPY index.html shop.html /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/
# Cache-Busting: CSS/JS-Verweise bekommen ?v=<Pruefsumme>, jeder Deploy erzwingt frische Dateien.
RUN v=$(cat /usr/share/nginx/html/assets/css/*.css /usr/share/nginx/html/assets/js/*.js | md5sum | cut -c1-10) \
 && sed -i -E "s#(assets/(css|js)/[A-Za-z0-9_-]+\.(css|js))\"#\1?v=$v\"#g" /usr/share/nginx/html/*.html \
 && sed -i "s#url(\"fonts.css\")#url(\"fonts.css?v=$v\")#" /usr/share/nginx/html/assets/css/site.css \
 && grep -q "site.css?v=$v" /usr/share/nginx/html/index.html \
 && nginx -t

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1/gesund || exit 1

EXPOSE 80
