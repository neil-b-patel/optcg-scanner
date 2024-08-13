# OPTCG Scanner

A scanner that offers a quick and seamless way of checking One Piece Trading Card prices.

## Contributing

After cloning or forking the repository:

1. Make sure you have Android SDK set up: https://developer.android.com/studio.

2. If using WSL, make sure you point to the installed SDK on the Windows mount and copy the `adb.exe` over to the same path as `adb` so Expo can successfully attempt to run it. This will also require you to add the following to your shell profile (e.g. `.bashrc`, `.zshrc`, etc.):

```bash
export ANDROID_HOME="/mnt/path/to/sdk"
export PATH="$ANDROID_HOME/tools:$PATH"
export PATH="$ANDROID_HOME/emulator:$PATH"
export PATH="$ANDROID_HOME/platform-tools:$PATH"
```

3. Run `yarn` to install dependencies.

4. Run `npx expo start --tunnel` to start the Expo server. Choose the relevant options.

5. Run `npx prettier . --write` before committing changes.

6. Create a PR and tag `@neil-b-patel` as a reviewer.
