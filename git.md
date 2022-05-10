# git
## office mac
#### run android emulator ?
yet to run, failed to install the app    
```
    % cd ~          (root directory)
    % ls -a
    % source $HOME/.zprofile
    % echo $PATH
    % cd armorasia
    % npx react-native start
    (new terminal)
    % npx react-native run-android
    (new terminal)
    % npx react-native run-ios
```    
    
---
### merging from main
    
``` console
    twng@Ts-MacBook-Pro armorasia % git checkout main
        Switched to branch 'main'
    Your branch is up to date with 'origin/main'.
    twng@Ts-MacBook-Pro armorasia % git pull
        ...
    twng@Ts-MacBook-Pro armorasia % git fetch origin
    twng@Ts-MacBook-Pro armorasia % git checkout translate
        Switched to branch 'translate'
        Your branch is up to date with 'origin/translate'.
    twng@Ts-MacBook-Pro armorasia % git merge --no-ff main
        Auto-merging src/screens/AboutMeScreen/AboutMeScreen.js    
        CONFLICT (content): Merge conflict in src/screens/AboutMeScreen/AboutMeScreen.js
        ...
    twng@Ts-MacBook-Pro armorasia % npm install
    twng@Ts-MacBook-Pro armorasia % cd ios
    twng@Ts-MacBook-Pro ios % pod install    
```    
    
---
### XCode moved
This error coming because xcode get deleted, corrupt or moved. In my case i removed xcode from my Mac and faced the same issue.    
``` console
twng@Ts-MacBook-Pro armorasia % sudo xcode-select -r    
```    
---
### To re-start Android mobile
https://reactnative.dev/docs/next/environment-setup

 
terminal 1
``` console
twng@Ts-MacBook-Pro armorasia % echo $HOME/.bash_profile
  /Users/twng/.bash_profile
twng@Ts-MacBook-Pro armorasia % cat $HOME/.bash_profile 
  export ANDROID_HOME=$HOME/Library/Android/sdk
  export PATH=$PATH:$ANDROID_HOME/emulator
  export PATH=$PATH:$ANDROID_HOME/tools
  export PATH=$PATH:$ANDROID_HOME/tools/bin
  export PATH=$PATH:$ANDROID_HOME/platform-tools
twng@Ts-MacBook-Pro armorasia % npx react-native start
```    
You can also run the following command after setting ANDROID_HOME.
    
    sdkmanager "platforms;android-29" "system-images;android-29;default;x86_64" "system-images;android-29;google_apis;x86"
    sdkmanager "cmdline-tools;latest" "build-tools;29.0.2" 

terminal 2
``` console
twng@Ts-MacBook-Pro armorasia % echo $ANDROID_HOME
    /Users/twng/Library/Android/sdk
twng@Ts-MacBook-Pro armorasia % sdkmanager "platforms;android-29" "system-images;android-29;default;x86_64" "system-images;android-29;google_apis;x86"
sdkmanager "cmdline-tools;latest" "build-tools;29.0.2"
```
terminal 2
``` console    
twng@Ts-MacBook-Pro armorasia % npx react-native run-android
```
---
## Mac mini (2018)
#### Start new on my mini-mac
``` console
antw@Mac-mini findjobs % git clone https://gitlab.com/findjobssg/armorasia.git
  Cloning into 'armorasia'...
antw@Mac-mini findjobs % cd armorasia
antw@Mac-mini armorasia % git checkout articles
antw@Mac-mini armorasia % npm install

reset the Mac's user as admin, restart the comp.
...
    
antw@Mac-mini armorasia % sudo gem install cocoapods
Password: (login password)
... ... need to wait awhile
antw@Mac-mini ios % pod install
...
 antw@Mac-mini armorasia % npx react-native start   
```    
* xCode > Open Developer Tools > Simulator    

new terminal    
``` console
antw@Mac-mini armorasia % npx react-native run-ios
```    
take sometime to build Simulator iphone 12

### pwd
``` console
antw@Mac-mini armorasia % git  branch
    articles
    main
  * translate
antw@Mac-mini armorasia % pwd
  /Users/antw/findjobs/armorasia
antw@Mac-mini armorasia % 
```
    
---
