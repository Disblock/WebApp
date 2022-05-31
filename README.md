# Disblock

Disblock is a totally customizable Discord Bot.
You can create your own actions with blocks, and the bot will execute your created code in Discord !

> You can define exactly what the Bot must do, without needing any developement knowledges !

## Links

- [Homepage](https://disblock.xyz/)
- [Documentation](https://docs.disblock.xyz/)
- [Discord server](https://discord.gg) **TODO**

## Installation

You have two options to run this bot : with `Docker` or `standalone`. The recommended way is `Docker`.
If you choose to run in `standalone` mode, you will need a `postgres` database and a `redis` server.

### Install with docker-compose
One of the fastest and easiest way to have the bot running.
Install Docker and Docker-Compose and download files
```
git clone https://github.com/Disblock/Disblock-WebApp
cd Disblock-WebApp
cp "env_files/example.env" ".env"
cp "docker-compose/docker-compose.yml" "docker-compose.yml"
```
Configure  `.env file` and `docker-compose.yml` if needed
Then, start everything :
```
docker-compose up
```

#### Adding certificates for HTTPS
Create a `certs` folder and move it your certificate and key
```
mkdir certs
mv path_to_cerificate_key certs/key.pem
mv path_to_certificate certs/cert.pem
```

### Install with...
**TODO**
