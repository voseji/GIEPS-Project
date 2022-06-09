server {
    listen 80;
    listen [::]:80;
    
   

    root /var/www/html/GIEPS-Project/gogetit-ieps-backend/public;

    index index.php index.html index.htm index.nginx-debian.html;

    server_name _;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
        include snippets/fastcgi-php.conf;
		fastcgi_pass unix:/run/php/php8.0-fpm.sock;
    }

    
}

SELECT user,plugin,host FROM mysql.user;
GRANT ALL PRIVILEGES ON ieps . * TO 'root'@'localhost';
CREATE USER 'ieps'@'localhost' IDENTIFIED WITH mysql_native_password BY '2wsxzaQ1!s';
GRANT ALL PRIVILEGES ON *.* TO 'ieps'@'localhost' WITH GRANT OPTION;

sudo  apt-get install nodejs=16.15.0-1chl1~precise1
npm install -g npm@8.5.5