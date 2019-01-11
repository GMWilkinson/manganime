# MangaBook

![MangaBook](https://i.imgur.com/Tz6UCYH.png)

A review site for manga.

You can add a Manga and review, comment on and rate reviews, add characters and character description, delete reviews and comments and read all the reviews that have been left by other people. Only the user that creates a review or comment can delete it.

![MangaBook](https://i.imgur.com/jhmLXUq.png)

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

![MangaBook](https://i.imgur.com/tUJbuZI.png)

# Technologies

* EJS
* JavaScript
* CSS
* Bulma
* Node.JS
* MongoDB
* Express

 It is on port 4000.

# Challenges/Learnings

* I didn't realise when I first made this project that you could have multiple controllers doing different things and found it really hard to get the characters to show on the 'show' page. But once I realised that I could have a separate controller just for the characters it became much easier
* This was the first time that I had made a back-end for an app and at first struggled to understand how the router interacted with the controllers. But I now feel I have a much better understanding of how the controllers are exported to the router and the exported router is how the front-end interacts with the back-end
* I was already familiar with models but never really understood the point until this project. Now, I realise their importance and how they really do represent real world objects

# Bugs

* If the user is not logged in when they click to go to a show page they get an internal server error

# Future updates

* The styling needs to be tidied up
* Seed more books
* A seperate section for anime
* Links to sites where the books can be read
