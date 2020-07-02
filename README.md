# Chakra Themes ⚡️

Chakra Themes is a collection of Chakra UI themes.

## Submission

To add a theme to Chakra Themes you need to submit a pull request with the following:

1. The theme's info added to `src/themes.json`. Use the following as a template:

```json
{
  "title": Theme Title,
  "packageName": NPM Package Name, //
  "repo": Public repository of the theme,
  "author": The author's name,
  "github": The author's GitHub username,
  "thumbnail":  A 16:9 image showing off the theme,
}
```

2. The theme exported from a `.js` file in `src/themes/`. (You may wish to modify the theme by having it extend the default theme from Chakra UI. Themes that break the UI of Chakra themes will not be accepted!)

Themes must be open source and free to use for both commercially and non-commercially (Ideally under the MIT license).

The maintainers of this project reserve to the right to reject any theme for any reason.

## License

MIT

Copyright &copy; 2020 Ivo Ilić
