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
