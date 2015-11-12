# watch-version

### What is it for?
This module can automatically update the version of your node app ( or API) when enter a new tag on github by **console**


### Install
```
  sudo npm install -g watch-version
```

### Use
1.- Standing in the path thats contains the **.git** folder and your **package.json** file and change its permissions:
```
  sudo chmod 777 package.json
```

2.- Run whatch-version:
```
  whatch-version
```

3.- In another tab add a github tag conventionally, as explained in github documentation
(https://git-scm.com/book/en/v2/Git-Basics-Tagging#Annotated-Tags):

```
  git tag -a v2.0.0 -m "new release"
```

4.- See your package.json and check your version  :smile_cat:

Now just rocks!


# Good practices: versioning

I decided to include a short text about the versioning.

First of all , I must say that there are several classifications of versioning.

The nomenclature used in NPM versioning is called semantic versioning, the following image shows what they work:

![alt tag](https://raw.githubusercontent.com/daniel-llach/watch-version/master/img/versioning.jpg)

As you can see, the last digit increases when you make backwards-compatible bug fixes, the middle digit increase when you add functionality in a backwards-compatible manner and the first digit increase when you make incompatible API changes.

### criteria

This is fine, but how to define a criteria when one of the digits must increase. In other words, when I release a new version?

The answer that we define with my team is as follows:

When we develop news improves we work in a separate branch of production (for example:testing), in this branch we do a lots of commits. And only when we merge this with the master branch and upload to production we make a versioning that involve one of the 2 first version digit.

Then when bugs appear in production, we fixit in another branch and when we merge with master and up to production again there we do a version update to the last digit, so we prevent an excessive increase of numbers ( like 2.89.104 ).

This is our criteria to generate more controlled release with a more interesting documentation (change log).

Of course it is not a rule for all, but it is important to consider a methodology of work with respect to the objectives of the company and versioning system
