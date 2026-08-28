FROM nginx:alpine

# Remove the default config, use ours
RUN rm -f /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d/default.conf
