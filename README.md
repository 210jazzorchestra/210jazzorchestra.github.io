# 210 Jazz Orchestra Site

## Making updates

Updating events on the site should be done through [Bandsintown](https://artists.bandsintown.com/artists/15570638/events/upcoming). Updates there will automatically update on the site as well.

Everything else is updated via the contents.json file:
- Bio
- Band members
- Press quotes
- Youtube URLs
- Social Media Accounts

To edit the contents.json file, [click here](https://github.com/210jazzorchestra/website/edit/main/src/app/content.json).

You should change the txt in between the quotation marks on the right side of each colon.
For example, if I wanted to update the saxophonists:

Original
```
 "saxophones": "John Doe, Jane Doe, Jim Doe, Jill Doe",
```

Edited
```
 "saxophones": "Mario, Luigi, Peach, Toad, Donkey Kong",
```

The most important thing is to not accidentally delete, move or add any colons/commas/quotation marks.

Once you have made your updates click the "Commit Changes..." button in the top right. Describe the change you made in the commit message (i.e. updated youtube links, updated bio), and then click commit changes. You don't need to add an extended description, and you should choose the default option of committing directly to the `main` branch.

If you run into any trouble or have any questions, just complain at Zac.



