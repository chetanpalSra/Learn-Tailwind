/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"], //specify folder or file path and files such as html,etc to which it has to be applied. see documentation on tailwind website in CLI section. The content field is used to specify the files that Tailwind should scan for class names to include in your final CSS output.
  theme: {
    extend: {},
    container:{
       center: true,
    }
  },
  plugins: [],
  corePlugins:{
    // filter: false,
  }

  // add this corePlugins object and set filter false to remove filter from from our files mentioned above by content property,by disabling filters output file will not get its css in it,hence preventing extra css to come in it if not needed.
}

