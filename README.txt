This is the data source for the PSA Computing homepage.

There is one javascript file (the "source") and two json files (the "outputs"). The josn files are accessed via github pages.
There are two files to allow for async loading (the publications.json will be very long - we don't want to potentially slow down loading of "About", "News", etc)

Why do we need a js file? Why not just edit JSON directly.
A few reasons - using a js file means we can control the organization of content more, and easily change the format programatically if needed.
Also, adding multiline strings is mucher easier in javascript than JSON, which is a signficant time saver for copy/pasting bibtex strings.

=== How to edit content
1. Open `jsonify_data.js`
2. Identify the type of content you want to add and find the corresponding javascript array
e.g. "gradStudents" or "publications"
3. Add syntactically valid entries to the javascript array, following the format of existing items
4. Run `node jsonisfy_data.js`
5. Push to github
    If you're using terminal
    git add .
    git commit -m "Nick updated pubs!"
    git push origin master