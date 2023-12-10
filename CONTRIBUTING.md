# How to contribute

## Clone and remote our repository

```bash
# 1. Clone repository to your local computer.
# syntax : git clone [REPO_URL] [LOCAL_DIR_NAME]
git clone https://github.com/ehrmantraut5/sejonghud.git YOUR_FOLDER_NAME

# 2. Initialize your git system
cd YOUR_FOLDER_NAME

git init

# 3. Remote to push & pull request to our repository
git remote add origin https://github.com/ehrmantraut5/sejonghud.git
```

- After these steps, your project directory is conneted to our repository and finally can contribute to our project.

## Development environment installation

- sejonghud is based on node.js environment. In windows, please [download](https://nodejs.org/en) node.js and install it along to their instruction.
- If you are in POSIX-friendly environment, e.g) Ubuntu, Mac, you can install through terminal.

```bash
# 1. Install node.js. package list is already specified in package.json file.

Brew install node # Mac in Homebrew

sudo apt-get install nodejs #Ubuntu

# 2. Change to cloned repository

cd YOUR_FOLDER_NAME

cd sejonhud-app

npm install # This command will install all packages

# 3. Start the project

npm start

```

## App packaging

- When you package your app, the app is packed along to your local paltform's architecture.
- So you need diversity hardware to use in multi platform.

```bash
# 1. This command will pack automatically.
npm run package

# 2. Packed app is located in this path

YOUR_FOLDER_NAME/sejonghud-app/release/app/build
```