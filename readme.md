# Convention guide:

# **Goals:**

 Design Prototype and re-develop a user-friendly and visually captivating clone of the Diary Web Application frontend platform, and ensures seamless compatibility across multiple devices and screen sizes.

![alt text](/asset/readme-image/diary-book.avif)

# Development Tools :

![alt text](/asset/readme-image/vscode-logo.webp)
![alt text](/asset/readme-image/gitlab-logo.webp)
![alt text](/asset/readme-image/figma-logo.webp)

<div align="center">
  <img src="/asset/readme-image/vscode-logo.webp" alt="VS Code Logo" width="100" height="100">
  <img src="/asset/readme-image/gitlab-logo.webp" alt="GitLab Logo" width="100" height="100">
  <img src="/asset/readme-image/figma-logo.webp" alt="Figma Logo" width="100" height="100">
</div>

- **`Visual Studio Code (VSCode)`:** A powerful and versatile code editor that provides an excellent development environment with features like syntax highlighting, debugging support, and extensions for enhanced productivity.
- **`GitLab`:** A web-based Git repository manager that offers version control, issue tracking, and continuous integration/continuous deployment (CI/CD) pipelines, facilitating collaborative software development.
- **`Figma`:** An innovative design tool used for creating user interfaces, prototypes, and collaborative design projects.

# Communication tools :

![r.webp](https://prod-files-secure.s3.us-west-2.amazonaws.com/d09f4b93-28fa-4ab8-bf9f-1e1f34adf896/ea79b02d-ab1e-49b1-9b60-f7265b0815e3/r.webp)

![a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d09f4b93-28fa-4ab8-bf9f-1e1f34adf896/fd21a7ad-0b7d-4298-b5b4-d10d8f98ef51/a.png)

![Notion_app_logo.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d09f4b93-28fa-4ab8-bf9f-1e1f34adf896/cf126d6c-376d-47ea-b502-02183bbfacea/Notion_app_logo.png)

- **`ANB community` : Maintain daily or weekly notes on tasks completed, tasks pending, and any obstacles. Use it as a self-scrum tool to keep your project on track.**
- **`Peer Review Board` : invite feedback from mentors, friends, or online coding communities to enhance your code quality.**
- **`Notion` :** Note down things that i learn during the project and any challenges that faced. This will help in tracking my growth and overcoming recurring issues.

# Grid System ( Code & Figma) :

**Resolution for :**

- Phone (iPhone 12 Pro Max) : 390 × 844
- Tablet (iPad Pro) :1024 × 1366
- Desktop : 1920 × 1080

# Figma Design Convention :

- **`Frame naming`:** Frames must have proper names corresponding to their responsible pages that they represent.
- **`Element naming`:** Elements inside frames must have proper names corresponding to their purpose and usage.
- **`Frame alignment`:** Frames must have proper alignment and all have the exact same spacing and gap, which is 50px gap between each frame.
- **`Frame placement`:** All frames must follow their placement, the frames containing the components for each resolution must be on the right, whereas, the frames that contain the UI clone of each page is on the left.

# Font-Family :

- **Font usage instruction:** Use each font as the replacement for the fonts on the website.
- **Font-families:** Montserrat, Raleway Regular and **Mouse Memoirs.**

# Figma-Global-color :

- White: #F5F5F5
- **Dark-blue: #050C9C**
- **blue :** #3572EF
- dark-wavy-blue: #4E8FE7
- **wavy-blue:** #3ABEF9
- **light-blue** : #A7E6FF
- **black:** #0C0C0C
- dark-light-blue: #40A2E3

# Wireframe-color :

- **wireframe-primary:** #545F71
- **wireframe-secondary:** #9BA5B7
- **pure-white:** #FFFFFF

# Project structure :

![Screenshot 2024-06-21 at 2.17.25 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d09f4b93-28fa-4ab8-bf9f-1e1f34adf896/c2da1dd7-aa9c-4986-aa1b-cfc8837a5e49/Screenshot_2024-06-21_at_2.17.25_PM.png)

## **Description:**

- **assets:** a folder to store images and videos.
- **components:**  a folder to store reusable components.
- **pages:** stores each page are responsible for.
- **src:** a folder to store a bunch of stylization and JavaScript.
- **git-ignore:** a file to store all the untracked files.
- **index.html:** the file that represents the landing page of the website.

# **Rules:**

- **assets:** The sub-folders such as images and videos must contain sub-folders correlating to each specific page **e.g., homepage, landing-page etc.**
- **src:** The sub-folders such as the styles and script folders must contain sub-folders correlating to each specific page **e.g homepage,  landing-page etc.**

# Style Guides:

**Colors:**

- Modal inside white: #fff
- White: #f5f5f5
- Background color: #4E8FE7
- Dark blue: #050C9C
- Darker blue: #0056b3
- Blue: #3573EF
- Gray: #545F71
- Wavy blue: #3ABEF9
- Light blue: #A7E6FF
- Black: #0c0c0c
- Modal background: rgba(0, 0, 0, 0.5)
- Clock background: rgba(0, 0, 0, 0.319)

**Font family:**

- Montserrat: 'Montserrat', sans-serif
- Raleway: 'Raleway', sans-serif

**Font weight:**

- Bold: bold
- Normal: normal

**Border radius:**

- Profile pic size: 40px
- Small: 5px
- Medium: 10px
- Huge: 16px
- Large: 20px
- Round: 50%

**Font size:**

- Smallest: 8px
- Smaller: 12px
- Default: 16px
- Huge: 18px
- Medium: 20px
- SVG: 24px
- Large: 36px
- Larger: 50px

**Gap:**

- Small: 10px
- Medium: 20px
- Large: 30px

**Margin:**

- Negative: -10%
- Default: 0px
- Small: 10px
- Medium: 20px
- Large: 30px
- Larger: 50px
- Auto: auto

**Padding:**

- Default: 0px
- Small: 10px
- Medium: 20px
- Large: 30px
- Larger: 50px

# File naming :

## **HTML:**

- The file must contain all lower-case letters.
- The file must have a **‘ -’** in between each new word, **e.g : landing-page.html**

## **JavaScript:**

- The file must be named according to camelCasing. **e.g : landingPage.js**

## **CSS:**

- The file must contain all lower-case letters.
- The file must have a **‘ -’** in between each new word. **e.g : landing-page.css**

Classes, function and variable naming.

# Classes, function, and variable naming:

## **HTML:**

- **Class naming** : class names must use ‘ - ’ to separate each word, with the names corresponding to their sections. **e.g: navbar-container.**

## **JavaScript:**

- **Function naming** : The function names must follow the camelCasing naming convention, and the names must be relevant to their usage. **e.g: buttonToggle.**

**Note**: Functions must contain the function keyword (no usage of arrow functions, unless it is an anonymous function).

- **Variable naming**: The variable’s names must follow the camelCasing naming convention, and the names must have meaning according to their usage. **e.g: toggleButton**

**Note**: Variables must be declared with their ‘const’ or ‘let’.

# Comment rules:

**Common comments rule**: Regardless of the file type, the comments must contain a prefix followed by a **‘ : ’** and then an explanation/description.  **e.g : Card : diary card**

## **HTML:**

- Each main section must be separated by a space and then a comment on a new space.
- Sub-sections do not follow the same rules as the main sections.76

## **JavaScript:**

- Each function must have a comment with the function name followed by a description of its functionality. e.g: sidebarToggle : toggles items to create an accordion effect.

## **CSS:**

- Each block of CSS code must contain a comment with the section and a description of the section. e.g: Section 1: meaning/description

# CSS Styling & Framework :

- **Tailwinds-CSS** : utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.
- **CSS Styling** : Do not write inline style or external styles that are not needed.

# Version Control:

![width_1600.webp](https://prod-files-secure.s3.us-west-2.amazonaws.com/d09f4b93-28fa-4ab8-bf9f-1e1f34adf896/9021f450-eaf5-4c94-818d-14778b808d23/width_1600.webp)

## Issue naming convention :

**Issue naming :** The issues must have the issue name followed by ‘:’ and then a description of the issue at hand.

## Commit Message :

- **Common commit rules:** Commits must be detailed, stating the changes made along with a short and meaningful description of the changes.
- **Commit prefixes:**
- **`Init`:** when you initialize the workspace on a new branch.
- **`Add`:** when adding a new functionality on a branch.
- `Remove`: when remove some of the item.
- **`Finish`:** when the entire branch is finished (the last commit before merging the branch).
- **`Fix`:** when fixing something on the bugfix/hotfix branch.

**e.g : Finish: Finish: finish nav bar homepage branch.**

# Credit to:

Kim Chhunkea ;

ANB School.

# Checkout link source 🫶🏻:

# Personal project:

- Figma (UI Screen, UI Prototype, Flow planning): https://www.figma.com/design/ckU2aZuSrS1cyeEljrmbbe/Diary-Web-Application?node-id=3-4&t=Q9en28xFuWcgEJhL-1

- Flow guide document: 

- IA: 

- Hosting website: 

- Remote repo: https://git.clp.kr/anbschool/2nd/cybernexus/kim-chhunkea/diary-personal-project.git

- Convention guide: [https://pewter-cry-2c1.notion.site/Convention-guide-3e97901d0eb3436dabd94661a9fec275?pvs=4](https://www.notion.so/Convention-guide-3e97901d0eb3436dabd94661a9fec275?pvs=21)

- Notion: [https://pewter-cry-2c1.notion.site/Daily-studying-8a4aef4d0655441e922d2b0eef109848?pvs=4](https://www.notion.so/Daily-studying-8a4aef4d0655441e922d2b0eef109848?pvs=21)