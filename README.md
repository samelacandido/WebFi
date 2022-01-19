# WebFi
Description: This user-friendly chrome extension blocks websites containing keywords specified by the user. The library of keywords can be edited at any time and can block multiple words at once. 

When you are tired of spoilers and other unwanted content ruining your browsing experience, With WebFi you can tailor your browsing experience to block websites containing specific keywords and phrases you’d rather avoid. Download WebFi today and get back to surfing the web without fear.

# What is Web filtering? 

from https://www.barracuda.com/glossary/web-filtering

Web filtering is a technology stops users from viewing certain URLs or websites by preventing their browsers from loading pages from these sites. Web filters are made in different ways and deliver various solutions for individual, family, institutional or enterprise use.

In general, Web filters work in two distinct ways. They can block content as determined by quality of the site, by consulting known lists which document and categorize popular pages across all genres of content. Or, they can evaluate the content of the page live and block it accordingly. Many Web filter tools work off of a constantly updated URL database that shows which websites and domains are associated with hosting malware, phishing, viruses or other tools for harmful activities.

On the surface, web filtering is pretty simple, but like all things, as you start to learn more, everything becomes more complex. With close to a billion active websites on the internet, there’s is no way that every website can be included on a web filtering programs exclusion lists.

# Chrome extension project contents

Video Description and How to use: https://youtu.be/i1QvHQX0N8U

![image](https://user-images.githubusercontent.com/87973732/150041159-709f39c8-3ad8-4f8a-990e-108812caf53c.png)

Block Button - Once you entered a keyword in the text box , press this button to register the keyword.

Show Keyword - It will show your latest added keyword only.

Clear Keywords - it will delete all registered keywords.

---------
# How to use
Show Keywords button : 

・When the popup message is like this, no keyword is regstered in the Webdfi chrome extenson.

![image](https://user-images.githubusercontent.com/87973732/150060341-1b7b40ea-5fb9-41d0-8d80-d7be6a2ccfb0.png)

・When you see this kind of popup when you click the show keywords button, it shows you the last keyword you registred in the Webfi chrome extension.

![image](https://user-images.githubusercontent.com/87973732/150060617-009bd220-0c16-4f7b-9eda-f6c33a46dc69.png)

Block Button:

・When you regsiter a keyword or phrase an it was successfull you will see this popup message.

![image](https://user-images.githubusercontent.com/87973732/150060499-fb5a3966-6002-4a0a-8883-93fcfc10adae.png)

Clear keywords button:

・You will see this popup when you click the clear keyword button and its successfull.

![image](https://user-images.githubusercontent.com/87973732/150060814-3c84a0f2-0c0d-4058-9c95-ec04c08dda7a.png)


---------
File Explanation

Popup.html - this is the html design of the popup that you will use inorder to use the chrome extension.

manifest.json - this is the main file that chrome extension uses.

main.css - this is the css design of the popup.html.

content.js - this contains the code that blocks the website when the certain keyword was recognized in the website.

block.js - this contains the code that interact to the button in the popup.html.

images folder - this folder contains the icon images used in the chrome extension, these images are the default images from google for chrome extension. 

