---
title: Getting Started
description: API starterkit for Laravel, built with Passport, Orion, Permissions, and many more packages to quickly get you started!

hero:
    name: Laravel API starterkit
    text: Built with Laravel Passport, Orion, Permissions, and many more packages to quickly get you started!
    actions:
        - theme: primary
          text: Get Started
          link: /#article
        - theme: secondary
          text: View on GitHub
          link: https://github.com/skrypt-nl/skrapi
          target: _blank  
---

## What is Skrapi

Skrapi is a starterkit that integrates many third-party packages to quickly get started building a REST API with Laravel. This starterkit includes packages for authentication, API documentation, testing, and more, so you can focus on building the core features of your API.

The starterkit is a great way to get up and running quickly with a robust API. It is highly customizable and can be easily extended to add new features and functionality. Whether you are building a simple API for a small project or a complex API for a large application, Skrapi is a great starting point.

---

## Why we created this

Skrapi is created and maintained by [Skrypt](https://skrypt.nl) as an internal Laravel starterkit which allows users to quickly spin up a new Laravel installation featuring all of our default packages and configurations.
No more wasting time on installing packages and configuring ServiceProviders the same way we did last time. And because it saves us a lot of time, we thought we'd share it with everyone!

---

## Packages & features

- ### [Laravel/passport](https://laravel.com/docs/9.x/passport)

    Skrapi uses Laravel Passport to handle all authentication. While a full OAuth2 implementation might be overkill for your project, it is still a great package to use for token based authentication. 

- ### [Laravel/telescope](https://laravel.com/docs/9.x/telescope)

    Telescope has been configured to work both in testing and production environments. To protect your data, only Users with the `SuperAdmin` role can access the Telescope dashboard. You can read more about its settings [over here]().

[//]: # ( @TODO Add Link )

- ### [Tailflow/laravel-orion](https://tailflow.github.io/laravel-orion-docs/)

    Orion is another great, but fairly unknown package to quickly get your started with your REST API. It allows you to create all required CRUD endpoints for your models with only 1 line of code in the controller.  

- ### [Spatie/laravel-permission](https://spatie.be/docs/laravel-permission/)

    The laravel-permissions package by Spatie is a great way to deal with roles and permission within your API. We also included a set of default roles and permissions for the User model to quickly get you started!

- ### API versioning

    We've tweaked default Laravel installation to implement API versioning out of the box. This allows you to create versioned endpoints in case you need to introduce breaking changes in one of your controllers, but want to keep supporting older clients. More on that [over here]().

- ### UUIDs

    This is our personal preference, but we like to use UUIDs instead of auto-incrementing IDs for many of our models. The User model is already configured to use UUIDs.

- ### Feature test template

    Not a must-have feature, but we've included a basic Feature Test for the User model, based on its controller methods provided by Laravel Orion. Take you advantage and use this as a basis for your own tests!
