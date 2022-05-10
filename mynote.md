### template for readme.md

``` markdown
title
===
[top]: topOfThePage

see below [Sample from armorasia](#sample-from-armorasia)

[ software.md ]( /mynote.md/software.md)


imagefile.png <img src="imagefile.png">
```
---
### Introduction to Unix commands
https://kb.iu.edu/d/afsk

### `pwd` `find` `cd` `ls -la`
``` console
    twng@Ts-MacBook-Pro Documents % pwd
        /Users/twng/Documents
    twng@Ts-MacBook-Pro Documents % cd ReactNative
    twng@Ts-MacBook-Pro ReactNative % cd armorasia
    twng@Ts-MacBook-Pro armorasia % find . -name "*rticle*.js"       
        ./src/screens/ArticlesScreen/components/ArticleItem.js
        ./src/screens/ArticlesScreen/components/ArticlesList.js
        ./src/screens/ArticlesScreen/ArticlesScreen.js
        ./src/screens/ArticlesScreen/ArticleDetailScreen.js
    twng@Ts-MacBook-Pro armorasia % cd ./src/screens/ArticlesScreen
    twng@Ts-MacBook-Pro ArticlesScreen % ls -la
        total 24
        drwxr-xr-x   6 twng  staff   192 Aug 27 11:44 .
        drwxr-xr-x  12 twng  staff   384 Aug 27 11:44 ..
        -rw-r--r--   1 twng  staff  2844 Aug 27 11:44 ArticleDetailScreen.js
        -rw-r--r--   1 twng  staff  1412 Aug 27 11:44 ArticlesScreen.js
        drwxr-xr-x   5 twng  staff   160 Aug 27 11:44 components
        -rw-r--r--   1 twng  staff    78 Jul 29 15:24 index.js
    twng@Ts-MacBook-Pro ArticlesScreen % 


    antw@Mac-mini exp % alias ll='ls -l'
    antw@Mac-mini exp % ll
```

https://www.makeuseof.com/tag/mac-terminal-commands-cheat-sheet/

antw@Mac-mini ~ % man man

---
### Git
``` console
    % git --help
```
for creating new branch
``` console
twng@Ts-MacBook-Pro armorasia % git checkout -b article
```
normal pull from Gitlab
``` console
twng@Ts-MacBook-Pro armorasia % git status
    ...
twng@Ts-MacBook-Pro armorasia % git stash
twng@Ts-MacBook-Pro armorasia % git branch
twng@Ts-MacBook-Pro armorasia % git checkout main
twng@Ts-MacBook-Pro armorasia % git pull
```
normal **push** out
``` console
    % git status
    % git diff
    % git add .
    % git commit -m "remarks"
    % git push
```

git update from main to branch
``` console
twng@Ts-MacBook-Pro armorasia % git checkout main
    Switched to branch 'main'
twng@Ts-MacBook-Pro armorasia % git pull 
```
git fetch origin main; git merge main ???
traced the code for diff

---
