# Free website template

Hi! I'm Rudi.
I made a free **template** for you to use to create a website that uses a responsive navigation bar with a mobile first approach.

## 1. The **template** has the following HTML format:

The graph below shows the structure of the HTML document. The **template** has a header consisting of a navigation bar and a main section. You should add your website body to the main section.

```mermaid
graph LR
1[container] --> 2[__header]
1 --> 3[main]
2 --> 4[menu]
4 --> 5[__logo]
4 --> 6[__toggle]
4 --> 7[__items]
7 --> 8[__item]
7 --> 9[__item]
7 --> 10[--item]
3 --> A[Your code]
```

## 2. Details about the template:

The **template** makes use of a BEM (Block \_\_Element --Modifier) naming convention for improved readability. It can be downloaded by just pulling from the repo. I used SCSS to style the **template** using partials for improved maintainability. I also used JQuery for the functionality of the hamburger menu toggle.

### 2.1 Template layout:

The **template** makes use of a generalized modern web page where the menu**logo is aligned to the top left and the menu**items (links) are aligned to the top right of the navigation bar.

```mermaid
graph LR
1[Logo] -->A[  ]
A-->B[ ]
B-->C[ ]
C-->D[ ]
D-->E[ ]
E-->F[ ]
F --> 2[Home]
2 --> 3[About]
3 --> 4[Services]
```

### 2.2 Template functionality:

The **template** is fully responsive, meaning that it adjusts the styling of the HTML as well as the functionality of the website based on the what devise is viewing the website.

#### 2.2.1 Mobile View

In mobile view (a view port smaller than 600px) the menu**logo and menu**toggle (hamburger-menu-icon) will be be displayed in the navigation bar with the menu\_\_items being hidden.

```mermaid
graph LR
1[Logo] -->A[  ]
A-->B[ ]
B-->C[ ]
C-->D[ ]
D --> 2[hamburger-icon]
```

Upon clicking the menu**toggle the menu**items will be displayed vertically and the menu\_\_toggle icon will change to a close-menu-icon.

```mermaid
graph LR
1[Logo] -->A[  ]
A-->B[ ]
B-->C[ ]
C-->D[ ]
D --> 2[X]
```

```mermaid
graph LR
A[ ]-->B[ ]
B-->C[Home]
C-->D[ ]
D-->E[ ]
```

```mermaid
graph LR
A[ ]-->B[ ]
B-->C[About]
C-->D[ ]
D-->E[ ]
```

```mermaid
graph LR
A[ ]-->B[ ]
B-->C[Services]
C-->D[ ]
D-->E[ ]
```

Clicking the menu**toggle again will revert the display back to the original and will change the menu**toggle icon back to the hamburger-menu-icon.

#### 2.2.2 Desktop View

In desktop view (a view port larger than 600px) the menu**logo and menu**items will be be displayed in the navigation bar with the menu\_\_toggle being hidden.

```mermaid
graph LR
1[Logo] -->A[  ]
A-->B[ ]
B-->C[ ]
C-->D[ ]
D-->E[ ]
E-->F[ ]
F --> 2[Home]
2 --> 3[About]
3 --> 4[Services]
```

## 3. How to use the **template**:

Pull from the repo and insert your own code in the main section

## 4. Screen Shots of **template**:

Desktop View:
![desktop view](https://i.ibb.co/G9ZS85s/Annotation-2020-02-05-142546.jpg)
Mobile View:
![mobile view](https://i.ibb.co/tLHSPxd/Annotation-2020-02-05-142641.jpgk)
Mobile View (toggled):
![mobile view - togged](https://i.ibb.co/t3LbGHc/Annotation-2020-02-05-142627.jpg)
