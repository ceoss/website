<?php
echo shell_exec("cd /var/www/xor.tech/public_html/ && git fetch --all && git reset --hard origin/master && git pull && cd /var/www/xor.tech/public_html/OS-Web-Components && git fetch --all && git reset --hard origin/master && git pull")
?>