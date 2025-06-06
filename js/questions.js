const questions = [
    {
        category: "Programming",
        questions: [
            {
                question: "What does HTML stand for?",
                option: [
                    "Hyper Text Markup Language",
                    "Hyper Title Markup Language",
                    "Hyper Text Market Language",
                    "High Text Markup Language"
                ],
                correctAnswer: 0
            },
            {
                question: "Which HTML tag is used to define an unordered list?",
                option: [
                    "<ol>",
                    "<ul>",
                    "<li>",
                    "<list>"
                ],
                correctAnswer: 1
            },
            {
                question: "What does CSS stand for?",
                option: [
                    "Creative Style Sheets",
                    "Computer Style Sheets",
                    "Cascading Style Sheets",
                    "Colorful Style Sheets"
                ],
                correctAnswer: 2
            },
            {
                question: "Which property is used to change the background color in CSS?",
                option: [
                    "bgcolor",
                    "color",
                    "background-color",
                    "background"
                ],
                correctAnswer: 2
            },
            {
                question: "Which HTML element is used to insert a line break?",
                option: [
                    "<break>",
                    "<br>",
                    "<lb>",
                    "<line>"
                ],
                correctAnswer: 1
            },
            {
                question: "What is the correct syntax for referring to an external script called 'app.js'?",
                option: [
                    "<script href='app.js'>",
                    "<script src='app.js'>",
                    "<script ref='app.js'>",
                    "<script link='app.js'>"
                ],
                correctAnswer: 1
            },
            {
                question: "Which symbol is used for comments in JavaScript?",
                option: [
                    "//",
                    "/*",
                    "<!--",
                    "#"
                ],
                correctAnswer: 0
            },
            {
                question: "How do you call a function named 'myFunction' in JavaScript?",
                option: [
                    "call myFunction()",
                    "myFunction()",
                    "Call.myFunction()",
                    "callFunction(myFunction)"
                ],
                correctAnswer: 1
            },
            {
                question: "Which of the following is a correct CSS syntax?",
                option: [
                    "body {color: black;}",
                    "{body:color=black;}",
                    "{body;color:black;}",
                    "body:color=black;"
                ],
                correctAnswer: 0
            },
            {
                question: "Which HTML tag is used to define a table row?",
                option: [
                    "<td>",
                    "<th>",
                    "<tr>",
                    "<table>"
                ],
                correctAnswer: 2
            },
            {
                question: "How do you create a function in JavaScript?",
                option: [
                    "function myFunction()",
                    "create function myFunction()",
                    "function:myFunction()",
                    "def myFunction()"
                ],
                correctAnswer: 0
            },
            {
                question: "Which HTML attribute specifies an alternate text for an image?",
                option: [
                    "title",
                    "alt",
                    "src",
                    "longdesc"
                ],
                correctAnswer: 1
            },
            {
                question: "Which HTML tag is used to define a hyperlink?",
                option: [
                    "<a>",
                    "<link>",
                    "<href>",
                    "<hyper>"
                ],
                correctAnswer: 0
            },
            {
                question: "Which CSS property controls the text size?",
                option: [
                    "font-style",
                    "text-size",
                    "font-size",
                    "text-style"
                ],
                correctAnswer: 2
            },
            {
                question: "What does the '===' operator do in JavaScript?",
                option: [
                    "Assigns a value",
                    "Compares values and types",
                    "Compares values only",
                    "None of the above"
                ],
                correctAnswer: 1
            },
            {
                question: "Which HTML tag is used to define a division or a section?",
                option: [
                    "<span>",
                    "<div>",
                    "<section>",
                    "<article>"
                ],
                correctAnswer: 1
            },
            {
                question: "How do you write an IF statement in JavaScript?",
                option: [
                    "if i = 5 then",
                    "if i == 5",
                    "if (i == 5)",
                    "if i = 5"
                ],
                correctAnswer: 2
            },
            {
                question: "Which property is used to align text in CSS?",
                option: [
                    "text-align",
                    "text-style",
                    "align-text",
                    "font-align"
                ],
                correctAnswer: 0
            },
            {
                question: "Which HTML tag is used to define an image?",
                option: [
                    "<picture>",
                    "<img>",
                    "<image>",
                    "<src>"
                ],
                correctAnswer: 1
            },
            {
                question: "How can you add a comment in a CSS file?",
                option: [
                    "// this is a comment",
                    "/* this is a comment */",
                    "<!-- this is a comment -->",
                    "# this is a comment"
                ],
                correctAnswer: 1
            },
            {
                question: "What is the correct JavaScript syntax to change the content of an HTML element with id 'demo'?",
                option: [
                    "document.getElementById('demo').innerHTML = 'Hello';",
                    "#demo.innerHTML = 'Hello';",
                    "document.getElement('demo').innerText = 'Hello';",
                    "document.querySelector('#demo') = 'Hello';"
                ],
                correctAnswer: 0
            },
            {
                question: "What does DOM stand for in web development?",
                option: [
                    "Document Object Model",
                    "Data Object Management",
                    "Digital Ordinance Model",
                    "Document Oriented Management"
                ],
                correctAnswer: 0
            },
            {
                question: "Which tag is used to define a list item?",
                option: [
                    "<ul>",
                    "<li>",
                    "<ol>",
                    "<list>"
                ],
                correctAnswer: 1
            },
            {
                question: "How do you declare a JavaScript variable?",
                option: [
                    "v myVariable;",
                    "let myVariable;",
                    "dim myVariable;",
                    "variable myVariable;"
                ],
                correctAnswer: 1
            },
            {
                question: "Which input type allows the user to select a file?",
                option: [
                    "type='image'",
                    "type='file'",
                    "type='text'",
                    "type='submit'"
                ],
                correctAnswer: 1
            }
        ]
    },
    {
        category: "Armenian History",
        questions: [
            {
                question: "What is the name of the ancient Armenian kingdom founded in 331 BC?",
                option: [
                    "Urartu",
                    "Ararat",
                    "Artaxiad",
                    "Kingdom of Armenia"
                ],
                correctAnswer: 3
            },
            {
                question: "Who was the first king of the unified Kingdom of Armenia?",
                option: [
                    "Tigranes the Great",
                    "Artaxias I",
                    "Aram",
                    "Vardan Mamikonian"
                ],
                correctAnswer: 1
            },
            {
                question: "In what year did Armenia adopt Christianity as a state religion?",
                option: [
                    "301 AD",
                    "313 AD",
                    "395 AD",
                    "284 AD"
                ],
                correctAnswer: 0
            },
            {
                question: "Which Armenian king is known for expanding Armenia to its greatest territorial extent?",
                option: [
                    "Artavasdes II",
                    "Tigranes the Great",
                    "Levon I",
                    "Arshak II"
                ],
                correctAnswer: 1
            },
            {
                question: "What was the name of the Armenian alphabet’s creator?",
                option: [
                    "Grigor Lusavorich",
                    "Mesrop Mashtots",
                    "Movses Khorenatsi",
                    "Sahak Partev"
                ],
                correctAnswer: 1
            },
            {
                question: "Which battle in 451 AD became a symbol of Armenian resistance?",
                option: [
                    "Battle of Avarayr",
                    "Battle of Sardarapat",
                    "Battle of Ani",
                    "Battle of Dvin"
                ],
                correctAnswer: 0
            },
            {
                question: "Who led the Armenians in the Battle of Avarayr?",
                option: [
                    "Vardan Mamikonian",
                    "Tigranes the Great",
                    "Smbat Bagratuni",
                    "Arshak II"
                ],
                correctAnswer: 0
            },
            {
                question: "Which empire ruled much of Armenia during the Middle Ages?",
                option: [
                    "Ottoman Empire",
                    "Roman Empire",
                    "Persian Empire",
                    "Byzantine Empire"
                ],
                correctAnswer: 2
            },
            {
                question: "What was the capital of the Bagratid Kingdom of Armenia?",
                option: [
                    "Yerevan",
                    "Gyumri",
                    "Ani",
                    "Van"
                ],
                correctAnswer: 2
            },
            {
                question: "Which Armenian Kingdom was established in Cilicia during the Crusades?",
                option: [
                    "Urartu",
                    "Artaxiad Armenia",
                    "Kingdom of Cilicia",
                    "Bagratid Armenia"
                ],
                correctAnswer: 2
            },
            {
                question: "Who was the first king of the Armenian Kingdom of Cilicia?",
                option: [
                    "Levon I",
                    "Hethum I",
                    "Ruben I",
                    "Constantine I"
                ],
                correctAnswer: 0
            },
            {
                question: "In which year did the Armenian Genocide begin?",
                option: [
                    "1912",
                    "1914",
                    "1915",
                    "1916"
                ],
                correctAnswer: 2
            },
            {
                question: "Which empire carried out the Armenian Genocide?",
                option: [
                    "Russian Empire",
                    "Persian Empire",
                    "Ottoman Empire",
                    "Byzantine Empire"
                ],
                correctAnswer: 2
            },
            {
                question: "What was the name of the Armenian resistance in 1915 in eastern Turkey?",
                option: [
                    "Battle of Sardarapat",
                    "Siege of Van",
                    "Zeytun Resistance",
                    "Revolt of Sassoun"
                ],
                correctAnswer: 1
            },
            {
                question: "What is the name of the memorial in Yerevan commemorating the Armenian Genocide?",
                option: [
                    "Mother Armenia",
                    "Cascade Complex",
                    "Tsitsernakaberd",
                    "Erebuni Fortress"
                ],
                correctAnswer: 2
            },
            {
                question: "Which republic did Armenia join in 1922?",
                option: [
                    "Russian Federation",
                    "Transcaucasian SFSR",
                    "Armenian Democratic Republic",
                    "Caucasus Union"
                ],
                correctAnswer: 1
            },
            {
                question: "When did Armenia regain its independence from the Soviet Union?",
                option: [
                    "1989",
                    "1990",
                    "1991",
                    "1992"
                ],
                correctAnswer: 2
            },
            {
                question: "Who was Armenia's first president after independence?",
                option: [
                    "Serzh Sargsyan",
                    "Levon Ter-Petrosyan",
                    "Robert Kocharyan",
                    "Nikol Pashinyan"
                ],
                correctAnswer: 1
            },
            {
                question: "What is the name of the conflict between Armenia and Azerbaijan over a disputed region?",
                option: [
                    "Yerevan Conflict",
                    "Caspian War",
                    "Nagorno-Karabakh Conflict",
                    "Syunik Skirmish"
                ],
                correctAnswer: 2
            },
            {
                question: "What ancient kingdom predated Armenia in the same region?",
                option: [
                    "Hittite",
                    "Urartu",
                    "Assyrian",
                    "Median"
                ],
                correctAnswer: 1
            },
            {
                question: "What is the name of the Armenian historian known as the 'father of Armenian history'?",
                option: [
                    "Mesrop Mashtots",
                    "Movses Khorenatsi",
                    "Grigor Narekatsi",
                    "Vazgen I"
                ],
                correctAnswer: 1
            },
            {
                question: "What is the Armenian name for Armenia?",
                option: [
                    "Hayastan",
                    "Ararat",
                    "Armenia",
                    "Armenik"
                ],
                correctAnswer: 0
            },
            {
                question: "Which mountain is considered sacred in Armenian culture?",
                option: [
                    "Mount Aragats",
                    "Mount Elbrus",
                    "Mount Ararat",
                    "Mount Everest"
                ],
                correctAnswer: 2
            },
            {
                question: "Which international treaty recognized Armenia's independence in 1920?",
                option: [
                    "Treaty of Kars",
                    "Treaty of Batum",
                    "Treaty of Sèvres",
                    "Treaty of Moscow"
                ],
                correctAnswer: 2
            },
            {
                question: "Which battle in 1918 was crucial in defending Armenian independence?",
                option: [
                    "Battle of Ani",
                    "Battle of Van",
                    "Battle of Sardarapat",
                    "Battle of Shushi"
                ],
                correctAnswer: 2
            }
        ]
    },
    {
        category: "Music",
        questions: [
            {
                question: "Which composer became deaf later in life but continued to compose music?",
                option: [
                    "Wolfgang Amadeus Mozart",
                    "Ludwig van Beethoven",
                    "Johann Sebastian Bach",
                    "Franz Schubert"
                ],
                correctAnswer: 1
            },
            {
                question: "Which note is also known as 'Middle C' on a piano?",
                option: [
                    "C1",
                    "C2",
                    "C3",
                    "C4"
                ],
                correctAnswer: 3
            },
            {
                question: "What does 'tempo' refer to in music?",
                option: [
                    "The pitch of the notes",
                    "The volume of the piece",
                    "The speed of the music",
                    "The key of the composition"
                ],
                correctAnswer: 2
            },
            {
                question: "Which famous pop group was originally from Sweden?",
                option: [
                    "ABBA",
                    "The Beatles",
                    "Queen",
                    "Backstreet Boys"
                ],
                correctAnswer: 0
            },
            {
                question: "How many strings does a standard violin have?",
                option: [
                    "5",
                    "6",
                    "4",
                    "3"
                ],
                correctAnswer: 2
            },
            {
                question: "Which musical symbol raises a pitch by a half step?",
                option: [
                    "Flat (♭)",
                    "Natural (♮)",
                    "Sharp (♯)",
                    "Repeat (𝄇)"
                ],
                correctAnswer: 2
            },
            {
                question: "What is the name of the scale with no sharps or flats?",
                option: [
                    "C major",
                    "A minor",
                    "G major",
                    "D major"
                ],
                correctAnswer: 0
            },
            {
                question: "Which classical composer wrote 'The Four Seasons'?",
                option: [
                    "Antonio Vivaldi",
                    "Johann Strauss",
                    "Joseph Haydn",
                    "Frédéric Chopin"
                ],
                correctAnswer: 0
            },
            {
                question: "Which country is known for originating reggae music?",
                option: [
                    "USA",
                    "Jamaica",
                    "Cuba",
                    "Brazil"
                ],
                correctAnswer: 1
            },
            {
                question: "What family of instruments does the trumpet belong to?",
                option: [
                    "Woodwind",
                    "Percussion",
                    "Brass",
                    "String"
                ],
                correctAnswer: 2
            },
            {
                question: "Which singer is known as the 'Queen of Pop'?",
                option: [
                    "Beyoncé",
                    "Madonna",
                    "Adele",
                    "Whitney Houston"
                ],
                correctAnswer: 1
            },
            {
                question: "What is the term for the high male singing voice?",
                option: [
                    "Tenor",
                    "Baritone",
                    "Bass",
                    "Alto"
                ],
                correctAnswer: 0
            },
            {
                question: "Which band wrote the album 'Dark Side of the Moon'?",
                option: [
                    "The Rolling Stones",
                    "Pink Floyd",
                    "Led Zeppelin",
                    "The Who"
                ],
                correctAnswer: 1
            },
            {
                question: "What kind of instrument is a timpani?",
                option: [
                    "String",
                    "Brass",
                    "Keyboard",
                    "Percussion"
                ],
                correctAnswer: 3
            },
            {
                question: "Who is known as the 'King of Rock and Roll'?",
                option: [
                    "Elvis Presley",
                    "Chuck Berry",
                    "Buddy Holly",
                    "Michael Jackson"
                ],
                correctAnswer: 0
            },
            {
                question: "What is a group of singers performing together called?",
                option: [
                    "Band",
                    "Orchestra",
                    "Choir",
                    "Trio"
                ],
                correctAnswer: 2
            },
            {
                question: "Which female artist released the hit song 'Rolling in the Deep'?",
                option: [
                    "Adele",
                    "Lady Gaga",
                    "Taylor Swift",
                    "Dua Lipa"
                ],
                correctAnswer: 0
            },
            {
                question: "Which instrument uses a slide to change pitch?",
                option: [
                    "Trumpet",
                    "Clarinet",
                    "Trombone",
                    "Flute"
                ],
                correctAnswer: 2
            },
            {
                question: "What style of music is known for its improvisation and swing?",
                option: [
                    "Jazz",
                    "Rock",
                    "Opera",
                    "Reggae"
                ],
                correctAnswer: 0
            },
            {
                question: "Which of the following is a woodwind instrument?",
                option: [
                    "Oboe",
                    "Trumpet",
                    "Tuba",
                    "Viola"
                ],
                correctAnswer: 0
            },
            {
                question: "What clef is commonly used for violin music?",
                option: [
                    "Bass clef",
                    "Alto clef",
                    "Tenor clef",
                    "Treble clef"
                ],
                correctAnswer: 3
            },
            {
                question: "Which era of music came before the Classical period?",
                option: [
                    "Romantic",
                    "Baroque",
                    "Modern",
                    "Medieval"
                ],
                correctAnswer: 1
            },
            {
                question: "Which artist is famous for the song 'Thriller'?",
                option: [
                    "Prince",
                    "Michael Jackson",
                    "Justin Timberlake",
                    "Usher"
                ],
                correctAnswer: 1
            },
            {
                question: "Which key has one sharp?",
                option: [
                    "G major",
                    "D major",
                    "C major",
                    "F major"
                ],
                correctAnswer: 0
            },
            {
                question: "What is the Italian term for 'loud' in music?",
                option: [
                    "Piano",
                    "Mezzo",
                    "Forte",
                    "Legato"
                ],
                correctAnswer: 2
            }
        ]
    },
    {
        category: "Technology",
        questions: [
            {
                question: "What does CPU stand for?",
                option: [
                    "Central Processing Unit",
                    "Computer Personal Unit",
                    "Central Program Unit",
                    "Central Performance Unit"
                ],
                correctAnswer: 0
            },
            {
                question: "Which company created the Windows operating system?",
                option: [
                    "Apple",
                    "Google",
                    "Microsoft",
                    "IBM"
                ],
                correctAnswer: 2
            },
            {
                question: "What does 'HTTP' stand for?",
                option: [
                    "HyperText Transfer Protocol",
                    "High Transfer Text Protocol",
                    "Hyper Tool Transfer Protocol",
                    "Home Tool Transfer Protocol"
                ],
                correctAnswer: 0
            },
            {
                question: "Which programming language is primarily used for web development?",
                option: [
                    "Python",
                    "C++",
                    "JavaScript",
                    "Swift"
                ],
                correctAnswer: 2
            },
            {
                question: "What is the main function of a router in a network?",
                option: [
                    "Stores files",
                    "Prints documents",
                    "Connects devices to the internet",
                    "Provides electricity"
                ],
                correctAnswer: 2
            },
            {
                question: "What does 'AI' stand for in technology?",
                option: [
                    "Artificial Integration",
                    "Automatic Interface",
                    "Artificial Intelligence",
                    "Automated Interaction"
                ],
                correctAnswer: 2
            },
            {
                question: "What is the name of Apple's mobile operating system?",
                option: [
                    "Android",
                    "iOS",
                    "macOS",
                    "Windows Mobile"
                ],
                correctAnswer: 1
            },
            {
                question: "What technology is used to make phone calls over the internet?",
                option: [
                    "Bluetooth",
                    "VoIP",
                    "NFC",
                    "LTE"
                ],
                correctAnswer: 1
            },
            {
                question: "What is the main purpose of a firewall?",
                option: [
                    "To store files",
                    "To cool down the computer",
                    "To protect against unauthorized access",
                    "To scan documents"
                ],
                correctAnswer: 2
            },
            {
                question: "Which device is used to input text into a computer?",
                option: [
                    "Monitor",
                    "Keyboard",
                    "Scanner",
                    "Mouse"
                ],
                correctAnswer: 1
            },
            {
                question: "Which company manufactures the Pixel smartphone?",
                option: [
                    "Apple",
                    "Samsung",
                    "Google",
                    "Huawei"
                ],
                correctAnswer: 2
            },
            {
                question: "What type of memory is non-volatile and used for long-term storage?",
                option: [
                    "RAM",
                    "ROM",
                    "Cache",
                    "Flash"
                ],
                correctAnswer: 3
            },
            {
                question: "Which company is known for developing the Android OS?",
                option: [
                    "Microsoft",
                    "Google",
                    "Samsung",
                    "IBM"
                ],
                correctAnswer: 1
            },
            {
                question: "What is the term for malicious software?",
                option: [
                    "Firmware",
                    "Adware",
                    "Malware",
                    "Freeware"
                ],
                correctAnswer: 2
            },
            {
                question: "Which of these is a cloud storage service?",
                option: [
                    "Dropbox",
                    "Excel",
                    "Photoshop",
                    "Notepad"
                ],
                correctAnswer: 0
            },
            {
                question: "What is 5G primarily used for?",
                option: [
                    "Audio recording",
                    "File storage",
                    "High-speed mobile internet",
                    "Computer repair"
                ],
                correctAnswer: 2
            },
            {
                question: "Which programming language is commonly used for data analysis?",
                option: [
                    "HTML",
                    "Python",
                    "CSS",
                    "Swift"
                ],
                correctAnswer: 1
            },
            {
                question: "What does USB stand for?",
                option: [
                    "Universal Serial Bus",
                    "Unified System Base",
                    "Universal Standard Block",
                    "United Software Bridge"
                ],
                correctAnswer: 0
            },
            {
                question: "Which device is primarily used to scan documents?",
                option: [
                    "Printer",
                    "Scanner",
                    "Projector",
                    "Modem"
                ],
                correctAnswer: 1
            },
            {
                question: "What company developed the 'Alexa' virtual assistant?",
                option: [
                    "Apple",
                    "Microsoft",
                    "Amazon",
                    "Google"
                ],
                correctAnswer: 2
            },
            {
                question: "What type of device is a Chromebook?",
                option: [
                    "Desktop computer",
                    "Smartphone",
                    "Tablet",
                    "Laptop"
                ],
                correctAnswer: 3
            },
            {
                question: "Which of the following is an example of open-source software?",
                option: [
                    "Microsoft Office",
                    "Adobe Photoshop",
                    "Linux",
                    "Final Cut Pro"
                ],
                correctAnswer: 2
            },
            {
                question: "Which technology is used in cryptocurrency?",
                option: [
                    "Blockchain",
                    "Cloud storage",
                    "AI",
                    "VPN"
                ],
                correctAnswer: 0
            },
            {
                question: "Which of these is not an input device?",
                option: [
                    "Mouse",
                    "Keyboard",
                    "Monitor",
                    "Scanner"
                ],
                correctAnswer: 2
            },
            {
                question: "Which company developed the first iPhone?",
                option: [
                    "Nokia",
                    "Apple",
                    "Samsung",
                    "Sony"
                ],
                correctAnswer: 1
            }
        ]
    }


]