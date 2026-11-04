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
RUN nginx -t

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1/gesund || exit 1

EXPOSE 80
