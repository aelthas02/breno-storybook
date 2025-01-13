# :art: Adding new Icons

If you are developing a task and come across an icon (or icons) that is not listed in our Design System,
then you may need to add it here. I'll show you how!

## Fontello

- First of all, you have to access [Fontello](https://fontello.com/), and select the option to Import a new SVG file.
- You have to import the `Icons.svg` file that we have in `src > lib > assets > icons > font-icons` in the "Custom Icons" section.
- Then, you can add the SVG icons you want to add in our Design System.
- Rename the icon name in the section "Customize Names" to the name that defines the icon (It can be defined by the UX Designer, so remember to ask him/her!).
- After this, you have to select all the section (the icons from our file and the new icons you added) and click on "Download webfont".
- Once you have downloaded the webfont, you have to unzip the folder and there are four files you have to copy and paste in our `font-icons` folder: "`fontello-codes.css`" inside the css folder, "`fontello.ttf`", "`fontello.woff`" and "`fontello.svg`" inside the fonts folder.
- Copy all these files and paste them on `src > lib > assets > icons > font-icons`.
- Rename these files to "`Icons.css`", "`Icons.svg`",
  "`Icons.ttf`" and "`Icons.woff`".
- Remember to delete the old existing files.

## Usage of icons

- Fontello generated unicodes for your icons, and these codes are listed on the file "`Icons.css`".
- Search for the icons names you added, copy the code, and paste on the "`icon.component.scss`" file in our Icon Component.
  > Note: You don't have to make any change in the existing icon classes we have. Just add the new classes for the new icons you added!
- Now, your icons are in our lib. Remember to add it in the `icons` list in our `icon.stories.ts` file, so it will be listed in our documentation page.
- Once you finished your changes, you can publish the updated package.
