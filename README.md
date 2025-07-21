# Portfolio Project Structure

This portfolio website is designed to showcase your coding projects and exercises. Here's how to use and maintain it:

## 📁 Project Structure

```
Portfolio Project/
├── index.html          # Main portfolio page
├── styles/
│   └── main.css        # All styling for the portfolio
├── scripts/
│   └── main.js         # JavaScript functionality
├── projects/           # Individual project folders (create as you build)
│   ├── dice-roll/      # Your projects go here
│   ├── calculator/     # Future projects
│   └── todo-list/      # More projects...
└── README.md          # This file
```

## 🚀 Getting Started

1. **Open the portfolio**: Open `index.html` in your browser to see your portfolio
2. **Customize your info**: Edit the personal information in `index.html`
3. **Add your projects**: Follow the guide below to add your exercises/projects

## 📋 Adding New Projects

### Method 1: Using the JavaScript Array (Recommended)
Open `scripts/main.js` and add your project to the `projects` array:

```javascript
{
    id: 1,
    title: "Your Project Name",
    type: "Exercise Type", 
    description: "Brief description of your project",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "./projects/your-project/index.html",
    icon: "fas fa-icon-name" // FontAwesome icon
}
```

### Method 2: Project Folder Structure
For each project, create a folder in the `projects/` directory:

```
projects/
└── your-project-name/
    ├── index.html
    ├── style.css
    ├── script.js
    └── README.md (optional)
```

## 🎨 Customization

### Personal Information
Edit these sections in `index.html`:
- Hero section: Your name and title
- About section: Your bio and skills
- Contact section: Your email and social links

### Styling
- Main colors can be changed in `styles/main.css`
- The CSS uses CSS custom properties for easy theming
- Mobile-responsive design is already included

### Adding Skills
Update the skills section in the HTML:
```html
<span class="skill-tag">New Skill</span>
```

## 🔧 Features

- **Responsive Design**: Works on all device sizes
- **Smooth Scrolling**: Navigation smoothly scrolls to sections
- **Mobile Menu**: Hamburger menu for mobile devices
- **Project Cards**: Attractive cards for each project
- **Live Demo Links**: Direct links to your project demos
- **Modern Design**: Clean, professional appearance

## 📱 Mobile Features

- Hamburger menu for navigation
- Touch-friendly buttons and links
- Optimized layouts for small screens
- Fast loading and smooth animations

## 🌟 Tips for Success

1. **Keep descriptions concise**: 1-2 sentences per project
2. **Use good screenshots**: Add images to make projects more appealing
3. **Update regularly**: Add new projects as you complete them
4. **Test on mobile**: Always check how it looks on phone/tablet
5. **Keep it organized**: Follow the folder structure for consistency

## 🚀 Next Steps

1. Add your existing projects to the `projects/` folder
2. Update the project data in `main.js`
3. Customize your personal information
4. Test the portfolio in different browsers
5. Consider hosting it on GitHub Pages or Netlify

## 💡 Future Enhancements

- Add project screenshots/thumbnails
- Include a blog section for coding tutorials
- Add dark/light theme toggle
- Include animations and micro-interactions
- Add a contact form
- Include testimonials or recommendations

Happy coding! 🎉
