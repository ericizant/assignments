The Original Bounty Hunter (Part 3)
-----------------------------------
You are a bounty hunter of the Old Republic. Your parents were killed by a Sith Lord as a child and your goal in life is to kill all the Sith and Jedi.

In order to help you in your quest, and since you are a do-it-yourself kind of bounty hunter, you have learned programming so you can keep track of your bounties and kills!

Objective:
Using Express, create an API on the "/bounty" route that:

*GETs a list of all bounties
*POSTs new bounties
*DELETEs a bounty
*PUTs (updates) a bounty

Since we haven't started connecting to MongoDB quite yet, you can just save your bounties in a bounties array in your server code. Keep in mind that since it isn't being persisted anywhere, any time you make a change to your server code and restart the server you will lose all your bounties.

A bounty object should have:

*First Name
*Last Name
*Living (Boolean)
*Bounty Price (number)
*Type (‘Sith’ or ‘Jedi’)
*ID (a unique identifier)

Since there isn't a front-end set up yet, you'll just use Postman to interact with the server and update the data.

---For Parts 1 & 2, See Exercise #53---

Part 3 - Client Setup:

Once you're able to complete the first 2 parts of the exercise, spend some time building a React client-side interface for this server you created. Make sure to leave the server running in your terminal, and send your axios requests out to http://localhost:<port-number>/bounty and http://localhost:<port-number>/bounty/<id-number>.

Your front-end React app should be a CRUD application - it should be able to Create (POST) new bounties, Read (GET) existing bounties and show them to the user of your site, Update (PUT) existing bounties (e.g., like if you wanted to up the price for a bounty), and Delete (DELETE) any bounty from the list of all bounties.

Here is an example: When your app loads it could automatically make an HTTP call to your server to GET a list of all existing bounties. Each bounty can have a "Delete" button next to it that DELETEs that specific bounty from the master list (make sure to also remove it from your front-end application). There could also be an input box/form that lets the user enter a new bounty's information and save it to the server (i.e., a POST request). For the Update (PUT) method, there might be an "Edit" button that allows the user to change pre-exisiting text-field values into editable input fields, letting the user modify a bounty's intrinsic properties and then submitting those updates to the server via a "Save" button.