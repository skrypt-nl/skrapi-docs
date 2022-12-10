---
title: Installation
description: Follow these simple steps to get started with Skrapi
---

This section will help you get started creating a new Laravel project using the Skrapi starterkit. 

---

## Step 1: Clone the starterkit

First you'll need to clone the Skrapi starterkit from its [GitHub repo](https://github.com/skrypt-nl/skrapi). You can do this by either:

- Navigate to the [repository](https://github.com/skrypt-nl/skrapi) and click the green `Use this template` button. You'll now get your own GitHub repository which is cloned from the starterkit.

    _or_

- Navigate to the [repository](https://github.com/skrypt-nl/skrapi) and click download the source code as a .zip file (`Code > Download ZIP`). Next, unzip the downloaded file, and you'll have the source code on your local machine.  

---

## Step 2: Install composer dependencies

Just like with any Laravel project, you need to install the composer dependencies by running:

```shell
composer install
```

---

## Step 3: Copy `.env.example` to `.env`

Make a copy of `.env.example`, rename it to `.env` and place it in the root folder of the project.
Edit the file and make sure at least the database connection variables are set correctly. 

---

## Step 4: Generate keys

Run the below command to generate the app key in the `.env` file:

```shell
php artisan key:generate
```

---

## Step 5: Run database migrations

Run the below command to create the required database tables:

```shell
php artisan migrate
```

---

## Step 6: Generate Passport keys

Run the below command to generate the encryption keys that are used by Laravel Passport to encrypt the access tokens:

```shell
php artisan passport:keys
```

---

That's it! You can now start using Skrapi and develop your own REST API with Laravel.
