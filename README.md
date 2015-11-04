# watch-version
An update version module from git tag command listener.

### What is it for?
This module can automatically update the version of your node app ( or API) when enter a new tag on github by **console**


### Install
```
  sudo npm install -g watch-version
```

### Use
1.- Standing in the path thats exist your **package.json** file and your **.git folder** and run:

```
  whatch-version
```

2.- In another tab add a github tag conventionally, as explained in the following example:

```
  git tag -a v2.0.0 -m "new release"
```

3.- See your package.json and check your version :smile_cat:

Now just rocks!
