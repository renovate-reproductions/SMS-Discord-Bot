# SMS Discord Bot

This runs a web server which discord uses to communicate with the bot.

## Installation

### Setup

To set the environment variables create a copy of `.env` and call it `.env.local` and set all the variables. Make sure `COMMAND_GUILD_IDS` has no guilds so they are registered globally.

A web server is required to run the bot which supports https. This should be deployed using a reliable web server such as nginx and secured with a certificate. The `INTERACTIONS ENDPOINT URL` in the discord developer portal should be set to the domain name of the server.

### Dockers

The recommended and supported way to run the bot is to use [Docker](https://www.docker.com/).

A docker-compose file is provided in the root of the repository and can be used to deploy a production instance of the bot.

```
docker-compose up -d
```

### Manual Deployment

Manual deployment of the bot is not recommended but is possible, this means that you have to have [Node.js](https://nodejs.org/) installed and clone the repository.

You then need to install and build all the dependencies.

```
yarn install
```

You can now build and start the web server.

```
yarn build
yarn start
```

## Contributing

To contribute to the project you will need:

-   [Node.js](https://nodejs.org/)
-   [Yarn](https://yarnpkg.com/)

You will also need to create a discord bot account and add the bot to the server.

### Envinronment Variables

To set the environment variables create a copy of `.env` and call it `.env.local` and set all the variables.
Make sure to set `COMMAND_GUILD_IDS` to the guilds you are doing development in like `24242 3244234`.

### Setup

To setup the project install all the dependencies.

```bash
yarn install
```

### Tunnel

### <ins>Using Cloudflare Tunnel</ins> (recommended)

-   [Download](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/) and install cloudflared
-   Run as administrator (in Windows) `cloudflared tunnel --url http://localhost:3000` (or the port you have chosen in the `.env.local` file)
-   Copy the URL printed in the terminal and paste it into the `INTERACTIONS ENDPOINT URL` in the discord developer portal.

More about Cloudflare Tunnel [here](https://developers.cloudflare.com/pages/how-to/preview-with-cloudflare-tunnel/)

### <ins>Using Localtunnel</ins>

As the bot runs a web server the local instance needs to be available from the internet and secured with https. There are multiple ways to do this.

The recommended method is to use [localtunnel](https://localtunnel.github.io/www/) to expose the local web server. This creates a tunnel secured using https. To use create the tunnel running `yarn dlx localtunnel lt --port 3000` and leaving that terminal open. All development can continue as normal. Make sure to update the `INTERACTIONS ENDPOINT URL` in the discord developer portal should be set to the domain name of the server.

### Running locally

To run locally run the following command which will rebuild and start the bot on each code change.

```bash
yarn dev
```
