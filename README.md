# QuickCSS

**QuickCSS - library of helper classes in sass sources specifically for your project.**
I developed this library to speed up the process of constructing websites. 
Frankly, use helper classes infests HTML tags, 
but allows you to quickly, without being distracted to inventing the class name, 
to put the margin for div or centering something. 

Take a look at the following example: 

```html
<div class="row">
  <div class="col-md-4">
    <p class="special-class">some text</p>
  </div>
  <div class="col-md-4">
    <p class="special-class">some text</p>
  </div>
  <div class="col-md-4">
    <p class="special-class">some text</p>
  </div>
</div>
```

I already have a special class, and in it the whole logic. 
Let's say I want to put ``padding-top: 10px`` to columns. Why do I need a new kind of class? Some ``.special-column-padding``.
With helpers I don't need it.

```html
<div class="row">
  <div class="col-md-4 p-t-10">
    <p class="special-class">some text</p>
  </div>
  <div class="col-md-4 p-t-10">
    <p class="special-class">some text</p>
  </div>
  <div class="col-md-4 p-t-10">
    <p class="special-class">some text</p>
  </div>
</div>
```

##Using

You can use the library as follows:

1. Just download last release, unzip and use files from ``dist`` folder.
   You got pure, uncompressed ``quickcss.css``, compressed ``quickcss.min.css`` and source map for it.
2. Build you own css from scss sources. You need Node v0.12.7 or higher and NPM v2.11.3 or higher.

  ```
  node -v
  v0.12.7
  
  npm -v
  v.2.11.3
  ```
  Unzip last release, ``cd`` to it and run:

  ```
  npm install
  ```
  Open ``quickcss.scss``, reade comments and change variables on it. To recompile ``dist`` run:
  
  ```
  gulp
  ```
  
  You will got you own version of helper classes in ``dist`` folder. More gulp task you can find in ``gulpfile.js``.

3. Download release and put scss sources in your project. 

## Done

- margin.scss,
- padding.scss,
- center.scss,
- border.scss,
- border-radius.scss,
- shadow.scss,
- display.scss,
- box.scss,
- position.scss,
- z-index.scss,
- fons-size.scss,
- font-weight.scss,
- line-height.scss,
- text-decoration.scss,
- text-transform.scss,
- truncate.scss,
- cursor.scss

## Will be done

- compilation flags (on/off the creation of very specific classes)
- add border radius for all corner

##Author

Arthur Osipenko - G-MontaG

arthur.osipenko@gmail.com

https://github.com/G-MontaG