# MangaBook

![MangaBook](https://i.imgur.com/Tz6UCYH.png)

A review site for manga.
It is made with EJS, JavaScript, CSS, Bulma, Node.JS, MongoDB and Express. It is on port 4000.
You can add a Manga and review, comment on and rate reviews, add characters and character description, delete reviews and comments and read all the reviews that have been left by other people. Only the user that creates a review or comment can delete it.

# Future updates

* The styling needs to be tidied up
* Seed more books
* A seperate section for anime
* Links to sites where the books can be read

# Code snippets

This function checks to see if the user is logged in. If the userId is true then whatever is next will run. If not the user will be redirected to the login page.

```javascript
function secureRoute(req, res, next) {
  if (req.session.userId) {
    next();
  } else {
    console.log('User was unauthorised');
    res.redirect('/login');
  }
}
```
This is the function for the user created characters. It finds the manga that the character is related to and pushes it into the related manga, saves it then redirects to the index. Char is the name given to the required manga model, not named well. Will change it in the future.

```javascript
function createRoute(req, res) {
  Char.findById(req.params.mangaId)
    .then(character => {
      console.log('Creating a character!', character, req.body);
      character.characters.push(req.body);
      character.save().then(() => res.redirect('/mangas'));
    });
}
```
